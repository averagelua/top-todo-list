import Project from "../model/Project.js";

export let projects = [];

export function loadProjects() {
    const savedProjects = localStorage.getItem("projects")
    if (savedProjects) {
        projects = JSON.parse(savedProjects)
            .map(projectData => Project.fromJSON(projectData));
    }
}

export function saveProjects() {
    localStorage.setItem("projects", JSON.stringify(projects));
}

export function createProject(name) {
    const projectId = crypto.randomUUID();
    const newProject = new Project(name, projectId)
    projects.push(newProject);

    return projectId;
}

export function getProject(id) {
    return projects.find((project) => project.id == id);
}

export function deleteProject(id) {
    const projectIdx = projects.findIndex((project) => project.id);
    if (projectIdx == -1) {
        throw new Error(`Project id ${id} doesn't exist`);
    }
    projects.splice(projectIdx, 1);
}