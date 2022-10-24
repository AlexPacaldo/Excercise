import React, { useEffect, useRef, useState } from 'react'

import Thoughts from '../components/Thoughts'

let thoughts = localStorage.getItem("Thoughts")
? JSON.parse(localStorage.getItem("Thoughts"))
:[] 

const CodingThoughts = () => {

    let dateRef=useRef("");
    let thoughtRef=useRef("");

    let [id,setId]=useState(Date.now());
    let [thoughtList,setThoughtList]=useState(thoughts);

//THOUGHTTSSSSSSSSSS
     let handleSave = (e) =>{
        e.preventDefault();
        let thoughtInfo = {
            id:id,
            date:dateRef.current.value,
            thought:thoughtRef.current.value,
        }

        let filter = thoughtList.filter((item)=>{
            return item.id === thoughtInfo.id
          });
      
          if (filter.length == 0){
            setThoughtList([...thoughtList, thoughtInfo])
          } else {
            thoughtList.forEach((item,index)=>{
              if (item.id === thoughtInfo.id) {
                thoughtList.splice(index,1,thoughtInfo);
                setThoughtList(thoughtList)
              }
            })
          }

        setId(Date.now())
    }

    let handleRemove = (e) =>{
        let num = parseInt(e.target.id)
        const remove = [...thoughtList].filter((item)=>{
          return item.id !== num
        })
        setThoughtList(remove)
      }

      let deleteAll = () =>{
        localStorage.removeItem("Thoughts")
        window.location.reload(false);
      }

      let handleUpdate = (e) =>{
        let num = e.target.id;
        thoughtList.filter((item)=>{
          return item.id == num
        })
        .map((item)=>{
          setId(item.id);
          dateRef.current.value = item.date;
          thoughtRef.current.value = item.thought;
        })
        
     }

    useEffect(
        () => localStorage.setItem("Thoughts",JSON.stringify(thoughtList)),[thoughtList]
    )
  return (
    <div>
      <form onSubmit={handleSave}>
        <label for="date1">Date:</label>
        <input tabIndex={1} id="date1" type="date" name="date1" ref={dateRef} required></input>
        <br></br>
        <label for="thought">Thoughts for the Day</label>
        <input tabIndex={2} id="thought" type="text" name="thought" ref={thoughtRef} required></input>
        <button type="submit">Save</button>
      </form>
      <Thoughts thoughtlist={thoughtList} handleRemove={handleRemove} handleUpdate={handleUpdate} deleteAll={deleteAll}/>
    </div>
  )
}

export default CodingThoughts
