import {useState,useEffect} from "react";
import axios from "axios";



function Home()
{

        const[data,setData] = useState([]);

         useEffect (()=>{
             let urladd="http://localhost:9000/view";
             axios.get(urladd)
              .then(res=>setData(res.data))
              .catch(err=>console.log(err))
            
          },[]);

          const delStudent = (rno)=>{
              let urladd = "http://localhost:9000/remove";
              let data = {data:{rno}};
              axios.delete(urladd,data)
              .then(res=>{
                   if(res.data.affectedRows == 1)
                   {
                         alert("record deleted");
                         window.location.reload();
                   }
              })
               .catch(err=>console.log(err))
          }
   return(
        <>
           <center>
                <h1> Home Page </h1>
                 <table border="5" style={{width:'50%'}}>
                         <tr>
                             <th> Rno </th>
                             <th> Name </th>
                             <th> Delete </th> 
                         </tr>
                         {

                            data.map((e)=>(
                               <tr style={{'text-aligen':'center'}}>
                                  <td>{e.rno} </td>
                                  <td>{e.name}</td>
                            <td><button onClick={()=>{
                                     if(window.confirm('r u sure'))
                                  delStudent(e.rno)}}> Delete </button></td>
                               </tr>

                            ))

                         }                 
                 </table>
           </center>
        </>
   );
}
export default Home;