// dark and light mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }

});


// show more and show less

const moreBtn = document.getElementById("moreBtn");
const moreText = document.getElementById("moreText");

moreBtn.addEventListener("click", function () {

    if (moreText.hidden) {

        moreText.hidden = false;
        moreBtn.textContent = "Show Less";

    } else {

        moreText.hidden = true;
        moreBtn.textContent = "Show More";

    }

});


// projects data

const projects = [
    {
        title: "Barbershop Management System",
        description: "A system for managing appointments, customer records, and barber availability.",
        category: "Programming",
        technologies: ["Java", "Database"]
    },

    {
        title: "Personal CV Website",
        description: "A responsive personal CV website designed using HTML and CSS.",
        category: "Web",
        technologies: ["HTML", "CSS", "JavaScript"]
    },

    {
        title: "Interactive Web Project",
        description: "A web project that uses JavaScript and DOM manipulation to create interactive features.",
        category: "Web",
        technologies: ["HTML", "CSS", "JavaScript"]
    }
];


// container for the project cards

const projectsContainer = document.getElementById("projectsContainer");


// display the projects

function renderProjects(category = "All") {

    // clear old cards so they do not repeat
    projectsContainer.innerHTML = "";

    const filteredProjects = projects.filter(function (project) {
        return category === "All" || project.category === category;
    });

    filteredProjects.forEach(function (project) {

        const card = document.createElement("article");
        card.classList.add("project-card");

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const categoryText = document.createElement("p");
        categoryText.textContent = "Category: " + project.category;

        const technologies = document.createElement("p");
        technologies.textContent =
            "Technologies: " + project.technologies.join(", ");

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(categoryText);
        card.appendChild(technologies);

        projectsContainer.appendChild(card);
    });

}


// show all projects when the page opens

renderProjects();


// filter projects

const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedCategory = button.dataset.filter;

        renderProjects(selectedCategory);

    });

});


// print or save the cv as pdf

const printBtn = document.getElementById("printBtn");

printBtn.addEventListener("click", function () {
    window.print();
});