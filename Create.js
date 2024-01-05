import {useState} from "react";
import axios from "axios";


function Create()
{

        const[rno,setRno] = useState("");
        const[name,setName] = useState("");
        const[msg,setMsg] = useState("");

        const hRno= (event)=> {setRno(event.target.value);}
        const hName= (event)=> {setName(event.target.value);}

        const save = (event) =>{
                 event.preventDefault();
                 let data = {rno,name};
                 let urladd = "http://localhost:9000/create";
                 axios.post(urladd,data)
                 .then(res=>{
                        if(res.data.affectedRows==1)
                        {
                            setMsg("record saved");
                            setRno("");
                            setName("");
                        }
                        else
                        {
                             setMsg("record already exists");
                             setRno("");
                             setName("");
                        }
                 })
                 .catch(err=>{
                       if(err.code=="ERR_NETWORK")
                        {
                            setMsg("server down try after some time");
                            setRno("");
                            setName("");
                        }
                  })
        }
   return(
        <>
           <center>
                 <h1> Create Page </h1>
                <form onSubmit={save}>
                     <input type="number" placeholder="enter rno"
                      onChange={hRno} value={rno}/>
                     <br/><br/>
                     <input type="text" placeholder="enter name"
                      onChange={hName} value={name}/>
                     <br/><br/>
                     <input type="submit"/>
                     
                </form>
                  <h2> {msg} </h2>
           </center>
        </>
   );
}
export default Create;