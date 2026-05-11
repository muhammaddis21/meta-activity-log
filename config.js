// ─────────────────────────────────────────────────────────────
//  RESTORE HAPPY WELLNESS — Account Configuration
//  Edit this file to update accounts, benchmarks, and rules.
// ─────────────────────────────────────────────────────────────

var APP_CONFIG = {

  pin: "1234",

  groups: [
    {
      id: "restore",
      name: "Restore Happy Wellness",
      logo: "RHW",
      color: "#4f8ef7",
      description: "Franchisee + Corporate · Consolidated view",
      accounts: [
        { name: "Restore Franchisee", id: "act_7202184289901773" },
        { name: "Restore Corporate",  id: "act_2779853422210657" }
      ],

      // ── CPA RULES (matched against campaign name keywords) ──
      cpaRules: [
        {
          keyword: "booking",
          objective: "Website Booking",
          good:    { max: 100,  label: "Good",           color: "#3dd68c" },
          warning: { min: 100, max: 200, label: "Warning — review", color: "#f0a04f" },
          bad:     { min: 200,  label: "Pause immediately", color: "#f75f5f" }
        },
        {
          keyword: "lead",
          objective: "Meta Lead Gen",
          good:    { max: 60,  label: "Good",           color: "#3dd68c" },
          warning: { min: 60, max: 120, label: "Warning — review", color: "#f0a04f" },
          bad:     { min: 120, label: "Pause immediately", color: "#f75f5f" }
        }
      ],

      // Default CPA threshold if no keyword matches
      defaultCPA: 100,

      // ── BENCHMARK SIDEBAR ──
      benchmarks: [
        { metric: "Booking CPA",  good: "< $100",  warn: "$100–$200", bad: "> $200" },
        { metric: "Lead CPA",     good: "< $60",   warn: "$60–$120",  bad: "> $120" },
        { metric: "CTR",          good: "> 2.5%",  warn: "1–2.5%",    bad: "< 1%"   },
        { metric: "ROAS",         good: "> 3.0x",  warn: "2–3x",      bad: "< 2x"   },
        { metric: "Relevance",    good: "> 6",     warn: "4–6",       bad: "< 4"    }
      ],

      // ── QC CHECKLIST ──
      qcChecklist: [
        {
          category: "Campaign setup",
          items: [
            "Campaign name contains objective keyword (booking / lead)",
            "Campaign objective matches keyword in name",
            "Budget set per account guidelines",
            "Start date and end date confirmed"
          ]
        },
        {
          category: "Ad set",
          items: [
            "Targeting audience confirmed and approved",
            "Placement strategy set (Feed + Reels recommended)",
            "Bid strategy aligned with objective",
            "Frequency caps set for retargeting ad sets"
          ]
        },
        {
          category: "Creatives",
          items: [
            "Ad naming convention followed (TYPE | Date | Description | Group)",
            "Creative approved by client before launch",
            "At least 2 creative variants per ad set",
            "Video ads: first 3 seconds reviewed",
            "Image ads: text overlay under 20%"
          ]
        },
        {
          category: "Tracking",
          items: [
            "Pixel event firing confirmed in Events Manager",
            "UTM parameters added to all destination URLs",
            "Conversion event matches campaign objective",
            "Test purchase / lead submission completed"
          ]
        }
      ],

      // ── SIDEBAR NOTES ──
      notes: [
        "Midtown + Corporate accounts consolidated for reporting",
        "New creatives should follow TYPE | Date | Name | Group format",
        "Booking campaigns: pause anything above $200 CPA immediately",
        "Review all new ad sets within 48h of launch"
      ]
    }
  ]
};
