import  "./page.css";
 function Home(){
 
  return (
    <main >
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
    <table>
      <thead>
        <tr>
        <th>CODE</th>
        <th>TITLE</th>
        <th>AUTHOR</th>
        <th>LINK TO SHOP</th>
        <th>MODIFY</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>15</td>
          <td>MY SYSTEM</td>
          <td>NIMZO</td>
          <td>http://facebook.com</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    

    {/*  TABLE  */}
    </main>
    );
}
export default Home;