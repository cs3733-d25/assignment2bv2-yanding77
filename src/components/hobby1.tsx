// src/components/Hobby1.tsx
import React from 'react';
import List1 from './List1';
import Table1 from './Table1';
import Form from './Form'; // Ensure this is the correct import based on your file structure

const Hobby1: React.FC = () => {
    return (
        <div>
            <h1>My Hobby: Computer Science</h1>
            <img src="../../public/images.png" alt="A display of coding" style={{ width: '640px' }} />
            <p>Welcome to my page dedicated to my hobby of Computer Science. Here, I explore the intricacies of programming, algorithms, and more.</p>
            <List1 />
            <Table1 />
            <Form />
        </div>
    );
}

export default Hobby1;
