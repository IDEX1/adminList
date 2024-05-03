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
            name='bookID'
            value={props.editFormData.bookID}    
            onChange={props.handleEditFormChange}
            required 
            ></input>
        </td>
        <td>
            <input
            type="text" 
            placeholder='ENTER TITLE..' 
            name='title'
            value={props.editFormData.title} 
            onChange={props.handleEditFormChange} 
            required 
            ></input>
        </td><td>
            <input
            type='text' 
            placeholder='ENTER ..' 
            name='auth_Name'
            value={props.editFormData.auth_Name} 
            onChange={props.handleEditFormChange} 
            required 
            ></input>
        </td><td>
            <input
            type='text' 
            placeholder='ENTER LINK..' 
            name='linkShop'
            value={props.editFormData.linkShop} 
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