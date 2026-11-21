import { projects } from "./project-catalog";

const covers = [
  [
    "DNF Trading",
    "DNF Trading",
    "photo",
    "/instruments.png",
    "#a6bcca",
    "#233649",
    [
      "Rotate the model",
      "Configure",
      "Review order"
    ]
  ],
  [
    "3DFV — 3D Food Visualisation",
    "3DFV",
    "photo",
    "/restaurant.jpg",
    "#ccaa83",
    "#523123",
    [
      "Browse menu",
      "Preview in AR",
      "Place order"
    ]
  ],
  [
    "SpendTrail",
    "SpendTrail",
    "photo",
    "/spendtrail.png",
    "#f78f72",
    "#202d3a",
    [
      "Spending",
      "Purchases",
      "Refunds"
    ]
  ],
  [
    "TTMS — Timetable Management System",
    "TTMS",
    "grid",
    null,
    "#b3a7ff",
    "#28224b",
    [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri"
    ]
  ],
  [
    "KT Sports Hub",
    "KT Sports Hub",
    "photo",
    "/showcase/sports.png",
    "#9ee9be",
    "#173c36",
    [
      "Find a venue",
      "Book a slot",
      "Check in"
    ]
  ],
  [
    "UMT LMS Redesign",
    "UMT LMS",
    "grid",
    null,
    "#83b8ff",
    "#1e3454",
    [
      "Courses",
      "Gradebook",
      "Assignments"
    ]
  ],
  [
    "C# Timetable Manager",
    "Timetable Manager",
    "window",
    null,
    "#81c7d3",
    "#1d4555",
    [
      "Classes",
      "Teachers",
      "Rooms"
    ]
  ],
  [
    "Wilton Dental",
    "Wilton Dental",
    "photo",
    "/tooth.webp",
    "#aae4d8",
    "#23454c",
    [
      "Treatments",
      "Meet the team",
      "Care journey"
    ]
  ],
  [
    "Hotel Javson",
    "Hotel Javson",
    "photo",
    "/hotel.jpg",
    "#e7bd86",
    "#292d23",
    [
      "Stay",
      "Dine",
      "Explore"
    ]
  ],
  [
    "TRST Maintenance",
    "TRST Maintenance",
    "photo",
    "/property.png",
    "#9cc4ef",
    "#203349",
    [
      "Plumbing",
      "Heating",
      "Enquiries"
    ]
  ],
  [
    "Atarion Solutions",
    "Atarion Solutions",
    "studio",
    null,
    "#f3a889",
    "#482e47",
    [
      "Services",
      "Team",
      "Projects"
    ]
  ],
  [
    "Campus Review / Ideal Campus",
    "Campus Review",
    "photo",
    "/showcase/campus.webp",
    "#f9b278",
    "#34233c",
    [
      "Scan",
      "Explore",
      "Reveal"
    ]
  ],
  [
    "Certificate Generator",
    "Certificate Generator",
    "certificate",
    null,
    "#e4c785",
    "#493e32",
    [
      "Template",
      "Personalize",
      "Export PDF"
    ]
  ],
  [
    "CreateX Certificate Download Portal",
    "CreateX Portal",
    "window",
    null,
    "#c1a7ff",
    "#372748",
    [
      "Find your certificate",
      "Search participants",
      "Download PDF"
    ]
  ],
  [
    "SialMail / Email Automator",
    "SialMail",
    "inbox",
    null,
    "#91e2c8",
    "#1d3c39",
    [
      "Leads",
      "Campaigns",
      "Follow-ups"
    ]
  ],
  [
    "Office Document Approval System",
    "Office Approvals",
    "flow",
    null,
    "#f0cd8c",
    "#413544",
    [
      "Manufacturing",
      "Quality assurance",
      "Finance"
    ]
  ],
  [
    "PhishScan",
    "PhishScan",
    "inbox",
    null,
    "#a4bafe",
    "#24264a",
    [
      "Inbox",
      "Analyze message",
      "Review signals"
    ]
  ],
  [
    "Personal AI Agent",
    "Personal AI Agent",
    "flow",
    null,
    "#b0fcdd",
    "#233e47",
    [
      "Keyword",
      "Semantic",
      "Hybrid"
    ]
  ],
  [
    "CAPTCHA Strength Evaluator",
    "CAPTCHA Evaluator",
    "captcha",
    null,
    "#e8b8f8",
    "#41294d",
    [
      "Image input",
      "Recognition",
      "Evaluate"
    ]
  ],
  [
    "Used Car Price Prediction",
    "Car Price Prediction",
    "chart",
    null,
    "#ffae88",
    "#4b3032",
    [
      "Vehicle features",
      "Preprocessing",
      "Estimate"
    ]
  ],
  [
    "LALR(1) SQL Parser Visualizer",
    "SQL Parser",
    "flow",
    null,
    "#8ee3fe",
    "#263e52",
    [
      "Tokens",
      "Parse actions",
      "Syntax tree"
    ]
  ],
  [
    "ServerMind / DevOpsPilot",
    "DevOpsPilot",
    "flow",
    null,
    "#b6a9fe",
    "#2a2b51",
    [
      "Build",
      "Evaluate",
      "Deploy"
    ]
  ],
  [
    "GRIDGUARD PK",
    "GRIDGUARD PK",
    "chart",
    null,
    "#a4efc4",
    "#1b3e3b",
    [
      "Meter readings",
      "Consistency checks",
      "Detection study"
    ]
  ],
  [
    "NeuroSpatial-OS",
    "NeuroSpatial-OS",
    "spatial",
    null,
    "#d4b2ff",
    "#392851",
    [
      "Concept",
      "Research",
      "Documentation"
    ]
  ]
];

export const showcase = covers.map(([title, coverTitle, motif, image, accent, ink, labels]) => ({
  ...projects.find(project => project.title === title),
  coverTitle,
  motif,
  image,
  accent,
  ink,
  labels,
}));

export function ProjectArtwork({ project }) {
  const { motif, image, coverTitle, accent, ink, labels } = project;
  return (
    <div className={`project-art art-${motif}`} style={{ "--art-accent": accent, "--art-ink": ink }}>
      {image ? (
        <img src={image} alt="" decoding="async" />
      ) : (
        <div className="art-graphic" aria-hidden="true">
          <div className="art-window">
            <div className="art-window-bar"><i /><i /><i /></div>
            <div className="art-motif">
              <div className="art-shapes">{Array.from({ length: motif === "grid" || motif === "captcha" ? 9 : 5 }, (_, i) => <i key={i} />)}</div>
              <div className="art-annotations">
                {labels.map(label => <span key={label}>{label}</span>)}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="art-caption"><strong>{coverTitle}</strong></div>
    </div>
  );
}
