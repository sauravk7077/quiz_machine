import React from 'react';
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Content></Content>
      <footer>
        Design Inspired by <a href="https://dribbble.com/shots/7434980-Landing-Quiz?utm_source=Clipboard_Shot&utm_campaign=fguayama&utm_content=Landing%20Quiz&utm_medium=Social_Share">Dribbble</a>
      </footer>
    </div>
  );
}

export default App;
