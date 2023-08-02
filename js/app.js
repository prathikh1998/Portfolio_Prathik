// JavaScript to toggle experience details
function toggleDetails(id) {
    const container = document.getElementById(id);
    const isActive = container.parentElement.classList.toggle('active');

    if (isActive) {
        container.parentElement.style.marginTop = '0';
        container.parentElement.style.order = -1;

        // Scroll to the details section
        const detailsSection = document.getElementById(id);
        detailsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        // If the clicked entry is inactive, reset the order and margins of all entries
        const experienceEntries = document.querySelectorAll('.experience-entry');
        experienceEntries.forEach((entry) => {
            entry.style.order = 0;
            entry.style.marginTop = '0';
        });

        // Scroll back to the image
        const image = document.querySelector(`img[alt="${id}-image"]`);
        image.scrollIntoView({ behavior: 'smooth' });
    }
}


function toggleDetails(id) {
    const container = document.getElementById(id);
    container.parentElement.classList.toggle('active');

    // Get all the experience entries
    const experienceEntries = document.querySelectorAll('.experience-entry');

    // Loop through all the experience entries and move them down except for the one being clicked
    experienceEntries.forEach((entry) => {
        if (entry !== container.parentElement) {
            entry.style.marginTop = '20px'; // Adjust the margin value as needed
        }
    });

    // If the clicked entry is active, move it to the top
    if (container.parentElement.classList.contains('active')) {
        container.parentElement.style.marginTop = '0';
    }
}


// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Perform any additional processing if needed

        // Redirect the user to the Google Forms link after form submission
        const formurl = "https://docs.google.com/forms/d/e/1FAIpQLScmsVGr4KWw0ymAkNxMYF7JQDoHLP480qKbk_q84NXbMcRqrA/viewform?usp=sf_link";
        window.open(formurl, "_blank");
    });


const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

function toggleResumeDropdown() {
    const dropdown = document.getElementById("resume-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function previewResume() {
    const resumeURL = "resume.pdf"; // Replace this with the actual URL to your resume file
    window.open(resumeURL, "_blank");
}


