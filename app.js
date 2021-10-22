
const task = document.querySelector('form');
console.log(task);
//events
task.addEventListener('submit', addTask);

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
    //add li item to ul
    const ul = document.querySelector('.collection');
    ul.appendChild(li);




    console.log(li);
     event.preventDefault();
}
