
// GSAP Timeline animations
const tl = gsap.timeline();

// Staggered entrance animations
tl.to(
  ".header",
  {
    opacity: 1,
    duration: 0.8,
    ease: "power2.out",
  },
  0
)
  .to(
    ".subtitle",
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "back.out",
    },
    0.1
  )
  .to(
    "h1",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out",
    },
    0.2
  )
  .to(
    ".accent-line",
    {
      opacity: 1,
      scaleX: 1,
      duration: 0.6,
      ease: "back.out",
    },
    0.4
  )
  .to(
    ".tagline",
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
    },
    0.3
  )
  .to(
    ".bottle-container",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out",
    },
    0.4
  )
  .to(
    ".email-form",
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
    },
    0.5
  )
  .to(
    ".footer-text",
    {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    },
    0.6
  );

// Floating bottle animation
gsap.to(".bottle-container", {
  y: 15,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

// ============================================
// EmailJS Configuration
// ============================================
const EMAILJS_PUBLIC_KEY = "VzhT44yXmVVlsnW79";
const EMAILJS_SERVICE_ID = "service_4u9j2wi";  // Your Gmail service ID
const EMAILJS_TEMPLATE_ID = "template_wa77k16"; // Get this from EmailJS Email Templates

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Form submission
const form = document.getElementById("emailForm");
const successMessage = document.getElementById("successMessage");
const emailInput = document.getElementById("emailInput");
const submitButton = document.querySelector(".submit-btn");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const userEmail = emailInput.value;

  if (userEmail) {
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    // Prepare template parameters
    const templateParams = {
      user_email: userEmail,
      to_email: "help@charittra.com",
      from_name: "Charittra Website",
      submission_time: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "long"
      })
    };

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log("SUCCESS!", response.status, response.text);

      // Success animation
      gsap.to(successMessage, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      // Clear input
      emailInput.value = "";

      // Hide message after 4 seconds
      setTimeout(() => {
        gsap.to(successMessage, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }, 4000);

    } catch (error) {
      console.error("FAILED...", error);
      alert("Failed to send subscription. Please try again.");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Notify Me";
    }
  }
});

// Subtle hover effects on bottle
document
  .querySelector(".bottle-container")
  .addEventListener("mouseenter", function () {
    gsap.to(".bottle-container", {
      scale: 1.05,
      duration: 0.4,
      ease: "power2.out",
    });
  });

document
  .querySelector(".bottle-container")
  .addEventListener("mouseleave", function () {
    gsap.to(".bottle-container", {
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  });