const projects = {

    pioguide: {
        title: "PioGuide",
        description:
            "iOS Campus Navigation & AI Academic Advising Application.",

        images: [
            "./images/projects/pioguide/1.png",
            "./images/projects/pioguide/2.png",
            "./images/projects/pioguide/3.png",
            "./images/projects/pioguide/4.png"
        ]
    },

    motorsport: {
        title: "MOTORSPORT",
        description:
            "Sim-Cade Racing, Vehicle Simulation + Detail goodness.",

        images: [
            "./images/projects/motorsport/1.png",
            "./images/projects/motorsport/2.png",
            "./images/projects/motorsport/3.png",
            "./images/projects/motorsport/4.png"
        ]
    }

};


let currentProject = null;


/*
    Open the project popup
*/
function openProject(projectName) {
    currentProject = projects[projectName];
    if (!currentProject) {
        return;
    }
    document.getElementById("project-title").textContent =
        currentProject.title;
    document.getElementById("project-description").textContent =
        currentProject.description;
    const gallery = document.getElementById("project-gallery");
    gallery.innerHTML = "";
    currentProject.images.forEach((imagePath, index) => {
        const image = document.createElement("img");
        image.src = imagePath;
        image.alt =
            `${currentProject.title} screenshot ${index + 1}`;
        if (index === 0) {
            image.classList.add("selected");
        }
        image.addEventListener("click", () => {
            gallery
                .querySelectorAll("img")
                .forEach(img => {
                    img.classList.remove("selected");
                });
            image.classList.add("selected");
        });
        gallery.appendChild(image);
    });
    // Open with animation
    document
        .getElementById("project-modal")
        .classList.add("modal-open");
}


function closeProject() {
    // Close with animation
    document
        .getElementById("project-modal")
        .classList.remove("modal-open");
}
/*
    Close the popup if the user clicks
    on the dark background outside the popup
*/
document.getElementById("project-modal").addEventListener(
    "click",
    function (event) {
        // Only close if the actual background was clicked
        if (event.target === this) {
            closeProject();
        }
    }
);

/*
    Close the popup when the user presses Escape
*/
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeProject();
    }
});