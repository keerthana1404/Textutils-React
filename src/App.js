import './App.css';
import NavBar from './NavBar';
// import About from './About';
// import Counter from './Counter';
import React,{useState} from 'react'
import TextForm from './TextForm';

function App() {
  const [mode,setmode]=useState("#d8d7d7");
  const [btnClr,setbtnClr]=useState("#d8d7d7")
  const [text,settext]=useState("Enable dark mode");

    const turnGrey=()=>{
    setmode("#d8d7d7");
    document.body.style.backgroundColor='white';
    setbtnClr("grey")
    // let btn1=document.getElementById("btn1");
    // btn1.style.borderColor="black";
    // btn1.style.borderWidth="2px";
  }

  const turnPink=()=>{
    setmode("#c3195d");
    document.body.style.backgroundColor='#FFC0CB';
    setbtnClr("#f76b8a")
    // let btn1=document.getElementById("btn1");
    // btn1.style.borderColor="black";
    // btn1.style.borderWidth="2px";
  }
  // const toggleMode=()=>{
  //   if(mode==="light"){
  //     setmode("dark");
  //     settext("Enable light mode");
  //     document.body.style.backgroundColor="#05445E";
  //     document.body.style.color="white";
  //     setbtnClr("light");
  //   }else{
  //     setmode("light");
  //     settext("Enable dark mode");
  //     document.body.style.backgroundColor="white";
  //     document.body.style.color="black";
  //     setbtnClr("dark");
  //   }
  // }
  
  return (
    <>
    <NavBar mode={mode} turnPink={turnPink} turnGrey={turnGrey}/>
    <div className="container" >
    <TextForm heading="Enter your text here" mode={mode} btnClr={btnClr}/>
    {/* <Counter/> */}
    {/* <About/> */}
    </div>
    </>
  );
}


export default App;
