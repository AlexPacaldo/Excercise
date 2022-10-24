import React from 'react'

const Thoughts = ({thoughtlist,handleRemove,handleUpdate,deleteAll}) => {
  return (
    <div className='px-5'>
      <table className='table'>
        <thead className='bg-primary text-start text-white'>
            <th>
                Thoughts for the Day
                <button type="button" onClick={deleteAll}>Clear</button>
            </th>
        </thead>
        <tbody className='table-striped'>
        {thoughtlist.map((data)=>(
            <tr>
                <td>
                    Date: {data.date}
                    <button type="button" id={data.id} onClick={handleRemove}>Delete</button>
                    <button type="button" id={data.id} onClick={handleUpdate}>Edit</button>
                    <br></br>
                    {data.thought}
                </td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default Thoughts
