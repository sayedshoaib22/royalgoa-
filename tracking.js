// ══════════════════════════════════════════════
// VISITOR TRACKING SYSTEM
// ══════════════════════════════════════════════

const API_BASE = "https://royal-goa-ride-backend-production.up.railway.app";

// Tracking utility function
function sendTrackingEvent(endpoint) {
    fetch(API_BASE + endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            page: window.location.pathname,
            time: new Date().toISOString(),
            userAgent: navigator.userAgent
        })
    }).catch(() => {
        console.log("Tracking API unavailable");
    });
}

// Initialize tracking
document.addEventListener("DOMContentLoaded", () => {

    // Track visitors
    sendTrackingEvent("/visit");

    // Track call clicks
    document.querySelectorAll('a[href^="tel:"]').forEach(btn => {
        btn.addEventListener("click", () => {
            sendTrackingEvent("/call");
        });
    });

    // Track WhatsApp clicks
    document.querySelectorAll('a[href*="wa.me"]').forEach(btn => {
        btn.addEventListener("click", () => {
            sendTrackingEvent("/whatsapp");
        });
    });

});
