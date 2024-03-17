import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { MDBBtn } from 'mdb-react-ui-kit';

const Register = () => {
    const auth = getAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log("User created:", user);
        // Show alert message
        alert("User created successfully!");

        // Redirect to login page after 2 seconds
        setTimeout(() => {
            // Replace '/login' with the path to your login page
            window.location.href = '/login';
        }, 2000);
    })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error creating user:", errorMessage);
                setErrorMessage(errorMessage);
            });
    };
   
    return(
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="submit" className="btn">Register</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
            <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
        </>
        
    );
};

export default Register;
