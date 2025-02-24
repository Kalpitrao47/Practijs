import React, { useState } from 'react';
import Layout from './Layout/Layout';

const Form = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        console.log("Email:", email);
        console.log("Name:", name);
        console.log("Phone Number:", phoneNumber);
    };

    return (
        <>
        <Layout>
            <form>
                Email:
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <br />
                Name:
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                <br />
                Phone Number:
                <input 
                    type="text" 
                    placeholder="Phone Number" 
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                />
                <br />
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form>
            </Layout>
        </>
    );
};

export default Form;
