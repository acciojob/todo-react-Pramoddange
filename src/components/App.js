
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const[inputValue,setInputValue]=useState("");
  const[tasks,setTask]=useState(["coding"]);
     const addTodo=()=>{
        let found=false;
       for(let i=0;i<tasks.length;i++){
        let task=tasks[i];
            if(task===inputValue){
                alert("Allready added the task");
                found=true;
                break;
            }
       }
        
        if(!found){
        setTask([...tasks,inputValue]);
        setInputValue('');
        }
     }
     const removeTask=(removetask)=>{
        const removingTask=tasks.filter(task=>
            task!==removetask
        );
        setTask(removingTask);
     }
    return (
        <div style={{margin:"20px"}}>
            <h2>To-Do List</h2>
        <div>
            <input placeholder="Enter Todo" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <button onClick={addTodo}>Add todo</button>
        </div>
        <ul className="tasks-list">
            {
            tasks.map(task => {
                return (
                 <li className="task">
                    <span>{task}</span>
                    <button onClick={()=>removeTask(task)}>Deleate</button>
                 </li>
                );
    })
     }
        </ul>

        </div>
    )
  

}

export default App
