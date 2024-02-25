'use client';
import React, { useState , Fragment} from "react";
import  "./page.css";
import data from "../app/data/data.json";
import ReadyOnlyRow from "./componet/ReadOnlyRow";
import EditableRow from "./componet/EditableRow";

 function Home(){
  const [DataTab,setDatTab] = useState(data)
  const [editabDataCode,seteditabDataCode] = useState<number>();
  
  const handleEditClick = (event:Event, dataid: number) =>{
    event.preventDefault();
    seteditabDataCode(dataid);
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
    <form>
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
      <tbody>{data.map((data) =>( 
        <Fragment>
          {editabDataCode === data.CODE ? (
            <EditableRow/>

          ): (
            <ReadyOnlyRow data={data}
            handleEditClick={handleEditClick}
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