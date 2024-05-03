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
  
  const [dataSaveTab,setdataSaveTab] = useState([]);
  const [editabDataCode,seteditabDataCode] = useState();
  const [editFormData,setEditFormData] = useState({
    title:"",
    auth_Name:"",
    linkShop:""
  })
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(11); 
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const [currentRows,setCurrentRows] = useState([]);
  
  //let currentRows = DataTab.slice(indexOfFirstRow, indexOfLastRow);
  useEffect(() => {
    axios.get('http://localhost:8081/')
      .then(res => {
        setDatTab(res.data);
        const indexOfLastRow = currentPage * rowsPerPage;
        const indexOfFirstRow = indexOfLastRow - rowsPerPage;
        setCurrentRows(res.data.slice(indexOfFirstRow, indexOfLastRow));
      })
      .catch(err => console.log(err))
  }, [currentPage, rowsPerPage,editabDataCode]);
    const handleEditSubmitChange = (event) => { //edit function
      event.preventDefault();
      
        const bookID =  editabDataCode;
        const title =  editFormData.title;
        const auth_Name =  editFormData.auth_Name;
        const linkShop =  editFormData.linkShop;
      
      axios.put('http://localhost:8081/update/',{bookID,title,auth_Name,linkShop})
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
    seteditabDataCode(data.bookID);
    const FormValues = ({
    bookID:data.bookID,
    title:data.title,
    auth_Name:data.auth_Name,
    linkShop:data.linkShop

    })
   
    setEditFormData(FormValues);
   
  }
  const hanleCancelClick =()=>{
    seteditabDataCode(null)
  }
  const handleDeleteClick = async (bookID) => {
  try {
   
    await axios.delete('http://localhost:8081/delete/', { data: { bookID } });
    
  
    const newDataTab = DataTab.filter(item => item.bookID !== bookID);
    
 
    setDatTab(newDataTab);
    

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    setCurrentRows(newDataTab.slice(indexOfFirstRow, indexOfLastRow));
  } catch (err) {
    console.log(err);
  }
};



const handleSearchOnChangeSearch = (event) => {
  event.preventDefault();
  const searchQuery = event.target.value.toLowerCase();
  
  const filteredData = DataTab.filter((item) => {
    // Add null check for item and item.TITLE
    return item && item.title && item.title.toLowerCase().includes(searchQuery);
  });
  
  console.log(filteredData);
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
              {editabDataCode === data.bookID ? (
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