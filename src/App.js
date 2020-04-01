import React from 'react';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Contact 
      name = "Emiliano Zapata"
      avatar = "https://randomuser.me/api/portraits/lego/6.jpg"
      online
      />
      <Contact 
      name = "Mao Zedong"
      avatar = "https://randomuser.me/api/portraits/lego/5.jpg"
      />
     <Contact 
      name = "Leo Trotsk"
      avatar = "https://randomuser.me/api/portraits/lego/0.jpg"
      online
      />
    </div>
  );
}

export default App;
