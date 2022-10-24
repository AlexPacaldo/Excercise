import React, { useEffect, useRef, useState } from 'react'
import Task from '../components/Task'

let task = localStorage.getItem("Task")
? JSON.parse(localStorage.getItem("Task"))
:[]

const CodingTask = () => {

    let dateRef=useRef("");
    let taskRef=useRef("");

    let [id,setId]=useState(Date.now());
    let [taskList,setTaskList]=useState(task);

    let handleSave = (e) =>{
        e.preventDefault();
        let taskInfo = {
            id:id,
            date:dateRef.current.value,
            task:taskRef.current.value,
        }

        let filter = taskList.filter((item)=>{
            return item.id === taskInfo.id
          });
      
          if (filter.length == 0){
            setTaskList([...taskList, taskInfo])
          } else {
            taskList.forEach((item,index)=>{
              if (item.id === taskInfo.id) {
                taskList.splice(index,1,taskInfo);
                setTaskList(taskList)
              }
            })
          }

        setId(Date.now())
    }

    let handleRemove = (e) =>{
        let num = parseInt(e.target.id)
        const remove = [...taskList].filter((item)=>{
          return item.id !== num
        })
        setTaskList(remove)
      }

    let deleteAll = () =>{
        localStorage.removeItem("Task")
        window.location.reload(false);
      }

    let handleUpdate = (e) =>{
        let num = e.target.id;
        taskList.filter((item)=>{
          return item.id == num
        })
        .map((item)=>{
          setId(item.id);
          dateRef.current.value = item.date;
          taskRef.current.value = item.task;
        })
        
     }

    useEffect(
        () => localStorage.setItem("Task",JSON.stringify(taskList)),[taskList]
    )
  return (
    <div>
      <form onSubmit={handleSave}>
        <label for="date">Date:</label>
        <input tabIndex={1} id="date" type="date" name="date" ref={dateRef} required></input>
        <br></br>
        <label for="task">Task</label>
        <input tabIndex={2} id="task" type="text" name="task" ref={taskRef} required></input>
        <button type="submit">Save</button>
      </form>
      <Task tasklist={taskList} handleRemove={handleRemove} handleUpdate={handleUpdate} deleteAll={deleteAll}/>
    </div>
  )
}

export default CodingTask
