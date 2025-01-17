// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css';
import TaskComponent from './components/tasklist/TaskComponent';
import CodeBlock from './components/CodeBlock'; // Adjust the path based on your file structure

// import './css/prism.css';
// import Prism from 'prismjs';
import Example from './pages/example.mdx';
import NavigationBar from '../src/components/layout/NavBar';
import HomePage from './pages/HomePage.mdx';
import AboutPage from './pages/AboutPage.mdx';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about.html', label: 'About' },
  { href: '/blog.html', label: 'Blog' },
  { href: '/contact.html', label: 'Contact' },
];
function App() {
  // const [count, setCount] = useState(0)
  const path = window.location.pathname;

  let PageComponent;
  switch (path) {
    case '/about.html':
      PageComponent = AboutPage;
      break;
    //    break;
    //  case '/blog.html':
    //    PageComponent = BlogPage;
    //    break;
    //  case '/contact.html':
    //    PageComponent = ContactPage;
    //    break;
    default:
      PageComponent = HomePage;
  }

  return (
    <>
      <NavigationBar links={navLinks} logoText='UI Maxing' />
      <PageComponent />
      {/* <h1>Extracting State Logic into a Reducer</h1>
      <h3>reduce this complexity </h3>
      <Example />
      <CodeBlock />
      <TaskComponent /> */}
    </>
  );
}

export default App;

// ReactDOM.render(<App />, document.getElementById('app'));
