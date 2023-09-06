import React ,{useState} from 'react'

export default function Basicform(props) {

    const handleOnClick=()=>{
        console.log("Onclick was clicked")
        console.log(text);
        let newText = text.toUpperCase();
        console.log(newText);
        setText(newText);

    }
    const lowerHandle=()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const copyToClipboard = ()=>{
        let copyText  = document.getElementById("exampleFormControlTextarea1");
       // copyText.select();
        //copyText.setSelectionRange(0,99999);
        navigator.clipboard.writeText(copyText.value);
    }
    const removeSpaces = ()=>{
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log(text);
        setText(event.target.value);
    }
    
    const [text , setText] = useState("");
    
    return (
        <>
        <h1 className='mt-2'  style={{color:props.mode==='dark'?'white':'black'}}>{props.heading} </h1>
        <div className="mt-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'black' , color:props.mode==='light'?'black':'white'}} id="exampleFormControlTextarea1" rows="14" ></textarea>
            <button className='btn btn-primary mt-3 mx-3' onClick={handleOnClick}>change to uppercase</button>
            <button className='btn btn-success mt-3 mx-3' onClick={lowerHandle}>change to lowercase</button>
            <button className='btn btn-success mt-3 mx-3' onClick={copyToClipboard}>Copy to Clipboard</button>
            <button className='btn btn-primary mt-3 mx-3' onClick={removeSpaces}>Remove Extra Spaces</button>
        </div>
    </>
  )
}
