import * as ProjectCollector from "../service/ProjectCollector.js";
import * as ProjectViewer from "./ProjectViewer.js";
import config from "../config.json" with { type: "json" };

const projectList = document.querySelector("#project-list");
const addNewProjectButton = document.querySelector("#add-new-project-btn");

export function updateProjectList() {
    // clear old project buttons
    projectList.replaceChildren(addNewProjectButton);

    ProjectCollector.loadProjects();

    if (ProjectCollector.projects.length == 0) {
        // create new default project
        ProjectCollector.createProject(config.DEFAULT_PROJECT_NAME);
        ProjectCollector.saveProjects();
    }

    for (const project of ProjectCollector.projects) {
        // create project buttons
        const newProjectButton = document.createElement("button");
        newProjectButton.textContent = project.name;
        newProjectButton.dataset.id = project.id;
        projectList.appendChild(newProjectButton);
    }
}

// connect project button event
projectList.addEventListener("click", event => {
    const projectId = event.target.dataset.id;
    if (projectId == undefined) {
        return;
    }

    const project = ProjectCollector.getProject(projectId);
    ProjectViewer.updateProjectView(project);
});