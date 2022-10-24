import React from 'react'

const Task = ({tasklist,handleRemove,handleUpdate,deleteAll}) => {
  return (
    <div className='px-5'>
      <table className='table'>
        <thead className='bg-primary text-start text-white'>
            <th>
                Task
                <button type="button" onClick={deleteAll}>Clear</button>
            </th>
        </thead>
        <tbody className='table-striped'>
        {tasklist.map((data)=>(
            <tr>
                <td>
                    Date: {data.date}
                    <button type="button" id={data.id} onClick={handleRemove}>Delete</button>
                    <button type="button" id={data.id} onClick={handleUpdate}>Edit</button>
                    <br></br>
                    {data.task}
                </td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default Task
