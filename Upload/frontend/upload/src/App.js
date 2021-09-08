import { useState,useEffect } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState();
   const[user,setUser] = useState()
   const[userList,setUserList]=useState([])

 useEffect(()=>{
  fetch("http://localhost:3000/ user" )
  .then((res) => res.json())
  .then((res) => {
    setUserList(res.userList);
  });

 },[])

  const send = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("image", image);
    fetch(`http://localhost:3000/user?username=${user}`, {
      method: "POST",
      body: formData,
    });
    setUserList([...userList, { name: user }])
  };
  console.log(user)
  return (
    
    <>
          <div>
                 userList.map((elem) => {
                  <p>{elem.name}</p>})
              
             
            </div>
         
      <input type="text" onChange={(e)=> setUser(e.target.value)} />
      <input
        type="file"
        onChange={(event) => setImage(event.target.files[0])}
      ></input>
      <button onClick={send}>Send</button>
    </>
  );
}

export default App;