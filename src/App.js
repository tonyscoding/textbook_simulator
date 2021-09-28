import React from 'react';
import './App.css';
import TextbookPage from './components/TextbookPage';
// import textbookJSON from './textbook/textbookJSON.json';
// import pygame_bug from './textbook/pygame_bug/pygame_bug.json';
import python_01 from './textbook/python_01/python_01.json';
import './assets/css/TextbookPage.css'
import fs from 'fs'

let textbook = python_01;
let textbook_path = './textbook/python_01/python_01.json';

const append_description = (text, step_no, idx) => {

  let object = {
      "content": text,
      "sub_content":""
  }
  console.log(textbook)
  textbook.textbook_contents[step_no].step_items[idx].descriptions.push(object);
  // fs.writeFile('./textbook/textbookJSON.json', JSON.stringify(textbook), 'utf8', (err) => {
  fs.writeFile(textbook_path, JSON.stringify(textbook), 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }
    );
}

function App() {
  // let textbook = textbookJSON

  return (
    <div className="frame">
    <div className="App">
      {/*
      <div className="CustomToolbar">
        <CustomToolbar/>
      </div>
      */}
      <TextbookPage
        textbook_title={textbook.textbook_title}
        textbook_subtitle={textbook.textbook_subtitle}
        step_description_items={textbook.textbook_contents}
        toast_step_items={textbook.textbook_contents}
        textbook_summary={textbook.textbook_summary}
        append_description={append_description}
      />
    </div>
    </div>
  );
}

export default App;
