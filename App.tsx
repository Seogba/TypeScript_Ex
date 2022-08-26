import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  type Add = {
    (a:number , b:number) :number
    (a:number, b:number, c:number) : number
  }

  const add:Add = (a,b,c?:number) =>{
    if(c) return a+b+c
    return a+b
  }

  add(1,2)
  add(1,2,3)


  type Age = number;
  type Player = {
    readonly name:string,
    goal?:Age
  }
  const PlayerMaker = (name:string) : Player =>{
    return {
      name:name,
    }
  }
  const jisung = PlayerMaker("박지성");

  return (
    <div className="App">
      <h1>gello world</h1>
    </div>
  );
}

export default App;
