const filterButtons = document.querySelectorAll(".filter-button");
const projectRows = document.querySelectorAll(".project-row");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Update active button
        filterButtons.forEach(button => {
            button.classList.remove("active");
        });

        button.classList.add("active");

        // Get selected filter
        const selectedFilter = button.dataset.filter;

        // Filter projects
        projectRows.forEach(project => {

            // A project can belong to multiple categories
            const projectCategories =
                project.dataset.category.split(" ");

            if (
                selectedFilter === "all" ||
                projectCategories.includes(selectedFilter)
            ) {
                project.classList.remove("hidden");
            }
            else {
                project.classList.add("hidden");
            }

        });

    });

});