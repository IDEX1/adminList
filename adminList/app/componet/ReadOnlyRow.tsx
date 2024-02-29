import React from "react";
import { RiDeleteBin6Line ,RiEdit2Fill } from "react-icons/ri";
import "./ReadOnlyRow.css";
const ReadyOnlyRow =({data,handleEditClick,handleDeleteClick }:{data:any;handleEditClick:any;handleDeleteClick:any}) =>{
    return(

        <tr>
            <td>{data.CODE}</td>
            <td>{data.TITLE}</td>
            <td>{data.AUTHOR}</td>
            <td>{data.LINK}</td>
            <td className="BUTTON-MODIFY">
                <RiEdit2Fill className="BUTTON-MODIFY-RiEdit2Fill" type="button" onClick={(event)=> handleEditClick(event,data)}></RiEdit2Fill>
                <RiDeleteBin6Line className="BUTTON-MODIFY-RiDeleteBin6Line" type="button" onClick={()=>handleDeleteClick(data.CODE)}></RiDeleteBin6Line>
            </td>
        </tr>
    );


}
export default ReadyOnlyRow;