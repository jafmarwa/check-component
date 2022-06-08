
import './App.css';
import React from "react";
import ProfilPhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
import Adress from './component/profile/Address';

function App() {
  return (
    <div className="App">
  <ProfilPhoto></ProfilPhoto>
  <FullName></FullName>
  <Adress></Adress>
    </div>
  );
}

export default App;
