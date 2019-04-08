document.addEventListener("DOMContentLoaded", () => {
    const app = new App(
      document.querySelector('#create-task-form'),
      document.querySelector('#new-task-description'),
      document.querySelector("#list")
    )
});
