import React from 'react'
import "./ReadOnlyRow.css";
import { RiSave3Line,RiArrowGoBackFill  } from "react-icons/ri";
const EditableRow = (props) => {
    
    return (
    
    <tr>
        <td>
            <input
            type='Number' 
            placeholder='ENTER CODE..' 
            name='Code'
            value={props.editFormData.Code}    
            onChange={props.handleEditFormChange}
            required 
            ></input>
        </td>
        <td>
            <input
            type="text" 
            placeholder='ENTER TITLE..' 
            name='Title'
            value={props.editFormData.Title} 
            onChange={props.handleEditFormChange} 
            required 
            ></input>
        </td><td>
            <input
            type='text' 
            placeholder='ENTER AUTHOR..' 
            name='Author'
            value={props.editFormData.Author} 
            onChange={props.handleEditFormChange} 
            required 
            ></input>
        </td><td>
            <input
            type='text' 
            placeholder='ENTER LINK..' 
            name='Link'
            value={props.editFormData.Link} 
            onChange={props.handleEditFormChange} 
            required 
            ></input>
        </td>
        <td className="BUTTON-MODIFY">
            <button className="BUTTON-MODIFY-RiSave3Line" type='submit' ><RiSave3Line/></button>
            <RiArrowGoBackFill className="BUTTON-MODIFY-RiArrowGoBackFill" type='button' onClick={props.hanleCancelClick}/>
        </td>
   </tr>
  );
}

export default EditableRow