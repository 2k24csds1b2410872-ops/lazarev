let todoList=[];
function addTodo(){
  let inputDate=document.querySelector('#todo-date');
  let inputElement=document.querySelector('#todo-input');
  let todoItem = inputElement.value;
  let todoDate=inputDate.value;
  todoList.push({item:todoItem,dueDate:todoDate});
  inputElement.value='';
  inputDate.value='';
  displayItems();
}
function displayItems(){
  let containerElement=document.querySelector('.todo-container');
  let newhtml='';
  for(let i=0; i<todoList.length; i++){
    let {item,dueDate}=todoList[i];
    newhtml+=`
    <span>${item} </span>
    <span>${dueDate} </span>
    <button   class="btn-delete"onclick="todoList.splice(${i},1);
    displayItems();">Delete</button>
    `
  }
  containerElement.innerHTML=newhtml;
}
  // by another method
  // here we make the loop for adding the list to the new list we add by taking the each word by i index
  //  displayElement.innerText='';
  // for(let i=0; i<todoList.length; i++){
  //   displayElement.innerText=displayElement.innerText +"\n"+ todoList[i];
  // }

// here we make the list to store the toso text in the list
// by by this first we take the rext from the input and then add that it the new list
 // by this we get value from the input inputelement.value
// byt his we add the element in the list push
 // now as we take the value and add that in the new list just remove the input
  // inputElement.value='';
  // so whenever we call this function then this function take the complete list and add that to the paragraph
//function displayItems(){
// by first method
  // let newhtml='';
  // for(let i=0; i<todoList.length; i++){
  //   // let item=todoList[i].item;
  //   // let dueDate=todoList[i].dueDate;
  //   let {item,dueDate}=todoList[i];
  //   newhtml+=`
  //   <div>
  //   <span>${item} </span>
  //   <span>${dueDate} </span>
  //   <button onclick="todoList.splice(${i},1);
  //   displayItems();">Delete</button>
    
  //   </div>
  //   `
  // }