import React from "react";
import { RiDeleteBin6Line ,RiEdit2Fill } from "react-icons/ri";
import "./ReadOnlyRow.css";
const ReadyOnlyRow =(props ) =>{
    
    return(
        
        <tr>
            <td>{props.data.CODE}</td>
            <td>{props.data.TITLE}</td>
            <td>{props.data.AUTHOR}</td>
            <td>{props.data.LINK}</td>
            <td className="BUTTON-MODIFY">
                <RiEdit2Fill className="BUTTON-MODIFY-RiEdit2Fill" type="button" onClick={(event)=> props.handleEditClick(event,props.data)}/>
                <RiDeleteBin6Line className="BUTTON-MODIFY-RiDeleteBin6Line" type="button" onClick={()=>props.handleDeleteClick(props.data.CODE)}/>
            </td>
        </tr>
    );


}
export default ReadyOnlyRow;