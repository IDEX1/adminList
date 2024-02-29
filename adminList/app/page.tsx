'use client';
import React, { useState , Fragment} from "react";
import  "./page.css";
import data from "../app/data/data.json";
import ReadyOnlyRow from "./componet/ReadOnlyRow";
import EditableRow from "./componet/EditableRow";

 function Home(){
  const [DataTab,setDatTab] = useState(data)
  const [editabDataCode,seteditabDataCode] = useState<any>();
  const [editFormData,setEditFormData] = useState({
    Title:"",
    Author:"",
    Link:""

  })
    const handleEditSubmitChange = (event: React.FormEvent) => {
      event.preventDefault();
      const newDataEdit = {
        CODE: editabDataCode,
        TITLE: editFormData.Title,
        AUTHOR: editFormData.Author,
        LINK: editFormData.Link
      };

      const newData = [...DataTab];
      const index = DataTab.findIndex((data: any) => editabDataCode === data.CODE);
      newData[index] = newDataEdit;
      setDatTab(newData);
      seteditabDataCode(null);
  };
  const handleEditFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
  
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
  
    
    const newFormData = { ...editFormData, [fieldName]: fieldValue };
    setEditFormData(newFormData);
  };
  const handleEditClick = (event:Event, data: any) =>{
    event.preventDefault();
    seteditabDataCode(data.CODE);
    const FormValues = ({
    Code:data.CODE,
    Title:data.TITLE,
    Author:data.AUTHOR,
    Link:data.LINK

    })
    setEditFormData(FormValues);
  }
  const hanleCancelClick =()=>{
    seteditabDataCode(null)
  }
  const handleDeleteClick=(dataCode:number)=>{
    const newData = [...DataTab];
    const index = newData.findIndex((data)=> data.CODE === dataCode);
    newData.splice(index,1);
    setDatTab(newData);
   
    
  }
  return (
    
    <main >
      <title>admin list</title>
    {/*  SIDE NAVIGATION BAR  */}
      <div className="contanier">
        <div className="BarGauche">Welcome, 
        <div className="BarGauche1">Admin!</div>
        </div>
        <div >
            <div className="BarList"><span>BOOK <br></br>LIST</span></div>
            <div className="BarList"><span>USER <br></br>LIST</span></div>
            <div className="BarList"><span>ADD <br></br>BOOK</span></div>
            <div className="BarListSP"><span>LOGOUT</span></div>
        </div>      
      </div>
    {/*  SIDE NAVIGATION BAR  */}
    {/*  TABLE  */}
    <form onSubmit={handleEditSubmitChange} className="FORM-DISPLAY">
    <table>
      <thead>
        <tr>
        <th>CODE</th>
        <th>TITLE</th>
        <th>AUTHOR</th> 
        <th>LINK</th>    
        <th>MODIFY</th>
        </tr>
      </thead>
      <tbody>{DataTab.map((data) =>( 
        <Fragment>
          {editabDataCode === data.CODE ? (
            <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} hanleCancelClick={hanleCancelClick}/>

          ): (
            <ReadyOnlyRow data={data}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
            />
          )}
          
         
        </Fragment>     
        
      ) 
      ) }
       
      </tbody>
    </table>
   
    </form>
    

    {/*  TABLE  */}
    </main>
    );
}
export default Home;