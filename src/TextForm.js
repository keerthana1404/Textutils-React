import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("yes");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
        }
    const handleRevClick=()=>{
        let newText="";
            for(let i=text.length-1;i>=0;i--){
                newText+=text[i];
            }
        setText(newText)
        }
        const showWords = (text) => {
        return text.split(" ").filter(word => word.length > 0).length;
    };
    const [text,setText]=useState("enter text here");
    return (
        <>
        <div>
            <h1 className="my-3">{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white'}}></textarea>
            </div>
            <button className={`btn m-2`} style={{backgroundColor:`${props.btnClr}`}} onClick={handleUpClick}>Convert to upper case</button>
            <button className={`btn`} style={{backgroundColor:`${props.btnClr}`}} onClick={handleRevClick}>Reverse</button>
        </div>
        <div>
            <p className='my-2'>Words-{showWords(text)} , Chars-{text.length}</p>
            <h2>Preview</h2>
        </div>
        <p2>{text}</p2>
        </>
    )
}
