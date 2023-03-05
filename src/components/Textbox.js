import React from "react";
import { useState } from "react";

export default function Textbox(props) {

  let mode = props.mode;

  const [text, setText] = useState("");

  function handleClickUp() {
    props.setAlertType("primary","Converted to UpperCase!");
    setText(text.toUpperCase());
  }
  function handleClickLow() {
    props.setAlertType("success","Converted to LowerCase!");
    setText(text.toLowerCase());
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClickSpace() {
    props.setAlertType("info","Extra Space Removed!");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  function handleClickCopy() {

    props.setAlertType("warning","Copied to Clipboard!");

    
    navigator.clipboard.writeText(text)
    window.getSelection().removeAllRanges();

    const copyBtn = document.querySelector("#toCopy");
    copyBtn.innerHTML = "Copied!";
    setTimeout(()=> {copyBtn.innerHTML = "Copy";},1500);

    
  }

  function handleClickPaste () {

    props.setAlertType("dark","Pasted!");
  
    navigator.clipboard.readText()
    .then((clipText)=>{
        setText(clipText);
    });
    
  }


  function handleClickClear() {
    props.setAlertType("danger","Cleared!");
    setText("");
  }


  return (
    <>
      <div className="mb-3 container" style={{color:(mode?"white":"black")}}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control mb-2"
          id="textBox"
          rows={8}
          value={text}
          placeholder={"Enter Your Text Here"}
          onChange={handleChange}
          style={{backgroundColor:(mode?"#636774":"white"),color:(mode?"white":"black")}}
        />
        <button
          type="button"
          className="btn btn-outline-primary mx-1 my-1"
          id="toUpperCase"
          onClick={handleClickUp}
          disabled={text.length===0}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          className="btn btn-outline-success mx-1 my-1"
          id="toLowerCase"
          onClick={handleClickLow}
          disabled={text.length===0}
        >
          Convert to LowerCase
        </button>

        <button
          type="button"
          className="btn btn-outline-info mx-1 my-1"
          id="toClearSpace"
          onClick={handleClickSpace}
          disabled={text.length===0}
        >
          Remove Extra Space 
        </button>

        <button
          type="button"
          className="btn btn-outline-warning mx-1 my-1"
          id="toCopy"
          onClick={handleClickCopy}
          disabled={text.length===0}
        >
          Copy 
        </button>

        <button
          type="button"
          className="btn btn-outline-secondary mx-1 my-1"
          id="toPaste"
          onClick= {handleClickPaste}
          
        >
          Paste 
        </button>

        <button
          type="button"
          className="btn btn-outline-danger mx-1 my-1"
          id="toClear"
          onClick={handleClickClear}
          disabled={text.length===0}
        >
          Clear
        </button>
      </div>
      <div className="container" style={{color:(mode?"white":"black")}}>
        <h2>Text Summary</h2>
        <p>{text.replace(/\n/g," ").split(' ').filter(e=>e !== "").length} Words  {text.trim().length} Characters</p>  {/* replace(/ \n /g," ") represents global search, meaning search is not limited to only first find, / here whatever needs to be replaces /g-{for global search} */}
        <p>{Math.ceil(1/240 * (text.replace(/\n/g," ").split(' ').filter(e=>e !== "").length))} Minutes Read.</p>
        <h2>Preview</h2>
        <div className="container border" style={{minHeight:"4em",backgroundColor:(mode?"#636774":"white")}}>
            {text}
        </div>

      </div>
    </>
  );
}
