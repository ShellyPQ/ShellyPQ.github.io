const savedTheme = localStorage.getItem("theme") || "dark";

//apply the saved theme immediately
document.documentElement.setAttribute("data-theme", savedTheme);

const themeToggle = document.querySelector(".theme-toggle");

//set the correct icon
themeToggle.textContent = savedTheme === "dark" ? "☀" : "☾";

themeToggle.addEventListener("click", () => {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    const newTheme =
        currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);

    themeToggle.textContent =
        newTheme === "dark" ? "☀" : "☾";
});