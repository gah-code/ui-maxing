// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import TaskComponent from './components/tasklist/TaskComponent';
import CodeBlock from './components/CodeBlock'; // Adjust the path based on your file structure

// import './css/prism.css';
// import Prism from 'prismjs';
import Example from './pages/example.mdx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Extracting State Logic into a Reducer</h1>
      <h3>reduce this complexity </h3>
      <Example />
      <CodeBlock />

      <TaskComponent />
    </>
  );
}

export default App;
