import * as ProjectCollector from "../service/ProjectCollector.js";

const projectTitleLabel = document.querySelector("#project-name");
const projectActionButtonsContainer = document.querySelector("#action-buttons");
const todoItemListContainer = document.querySelector("#todo-item-list");
const addTodoButton = document.querySelector("#add-todo-btn");

let currentProject;

export function updateProjectView(project) {
    console.log(`Updating ProjectView for Project id ${project.id}`);
    // update project details
    projectTitleLabel.textContent = project.name;

    // clear old todo items
    todoItemListContainer.replaceChildren(addTodoButton.parentElement);

    // create todo items
    project.todolist.items.forEach((todoItem, id) => {
        const listItem = document.createElement("li");

        const todoItemButton = document.createElement("button");
        todoItemButton.classList.add("todo-item", todoItem.priority); // add classes for appearance
        todoItemButton.dataset.id = id;
        // TODO: handle item ordering

        listItem.appendChild(todoItemButton);
        todoItemListContainer.appendChild(listItem);
    });
}