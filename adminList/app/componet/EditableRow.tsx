import React from 'react'

const EditableRow = () => {
  return (
    <tr>
        <td>
            <input
            type='text' 
            placeholder='ENTER CODE..' 
            name='CODE' 
            required 
            ></input>
        </td>
        <td>
            <input
            type='text' 
            placeholder='ENTER TITLE..' 
            name='TITLE' 
            required 
            ></input>
        </td><td>
            <input
            type='text' 
            placeholder='ENTER AUTHOR..' 
            name='AUTHOR' 
            required 
            ></input>
        </td><td>
            <input
            type='text' 
            placeholder='ENTER LINK..' 
            name='LINK' 
            required 
            ></input>
        </td>
   </tr>
  );
}

export default EditableRow