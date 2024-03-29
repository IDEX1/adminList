'use client';
import React, { useState , Fragment,useEffect} from "react";
import  "./page.css";
//import data from "../app/data/data.json";
import ReadyOnlyRow from "./componet/ReadOnlyRow";
import EditableRow from "./componet/EditableRow";
import { RiArrowLeftSFill,RiArrowRightSFill  } from "react-icons/ri";
import axios from 'axios'
 
function Home(){
  const [boolChange,setboolChange] = useState(false);
  const [DataTab,setDatTab] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8081/') 
    .then(res => setDatTab(res.data))
    .catch(err => console.log(err))
  
})
  const [dataSaveTab,setdataSaveTab] = useState([]);
  const [editabDataCode,seteditabDataCode] = useState();
  const [editFormData,setEditFormData] = useState({
    Title:"",
    Author:"",
    Link:""
  })
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(11); 
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const [currentRows,setCurrentRows] = useState(DataTab.slice(indexOfFirstRow, indexOfLastRow));
  
  //let currentRows = DataTab.slice(indexOfFirstRow, indexOfLastRow);
  
    const handleEditSubmitChange = (event) => { //edit function
      event.preventDefault();
      
        const CODE =  editabDataCode;
        const TITLE =  editFormData.Title;
        const AUTHOR =  editFormData.Author;
        const LINK =  editFormData.Link
      
      axios.put('http://localhost:8081/update/',{CODE,TITLE,AUTHOR,LINK})
      .then(res =>{
        console.log("updated")
      }).catch(err => console.log("err"+err))

      
      seteditabDataCode(null);
  }
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
  
    
    const newFormData = { ...editFormData, [fieldName]: fieldValue };
    setEditFormData(newFormData);
  
  };
  const handleEditClick = (event, data) =>{
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
  const handleDeleteClick = async (CODE) => {
 

  try {
    await axios.delete('http://localhost:8081/delete/', {
      data: { CODE }  
    });
  } catch (err) {
    console.log(err);
  }
};

const handleSearchOnChangeSearch = (event) => {
  event.preventDefault();
  const searchQuery = event.target.value.toLowerCase();

 
  const filteredData = DataTab.filter((item) => {
    
    return (
      item.TITLE.toLowerCase().includes(searchQuery) 
    );
  });
  setCurrentRows(filteredData);
  setCurrentPage(1);
};

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  
  const handleNextClick = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(DataTab.length / rowsPerPage))
    );
  };
  return (
    
    <main >
      
      <title>admin list</title>
      
      {/*logo*/}
      
      <img  className="img-logo" ></img>
      
      {/*logo*/}
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
    {/*BOOK LIST String*/}
    <>
       <div className="BOOK-LIST-STRING">Book List :</div>
       <input type="text" className="BOOK-LIST-Search" placeholder="Search..." onChange={(event) => handleSearchOnChangeSearch(event)}>
       </input>
    </>
   
    {/*-------- */}
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
        <tbody>
        <Fragment>
          
            {currentRows.map((data) =>( 
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
          
        </Fragment>
        </tbody>
      </table>
      <div className="pagination">
      <RiArrowLeftSFill type="button" className="BUTTON0" onClick={handlePrevClick} />
       
      <RiArrowRightSFill type="button" className="BUTTON1" onClick={handleNextClick}/>
    </div>
      <span className="SPAN-CURRENT-PAGE">{`Page ${currentPage}`}</span>  
    </form>
    

    {/*  TABLE  */}
   
    </main>
    );
}
export default Home;