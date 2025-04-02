// src/components/Hobby1.tsx
import React from 'react';
import Form2 from "./Form2.tsx";
import Table2 from "./Table2.tsx";
import List2 from "./List2.tsx"; // Ensure this is the correct import based on your file structure

const Hobby2: React.FC = () => {
    return (
        <div>
            <h1>My Hobby: Splatoon 3</h1>
            <img src="../../public/Splatoon3.jpg" alt="Splatoon 3 Box Art" style={{ width: '640px' }} />
            <p>Welcome to my page about <b>Splatoon 3</b></p>
            <List2 />
            <Table2 />
            <Form2/>
        </div>
    );
}

export default Hobby2;
