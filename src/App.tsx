import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hobby1 from './components/hobby1.tsx'
import Intro from'./components/intro.tsx'
import Title from'./components/title.tsx'


function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Title classInfo="CS3733-D25" teamNumber={44} hobby1="Soccer" hobby2="CHANGE HERE" />
            <hr />
            <Intro name1="Yanding Mario" name2="Conor" />
            <hr />
            <Hobby1 />
            <div className="card">
                <button onClick={() => setCount(count => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR (Hot Module Replacement).
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more.
            </p>
        </>
    );
}

export default App;
