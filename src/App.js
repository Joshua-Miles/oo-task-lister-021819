class App {

    constructor(form, taskDescriptionInput, listContainer){
    
        const taskList = new TaskList();
        listContainer.append(taskList.element)
        
        // Add Form Behavior Here!
        form.addEventListener('submit', function(e){
            e.preventDefault()
            const description = taskDescriptionInput.value
            taskList.createItem(description)
            taskDescriptionInput.value = ''
        })
    }    

}