import React from 'react'

function Todolist() {
    let[todos, setTodos]=React.useState([
        "play cricket",
        "go to gym",
        "go to school",
        "eat food",
    ]
);
    function addtodos(){
    var ntd = document.getElementById("d1").value;
    setTodos ([...todos,ntd]);
    }
  return (
    <div className ='border border-3 border-primary p-2 m-2'>
        <input type="text" id='d1' />
        <button 
        onClick={()=> {
        addtodos();
        }}
        >
            Add Todo
        </button>
        <ul>
            {todos.map((todo)=>{
            return (<li>{todo}</li>)
        })}
        </ul>
        </div>
  )
}

export default Todolist