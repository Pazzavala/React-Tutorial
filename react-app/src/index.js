// React is the object and 'react' is the module
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Dynamic Rendering
// NOTE: This JSX - JavaScript XML -> Compiled by Babel to create React Element
// Currently Rendering Simple tag but we will
// Remder our App component: Root component that has children 
// e.g. NavBar, SideBar, Profile ...
const element = <h1>Hello World</h1>;
console.log(element);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element);