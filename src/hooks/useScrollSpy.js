// src/hooks/useScrollSpy.js
import { useEffect, useRef } from "react";

/**
 * useScrollSpy observes each section in sectionIds
 * and updates the URL path to /sectionId when that section is in view.
 */
function useScrollSpy(sectionIds = []) {
  const observer = useRef(null);

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If user is in "landing", path = "/", else /sectionId
          const path = entry.target.id === "landing" ? "/" : `/${entry.target.id}`;
          window.history.replaceState({}, "", path);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      threshold: 0.55, // ~55% in view triggers
    });

    // Observe each section
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.current.observe(el);
    });

    // Cleanup on unmount
    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.current.unobserve(el);
      });
    };
  }, [sectionIds]);

  return null; // This is just a hook (no rendered output)
}

export default useScrollSpy;
