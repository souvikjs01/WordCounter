"use client"
import React from 'react'

export default function TextArea({text, setText}: {text: string, setText: any}) {
  
  return (
    <textarea
      onChange={(e) => {
        let newText = e.target.value;
        if(newText.includes("<script>")) {
          alert("No script tag are allowed!")
          newText = newText.replace('<script>', '');
        }
        setText(newText)
      }}
      value={text} 
      name="textarea" 
      id="words" 
      rows={12} 
      cols={46} 
      placeholder='Your text...' 
      className=' p-4 focus:outline-none rounded-md' 
    />
  )
}
