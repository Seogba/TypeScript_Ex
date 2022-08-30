import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //BigInt: 2^53-1 정수
  //any: 타입 검사 오류를 피함(타입이 지정되어 있지 않은 값)
  //symbol:전역적으로 고유한 참조값을 생성. Symbol()함수를 통해 생성
  //never: 존재해서는 안되는 상태

  function greeter(fn: (a:string) => void){
    fn("hello world!");
  }

  function printToConsole(s:string){
    console.log(s);
  }

  greeter(printToConsole);

  type DescribableFunction = {
    descripton : string;
    (someArg : number) : boolean;
  };
  function doSomething(fn: DescribableFunction){
    console.log(fn.descripton + "returned" + fn(6));
  }

  
  interface CallOrConstruct{
    new (s: string):Date;
    (n ?: number): number;
  }

  function firstElement<Type>(arr: Type[]): Type | undefined{
    return arr[0];
  }

  const s = firstElement(["a" , "b" , "c"]);
  const n = firstElement([1,2,3]);
  const u = firstElement([]);

  function longest<Type extends {length : number}>(a: Type, b:Type){
    if(a.length >= b.length){
      return a;
    } else{
      return b;
    }
  }

  const longerArray = longest([1,2],[1,2,3]);
  console.log(longerArray);
  const longerString = longest("alice" , "bob");
  console.log(longerArray);
  
  function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
  }
  const arr = combine<string | number>([1, 2, 3], ["hello"]);

  function firstElement1<Type>(arr: Type[]){
    return arr[0];
  }

  function firstElement2<Type extends any[]>(arr: Type){
    return arr[0];
  }

  const a = firstElement1([1,2,3]);
  const b = firstElement2([1,2,3]); //1이 2보다 좋은 방법



  return (
    <div className="App">
      <h1>gello world</h1>
    </div>
  );
}

export default App;
