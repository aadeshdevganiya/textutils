import React, { useState } from 'react';



export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLowClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = ("");
    setText(newText)
  }

  const handleCopy = () => {
    var text = document.getElementById("Mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "))
  }

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value)
  }

  const [text, setText] = useState('Enter text here')

  return (
    <>
      <div className='textform' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div className='container my-5'>
          <div className='text-center'>
            <h1 className='mb-4' style={{ color: props.mode === 'dark' ? 'white' : '#0d6efd' }}>{props.boxheading}</h1>
            <div className="mb-2">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
                color: props.mode === 'dark' ? 'white' : 'black',
                border: `1px solid ${props.mode === 'dark' ? 'white' : '#0d6efd'}`,
              }} id="Mybox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary m-2' onClick={handleUpClick}>
              Convert to uppercase
            </button>
            <button className='btn btn-primary m-2' onClick={handleLowClick}>
              Convert to lowwercase
            </button>
            <button className='btn btn-primary m-2' onClick={handleClearClick}>
              Clear Text
            </button>
            <button className='btn btn-primary m-2' onClick={handleCopy}>
              Copy Text
            </button>
            <button className='btn btn-primary m-2' onClick={handleExtraSpaces}>
              Remove Spaces
            </button>
          </div>
          <div className='my-4'>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters </p>
          </div>
          <div className=''>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"} </p>
          </div>
        </div>
      </div>
    </>
  );
}
