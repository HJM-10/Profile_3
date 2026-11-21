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
    "screen",
    "/showcase/lms.webp",
    "#83b8ff",
    "#1e3454",
    [
      "Courses",
      "Gradebook",
      "Assignments"
    ],
    "Original frontend · demo workspace"
  ],
  [
    "PhishScan",
    "PhishScan",
    "screen",
    "/showcase/phishscan.webp",
    "#a4bafe",
    "#24264a",
    [
      "Inbox",
      "Analyze message",
      "Review signals"
    ],
    "Original frontend · sample inbox"
  ],
  [
    "SialMail / Email Automator",
    "SialMail",
    "screen",
    "/showcase/sialmail.webp",
    "#91e2c8",
    "#1d3c39",
    [
      "Leads",
      "Campaigns",
      "Follow-ups"
    ],
    "Original marketing frontend"
  ],
  [
    "Personal AI Agent",
    "Personal AI Agent",
    "screen",
    "/showcase/personal-agent.webp",
    "#b0fcdd",
    "#233e47",
    [
      "Keyword",
      "Semantic",
      "Hybrid"
    ],
    "Original Gradio frontend"
  ],
  [
    "NeuroSpatial-OS",
    "NeuroSpatial-OS",
    "photo",
    "/showcase/neurospatial.webp",
    "#d4b2ff",
    "#392851",
    [
      "Concept",
      "Research",
      "Documentation"
    ],
    "Research concept illustration"
  ],
  [
    "GRIDGUARD PK",
    "GRIDGUARD PK",
    "photo",
    "/showcase/gridguard.webp",
    "#a4efc4",
    "#1b3e3b",
    [
      "Meter readings",
      "Consistency checks",
      "Detection study"
    ],
    "Research proposal illustration"
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
    "CreateX Certificate Download Portal",
    "CreateX Portal",
    "screen",
    "/showcase/certificate-portal.webp",
    "#c1a7ff",
    "#372748",
    [
      "Find your certificate",
      "Search participants",
      "Download PDF"
    ],
    "Original frontend · search preview"
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
    "Certificate Generator",
    "Certificate Generator",
    "screen",
    "/showcase/certificate-generator.webp",
    "#e4c785",
    "#493e32",
    [
      "Template",
      "Personalize",
      "Export PDF"
    ],
    "Original editor · sample certificate"
  ],
  [
    "Office Document Approval System",
    "Office Approvals",
    "photo",
    "/showcase/office-approvals.webp",
    "#f0cd8c",
    "#413544",
    [
      "Manufacturing",
      "Quality assurance",
      "Finance"
    ],
    "Product proposal illustration"
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
    "photo",
    "/showcase/used-car.webp",
    "#ffae88",
    "#4b3032",
    [
      "Vehicle features",
      "Preprocessing",
      "Estimate"
    ],
    "Concept photograph"
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
  ]
];

export const showcase = covers.map(([title, coverTitle, motif, image, accent, ink, labels, sourceLabel]) => ({
  ...projects.find(project => project.title === title),
  coverTitle,
  motif,
  image,
  accent,
  ink,
  labels,
  sourceLabel,
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
