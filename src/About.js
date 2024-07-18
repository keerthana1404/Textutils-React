import React,{useState} from 'react';

export default function About() {
    const [myStyle,setmystyle]=useState({
        width: '18rem',
        backgroundColor:"pink",
    })
    const [btnText,setbtnText]=useState("Enable dark Mode");
    const handleDarkClick=()=>{
        if(myStyle.backgroundColor === "pink"){
            setmystyle({
            width: '18rem',
            backgroundColor:"black",
            color:"white"
        })
        setbtnText('Enable original Mode')
        }else{
            setmystyle({
            width: '18rem',
            backgroundColor:"pink"
        })
        setbtnText('Enable dark Mode')
        }
        
    };
    // const handlePinkClick=()=>{
    //     setmystyle({
    //         width: '18rem',
    //         backgroundColor:"pink",
    //     })
    // };
  return (
    <>
      <div className="card container my-3" style={myStyle}>
        <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" className="card-img-top p-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className='container '>
        <button type="button" className="btn btn-dark mx-10" onClick={handleDarkClick}>{btnText}</button>
        {/* <button type="button" className="btn btn-light mx-10" onClick={handlePinkClick}>Enable original Mode</button> */}
      </div>
    </>
  );
}
