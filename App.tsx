import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //BigInt: 2^53-1 정수
  //any: 타입 검사 오류를 피함(타입이 지정되어 있지 않은 값)
  //symbol:전역적으로 고유한 참조값을 생성. Symbol()함수를 통해 생성

  const firstName = Symbol("name");
  const secondName = Symbol("name");
  const n1:BigInt = BigInt(30);

  const [count , setCount] = useState(Symbol(5));
  const [int , setInt] = useState(BigInt(5));


  interface User{
    name:string;
    id?:number;
  }

  const user:User = {
    name: "박지성",
  }

  class UserAccount{
    name:string;
    id:number;

    constructor(name:string , id:number){
      this.name = name;
      this.id = id;
    }
  }

  interface torres{
    value:number 
  }

 

  class koke{
    readonly value:number[] = [3,6,9];
  }

  const user2:User = new UserAccount("Gerrard" , 8);

  type StringArray = Array<string>;
  type NumberArray = Array<number>;
  type ObjectWithNameArray = Array<{name:string}>;

  function getFavoriteNumber():number {
    return 66;
  }

  function getUsersOnlineMessege(numUsersOnline:number){
    if(numUsersOnline){
      return 'There are ${numUsersOnline} online now!'
    }

    return "Nobody's here"
  }

  type Fish = {swim:()=>void};
  type Bird = {fly: () => void};

  function move(animal: Fish | Bird){
    if("swim" in animal){
      return animal.swim();
    }

    return animal.fly();
  }

  return (
    <div className="App">
      <h1>gello world</h1>
    </div>
  );
}

export default App;
