/* 
   =========================================
   JONES TRANSPORT - CORE WEBSITE SCRIPT
   =========================================
   Purpose: Dynamic footer updates and user personalization.
   Author: Brett
*/

document.addEventListener("DOMContentLoaded", function() {
    // 1. AUTOMATIC DATE FUNCTIONALITY
    // Dynamically fetches the current calendar year to ensure the footer copyright never expires.
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }

    // 2. TIME-BASED GREETING EXTRA FUNCTIONALITY
    // Self-reflection improvement: Greets the user based on their specific time of day.
    const greetingParagraph = document.getElementById("welcome-greeting");
    if (greetingParagraph) {
        const currentHour = new Date().getHours();
        let greetingMessage = "";

        if (currentHour < 12) {
            greetingMessage = "Good morning! Welcome to Jones Transport.";
        } else if (currentHour < 18) {
            greetingMessage = "Good afternoon! Looking for reliable rubble removal?";
        } else {
            greetingMessage = "Good evening! Book your waste removal slot for tomorrow.";
        }
        
        greetingParagraph.textContent = greetingMessage;
    }
});