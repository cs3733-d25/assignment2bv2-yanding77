import React from 'react';

interface TitleProps {
    classInfo: string;
    teamNumber: number;
    hobby1: string;
    hobby2: string;
}

const Title: React.FC<TitleProps> = ({ classInfo, teamNumber, hobby1, hobby2 }) => {
    return <h1>{`${classInfo} Team ${teamNumber}: ${hobby1} and ${hobby2}`}</h1>;
}

export default Title;
