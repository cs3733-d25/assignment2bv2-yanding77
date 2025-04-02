// src/components/Table1.tsx
import React from 'react';

const Table1: React.FC = () => {
    return (
        <table>
            <caption>Details of My Computer Science Hobby</caption>
            <thead>
            <tr>
                <th>Aspect</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Programming Languages</td>
                <td>I enjoy learning Python, Java, and C++.</td>
            </tr>
            <tr>
                <td>Projects</td>
                <td>Working on small personal projects and contributing to open source.</td>
            </tr>
            </tbody>
        </table>
    );
}

export default Table1;
