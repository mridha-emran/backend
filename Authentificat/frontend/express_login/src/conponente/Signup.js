
import React, { useState, useEffect } from 'react';

function Signup () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");


  return (
    <div className="Signup">
        
        <input type="text"  placeholder="Email"onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <input type="text" placeholder="first name" onChange={(e) => setFirstName(e.target.value)} />
        <input type="text"placeholder="surname" onChange={(e) => setSurname(e.target.value)} />
        <input type="text"placeholder="date" onChange={(e) => setDateOfBirth(e.target.value)} />
      
        
     
    </div>
  );
}

export default Signup;