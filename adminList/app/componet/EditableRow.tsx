import React from 'react'
import "./ReadOnlyRow.css";
import { RiSave3Line,RiArrowGoBackFill  } from "react-icons/ri";
const EditableRow = ({editFormData,handleEditFormChange,hanleCancelClick}:{editFormData:any;handleEditFormChange:any;hanleCancelClick:any}) => {
    
    return (
    
    <tr>
        <td>
            <input
            type='Number' 
            placeholder='ENTER CODE..' 
            name='Code'
            value={editFormData.Code}    
            onChange={handleEditFormChange}
            required 
            ></input>
        </td>
        <td>
            <input
            type="text" 
            placeholder='ENTER TITLE..' 
            name='Title'
            value={editFormData.Title} 
            onChange={handleEditFormChange} 
            required 
            ></input>
        </td><td>
            <input
            type='text' 
            placeholder='ENTER AUTHOR..' 
            name='Author'
            value={editFormData.Author} 
            onChange={handleEditFormChange} 
            required 
            ></input>
        </td><td>
            <input
            type='text' 
            placeholder='ENTER LINK..' 
            name='Link'
            value={editFormData.Link} 
            onChange={handleEditFormChange} 
            required 
            ></input>
        </td>
        <td className="BUTTON-MODIFY">
            <button className="BUTTON-MODIFY-RiSave3Line" type='submit'><RiSave3Line/></button>
            <RiArrowGoBackFill className="BUTTON-MODIFY-RiArrowGoBackFill" type='button' onClick={hanleCancelClick}></RiArrowGoBackFill>
        </td>
   </tr>
  );
}

export default EditableRow