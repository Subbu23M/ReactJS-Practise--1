// 1)Babel is a JavaScript compiler that can translate markup or programming languages into JavaScript.

// 2)React uses Babel to convert JSX into JavaScript.

// 3)JSX stands for JavaScript XML.

// Example:
const element = <h1>Hello World!</h1>
// 4)React DOM Render:The method ReactDom.render() is used to render (display) HTML elements.

// 5)Syntax:
<div id="root"></div>
<script type="text/babel">
// JSX
ReactDOM.render(<h1>Hello React!</h1>, document.getElementById('root'));
</script>

// 6)React components are JavaScript functions.

// 7)React creates a VIRTUAL DOM in memory.
// Remember, all CSS and JS files need to be added to the src folder, otherwise webpack won't see them.
// A really cool feature of Create React App is Fast Refresh, which automatically reflects the changes made to the code in the browser.
// Notice that the name of the functional component begins with a capital letter.

// Bob Siroll Exercises from FreeCodeCamp() 

// Exercise-1
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <ul>
        <li>
            Hello,World!
        </li>

        <li>
            Hello,World!
        </li>
        
        <li>
            Hello,World!
        </li>
    </ul>,
    document.getElementById('root')
);
// In ReactJS without using Go Live extension in VS Code and refresh button in browser the content can be updated automatically.

// Exercise-2

// Function Component
import React from 'react';
import ReactDOM from 'react-dom';
function MyInfo(){
return(
    <div>
      {/* ReactJS Inline CSS Style */}
    <h1 style = {
    {
        color : 'blue',
        backgroundColor : 'whitesmoke',
        textAlign : 'center'
    }
    }>
    Subramanyam Sreshty.D
    </h1>
    <p>
    Hello To Everyone,I am learning ReactJS from FreeCodeCamp.
    </p>
    <ol style = {
    {
        listStyleType : 'none'
    }
    }>
    <li>
        Cochin
    </li>
    <li style = {
        {
            color : 'yellow',
            backgroundColor : 'green',
            fontSize : '2rem',
            textAlign : 'end'
        }
    }>
        Madhurai
    </li>
    <li>
        Gurugaon
    </li>
    </ol>
    </div>
);
}
ReactDOM.render(<MyInfo />,document.getElementById('root'));

// Exercise-3
// Components in Files:

// Path Parent to Child 
// Components -> App -> -> Navbar -> MainContent -> Footer  

// 1)App.js
import React from 'react';
import Navbar from '../components/Navbar';

function App() 
{
    const lastName = 'Subramanyam';
    const verb = 'for';
    const date = new Date();
    return(
    <div>
    <nav>

        <h1>
        Welcome,to {lastName +' '+ verb} ReactJS Tutorial.
        At Present date is {`${date.getDate()}`}
        </h1>

        <ul>
{/* ReactJS CSS-Inline CSS */}
        <li style = {
            {
                color : 'red',
                textTransform : 'uppercase',
                fontWeight : 'bolder',
                fontSize : '2rem'
            }
        }>
            Hyderabad
        </li>

        <li>
            Bangalore
        </li>

        <li>
            Bhongir
        </li>
        </ul>
    </nav>

    <main>
        <p>
            Welocme To My World.
        </p>
    </main>

    <Navbar />
    </div>
);
}
export default App    

// 2)Navbar.js
import React from 'react';
import Content from '../components/Content';

function Navbar(){
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Content
                    </li>
                    <li>
                        Footer
                    </li>
                </ul>
            </nav>
            <Content />
        </div>
    )
}
export default Navbar

// 3)Content.js
import React from 'react';
import Footer from '../components/Footer';
function Content(){
    // JavaScript Object
    const mystyle = {
        color : 'green'
    }
    return(
        <div>

{/* Inline CSS */}
        <h1 style ={
            {
                color : 'whitesmoke',
                backgroundColor : 'violet',
                fontSize : '2rem',
                textAlign : 'center'
            }
        }>
            Hello to ReactJS Content
        </h1>

        <ul>
            <li style ={mystyle}>
                Hyderabad
            </li>
            <li>
                Bangalore
            </li>
            <li>
                Kerala
            </li>
        </ul>
        <Footer />
        </div>
    )
}
export default Content

// 4)Footer.js
import React from 'react';

function Footer(){
    const middleName = 'Ram';
    return(
        <div>
        <h1 className="footer">
            For Further details please check in Footer {`${middleName}`}.
        </h1>

        <p style ={
            {
                fontSize : '5 px',
                color : 'blue',
                textTransform : 'capitalize',
                fontWeight : "bold",
                textAlign : 'center',
                padding : '2px',
            }
        }>
            Hello,To EveryOne
        </p>
        </div>
    )
};
export default Footer

// Exercise-4
// Path from index.js -> TodoApp.js 
TodoApp.js
import React from 'react';

function TodoApp(){
    return(
        <p>

            <span>
            <input type="checkbox" name="hello" id="hello"/>

            <h2>
                Hyderabad
            </h2>
            </span>

            <span>
            <input type="checkbox" name="hello" id="hello"/>

            <h2>
                Bangalore
            </h2>
            </span>

            <span>
            <input type="checkbox" name="hello" id="hello"/>

            <h2>
                Chennai
            </h2>
            </span>
        </p>
    )
};

export default TodoApp

import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from '../src/TodoApp';

ReactDOM.render(<TodoApp />
,document.getElementById('root'));

// Exercise-5
Greet.js
import React from 'react'

function Greet(){
const date = new Date();
const hours = date.getHours();
let greetMessage;

if(hours < 12){
    greetMessage = 'Morning';
    
}else if(hours >= 12 && hours < 17){
    greetMessage = 'Afternoon';
    
}else{
    greetMessage = 'Night';
    
}
return <h2>
    Good {`${greetMessage}`}
</h2>
}
export default Greet

import React from 'react';
import ReactDOM from 'react-dom';
import Greet from '../src/components/Greet'

ReactDOM.render(<Greet />
,document.getElementById('root'));

// <!---Class Component --!>
import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component{
render(){
    return <h1> Hello,World! </h1>
}
}
ReactDOM.render(<Test />,document.getElementById('root'))

// <!-- Class Component-->
class Garage extends React.Component{
render(){
    // JavaScript Object
    const mystyle ={
        fontSize : '5 px',
        color : 'blue',
        textTransform : 'capitalize',
        fontWeight : "bold",
        textAlign : 'center',
        padding : '2px'
    }
    return(
    <div>
        {/* ReactJS Inline Styling */}
        <h1 style = {
        {
            color : 'red',
            fontSize : '5rem',
            backgroundColor: 'green',
            // camelCased Property Names
            fontWeight : 'bold'
        }
        }>
            Hello,World!
        </h1>
        <p style = {mystyle}>
            This is Subramanyam Sreshty.D
        </p>
        {/* CSS Stylesheet*/}
        <ul>
            <li>
            Hyderabad
            </li>
            <li>
            Bangalore
            </li>
            <li>
            Ananthapur
            </li>
        </ul>
        {/* <Car /> */}
    </div>
    )
}
}

ReactDOM.render(<Garage />,document.getElementById('root'))
