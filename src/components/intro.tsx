import React from 'react';

// Define the props interface
interface IntroductionProps {
    name1: string;
    name2: string;
}

const Introduction: React.FC<IntroductionProps> = ({ name1, name2 }) => {
    return (
        <>
            <h1>{name1} - {name2}</h1>
            <p>Welcome to my hobby page! My name is {name1}, I am a junior at Worcester Polytechnic Institute, studying Computer Science. I'm actively looking for summer internships. Wish me luck!</p>
            <p>Alongside {name2}, we enjoy studying computer science, playing soccer, and video games. It's a mix of problem-solving and technology, while soccer offers high-level strategic play.</p>
        </>
    );
}

export default Introduction;
