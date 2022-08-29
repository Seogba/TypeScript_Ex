import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //BigInt: 2^53-1 정수
  //any: 타입 검사 오류를 피함(타입이 지정되어 있지 않은 값)
  //symbol:전역적으로 고유한 참조값을 생성. Symbol()함수를 통해 생성


  type fish = {swim : () => void};
  type Bird = {fly:() => void};
  type Human = {swim?: () => void; fly?: () => void};

  function move(animal:fish | Bird | Human){
    if("swim" in animal){
      return animal.swim;
    }
    else{
      return animal.fly;
    }
  }



  function logValue (x:Date | string){
    if(x instanceof Date){
      console.log(x.toString)
    }
    else{
      console.log(x.toUpperCase());
    }
  }

function example() {
  let x : string | number | boolean;

  x = Math.random() < 0.5;

  console.log(x);

  if(Math.random() < 0.5){
    x = "hello";
    console.log(x);
  }

  else{
    x = 100;
    console.log(x);
  }

  return x;
}

function isFish(pet:fish | Bird) : pet is fish{
  return (pet as fish).swim !== undefined;//컴파일러에게 무언가를 유형으로 처리하도록 지시
}


interface Circle{
  kind: "circle";
  radius ?: number;

}

interface Square{
  kind:"square";
  sideLength : number;
}

//never: 존재해서는 안되는 상태

type Shape = Circle | Square;
  return (
    <div className="App">
      <h1>gello world</h1>
    </div>
  );
}

export default App;
