import React,{useState} from 'react'

const Counter=()=>{
    const handleAddChange=()=>{
        let newCnt=cnt+1;
        setCnt(newCnt);
    }
    const handleMinChange=()=>{
        let newCnt=cnt-1;
        setCnt(newCnt);
    }
    const handleOnChange=(event)=>{
    console.log("On change");
    setCnt(Number(event.target.value));
    }   
    const [cnt,setCnt]=useState(0);
    return(
        <>
        <div className="mb-3">
        <input className="form-control" type='number' value={cnt} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="1"></input>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleAddChange}>Add 1</button>
        <button type="button" className="btn btn-primary" onClick={handleMinChange}>Minus 1</button>
        </>
    );
};

export default Counter;