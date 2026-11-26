import React, { useEffect, useState } from "react";
import { PROJECTS } from "../data/projects.js";
import EnquiryForm from "./EnquiryForm.jsx";

// Lead-capture popup — appears once per session, ~6 seconds after landing
// on the home page, a project page or an area page. Reuses the site's own
// EnquiryForm, so leads go through the same EmailJS send with the same
// WhatsApp fallback; on project pages the project is preselected.
export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [projectName, setProjectName] = useState("General Enquiry — Eldeco Projects");

  useEffect(() => {
    const path = window.location.pathname;
    let eligible = false;
    let name = "General Enquiry — Eldeco Projects";
    if (path === "/" || path === "/index.html") eligible = true;
    const pm = path.match(/^\/projects\/([a-z0-9-]+)\.html$/);
    if (pm) {
      eligible = true;
      const p = PROJECTS.find((x) => x.slug === pm[1]);
      if (p) name = p.name;
    }
    if (/^\/areas\/[a-z0-9-]+\.html$/.test(path)) eligible = true;
    if (!eligible) return;
    let seen = false;
    try {
      seen = !!sessionStorage.getItem("leadpop-seen");
    } catch (e) {}
    if (seen) return;
    const t = setTimeout(() => {
      setProjectName(name);
      setOpen(true);
      try {
        sessionStorage.setItem("leadpop-seen", "1");
      } catch (e) {}
    }, 6000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open ]);

  if (!open) return null;

  return (
    <div className="leadpop-overlay" onClick={() => setOpen(false)} role="presentation">
      <div className="leadpop-wrap" role="dialog" aria-modal="true" aria-label="Enquire now" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="leadpop-close" aria-label="Close popup" onClick={() => setOpen(false)}>
          ×
        </button>
        <EnquiryForm project={projectName} />
      </div>
    </div>
  );
}
