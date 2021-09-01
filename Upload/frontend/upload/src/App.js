import { useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState();
   const[user,setUser] = useState()
  const send = () => {
    const formData = new FormData();
    formData.append("image", image);
    fetch(`http://localhost:3000/user?username=${user}`, {
      method: "POST",
      body: formData,
    });
  };

  return (
    <>
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