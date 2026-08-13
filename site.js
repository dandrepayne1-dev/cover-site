/* ============================================================
   CØVER — site script

   >>> EDIT THIS ONE LINE to point every booking button
       on every page at your Calendly link. <<<
   ============================================================ */

const COVER_BOOKING_URL = "https://calendly.com/REPLACE-ME";

/* Contact email used on the contact page. */
const COVER_EMAIL = "hello@coverfinancialgroup.com";

/* ------------------------------------------------------------
   Nothing below needs editing.
   ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", function () {
  // Point every booking link at the URL above.
  document.querySelectorAll("[data-book]").forEach(function (el) {
    el.setAttribute("href", COVER_BOOKING_URL);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  // Fill in the contact email anywhere it appears.
  document.querySelectorAll("[data-email]").forEach(function (el) {
    el.textContent = COVER_EMAIL;
    el.setAttribute("href", "mailto:" + COVER_EMAIL);
  });

  // Mark the current page in the nav.
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a.link").forEach(function (a) {
    var target = a.getAttribute("href");
    if (target === here || (here === "" && target === "index.html")) {
      a.setAttribute("aria-current", "page");
    }
  });

  // Reveal sections on scroll.
  var items = document.querySelectorAll(".rv");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
});
