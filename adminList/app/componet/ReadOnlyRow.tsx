import React from "react";

const ReadyOnlyRow =({data,handleEditClick }:{data:any;handleEditClick:any;}) =>{
    return(

        <tr>
            <td>{data.CODE}</td>
            <td>{data.TITLE}</td>
            <td>{data.AUTHOR}</td>
            <td>{data.LINK}</td>
            <td>
                <button type="button" onClick={(event)=> handleEditClick(event,data.CODE)}>edit</button>

            </td>
        </tr>
    );


}
export default ReadyOnlyRow;