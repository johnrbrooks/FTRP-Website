// src/utils/scrollToSection.js

export function scrollToSection(sectionId) {
    const offset = 80; // Adjust to your navbar height
    const el = document.getElementById(sectionId);
    if (!el) return;
  
    // Calculate the top position minus navbar offset
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
  
    // Smoothly scroll to that position
    window.scrollTo({ top: y, behavior: "smooth" });
  
    // Update URL path (landing becomes '/', else `/${sectionId}`)
    const path = sectionId === "landing" ? "/" : `/${sectionId}`;
    window.history.replaceState({}, "", path);
  }
  