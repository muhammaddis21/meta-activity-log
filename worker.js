const GRAPH = 'https://graph.facebook.com/v22.0';
const CORS  = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type' };

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: { ...CORS, 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS' } });
    }

    // Proxy Meta API calls
    if (url.pathname.startsWith('/meta/')) {
      const token = env.META_TOKEN;
      if (!token) return jsonResp({ error: 'META_TOKEN not configured in Cloudflare secrets.' }, 500);

      const metaPath = url.pathname.slice(6); // strip /meta/
      const params   = new URLSearchParams(url.search);
      params.set('access_token', token);

      try {
        const resp = await fetch(`${GRAPH}/${metaPath}?${params}`, {
          method: request.method,
          headers: { 'Content-Type': 'application/json' },
          body: request.method === 'POST' ? request.body : undefined
        });
        const data = await resp.json();
        return jsonResp(data, resp.status);
      } catch (e) {
        return jsonResp({ error: e.message }, 500);
      }
    }

    // Serve static assets (index.html, config.js, etc.)
    return env.ASSETS.fetch(request);
  }
};

function jsonResp(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });
}
