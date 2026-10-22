const header = document.querySelector("#site-header");

// Check whether the current page is inside the projects folder
const isProjectPage =
    window.location.pathname.includes("/projects/");

// Use the correct path depending on the current page
const rootPath = isProjectPage ? "../" : "";

header.innerHTML = `
    <nav class="navbar">

        <a href="${rootPath}index.html" class="logo">
            MICHELLE PORTELLI
            <span class="logo-subtitle">
                | GAME PROGRAMMING PORTFOLIO
            </span>
        </a>

        <div class="nav-links">

            <a href="${rootPath}index.html" data-page="index.html">
                Home
            </a>

            <a href="${rootPath}about.html" data-page="about.html">
                About
            </a>

            <a href="${rootPath}projects.html" data-page="projects.html">
                Projects
            </a>

            <a href="${rootPath}contact.html" data-page="contact.html">
                Contact
            </a>

            <button
                class="theme-toggle"
                aria-label="Toggle dark mode">
                ☾
            </button>

        </div>

    </nav>
`;


// ---------- Active Navigation Link ----------

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

const navLinks =
    document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    const linkPage = link.dataset.page;

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});


// Keep Projects highlighted while viewing a project page
if (isProjectPage) {

    const projectsLink =
        document.querySelector(
            '.nav-links a[data-page="projects.html"]'
        );

    projectsLink.classList.add("active");
}