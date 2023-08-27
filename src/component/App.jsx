import React, { useState } from "react";
function App(){

    const [task, setTask] = useState('');
    const [items, setItems] = useState([]);

    const inputhandler = (e)=>{
        setTask(e.target.value);
    }
    const addItems = (data) =>{
        setItems((setdata)=>{
            return [...setdata, task];
        },[setTask("")])
    }
    const removeItems = (id)=>{
        setItems((setdata)=>{
            return setdata.filter((items,index)=>{
                return index !== id;
            })
        })
    }


    return(

        <div className="App">
            <div className="title">
                <h1> <span>Todo List</span></h1>
               
            </div>
            <div className="inputdiv">
                <input type="text" onChange={inputhandler} value={task} className="input" placeholder="Add a new task" />
                <button className="btn" onClick={()=>(addItems(task)) }>Add</button>
            </div>

            <div className="listitems">
                <ul>
                    <span>
                    {items == "" && "No ToDo "}
                    </span>
                    {items.map((todo,index)=>{
                        return(
                            <li className="items" id={index}>
                                <p>{todo}</p>
                                <button onClick={()=>(removeItems(index))}>Delete</button>
                            </li>
                        )
                    })}
                    
                </ul>
            </div>
        </div>
    )

}
export default App