import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //BigInt: 2^53-1 정수
  //any: 타입 검사 오류를 피함(타입이 지정되어 있지 않은 값)
  //symbol:전역적으로 고유한 참조값을 생성. Symbol()함수를 통해 생성
  //never: 존재해서는 안되는 상태


  function firstElement1<Type>(arr: Type[]){
    return arr[0];
  }

  function firstElement2<Type extends any[]>(arr: Type){
    return arr[0];
  }

  const a = firstElement1([1,2,3]);
  const b = firstElement2([1,2,3]); //1이 2보다 좋은 방법


  function filter1<Type>(arr: Type[] , func: (arg: Type) =>boolean){
    return arr.filter(func);
  }

  function filter2<Type, Func extends (arg: Type) => boolean>(
    arr: Type[],
    func: Func
  ): Type[] {
    return arr.filter(func);
  }

  function greet(s: string){
    console.log("Hello" + s);
  }

  function f(x?: number):void{
    console.log(x);
  }

  f();
  f(10);
  f(undefined);

  function myForEach(arr:any[] , callback: (arg:any , index?:number)=>void){
    for(let i = 0; i < arr.length; i++){
      callback(arr[i]);
    }
  }

  function len(s:string):number;
  function len (arr:any[]):number;
  function len(x:any){
    return x.length;
  }

  len("");
  len([0]);

  const user = {
    id:123,
    admin:false,
    becomeAdmin: function(){
      this.admin = true;
    },
  };



  return (
    <div className="App">
      <h1>gello world</h1>
    </div>
  );
}

export default App;
