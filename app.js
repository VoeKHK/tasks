const form = document.querySelector('form');
const taskList = document.querySelector('.collection');
const deleteTasksBtn = document.querySelector('#delete-tasks');

//events
form.addEventListener('submit', addTask);
taskList.addEventListener('click', deleteTask);
deleteTasksBtn.addEventListener('click', deleteTasks);

function deleteTasks(event){

   // taskList.innerHTML = '';
    while (taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

function deleteTask (event){
    if (event.target.textContent === 'x'){
        if (confirm('Kas kustutana')){
            event.target.parentElement.remove();
        }
    }
}



function addTask(event){
    const taskInput = document.querySelector('#task');


    //create <li> element.
    let task = taskInput.value;
    const li = document.createElement('li');
    //add class
    li.className = "collection-item";
    //create text element
    const text = document.createTextNode(task);
    //add text to li item
    li.appendChild(text);

  //create a element
    const link = document.createElement('a');
    //add CSS class
    link.className ='secondary-content';
    //set href attribute to <a>
    link.setAttribute('href', '#');
    //add text content to <a>
    link.appendChild(document.createTextNode('x'));
    //add <a> to <li>
    li.appendChild(link);
    //add li item to ul
    const ul = document.querySelector('.collection');
    ul.appendChild(li);




    console.log(li);
     event.preventDefault();
}
