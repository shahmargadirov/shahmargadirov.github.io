
const projects = {
    pioguide: "./projects/pioguide.html",
    motorsport: "./projects/motorsport.html"
};

const modal = document.getElementById("project-modal");
const projectFrame = document.getElementById("project-frame");
const closeButton = document.querySelector(".close-button");

let previouslyFocusedElement = null;

function openProject(projectName) {
    const projectPath = projects[projectName];

    if (!projectPath) {
        console.error("Project not found:", projectName);
        return;
    }

    previouslyFocusedElement = document.activeElement;
    projectFrame.src = projectPath;
    modal.classList.add("modal-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeButton.focus();
}

function closeProject() {
    if (!modal.classList.contains("modal-open")) {
        return;
    }

    modal.classList.remove("modal-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    // Stop the embedded page after the closing animation.
    window.setTimeout(() => {
        if (!modal.classList.contains("modal-open")) {
            projectFrame.src = "about:blank";
        }
    }, 300);

    if (previouslyFocusedElement) {
        previouslyFocusedElement.focus();
    }
}

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeProject();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeProject();
    }
});
