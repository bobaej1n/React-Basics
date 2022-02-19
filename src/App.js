import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '남자 슬랙스 추천', '여자 슬랙스 추천']);
  let posts = "강남 고기 맛집";
  let [좋아요, 좋아요변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState('');

  //function 제목바꾸기() {
  //  var newArray = [...글제목];
  //  newArray[0] = '여자 코트 추천';
  //  글제목변경(newArray);
  //}

  // 반복문 사용 방법2
  function 반복된UI() {

    var 어레이 = [];

    for (var i = 0; i < 3; i++) {
      어레이.push(<div>안녕</div>);
    }

    return 어레이
  }
  
  function 글발행(입력값) {
    var arr = [...글제목];
    arr.unshift(입력값);
    글제목변경(arr);
  }

  // 내 방법
  // function modal토글(status) {
  //   status === false
  //   ? modal = true
  //   : modal = false

  //   return modal
  // }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      
      {
        // 반복문 사용 방법 1: map() 함수 사용
        글제목.map(function(글, i){
          return (
          <div className='list'>
            <h3 onClick={ ()=>{ 누른제목변경(i) } }> { 글 } <span onClick={ ()=>{ 좋아요변경(좋아요 + 1) } }>👍</span> {좋아요} </h3>
            <p>2월 18일 발행</p>
            <hr/>
          </div>
          )
        })
      }

      <div className='publish'>
        <input onChange={ (e)=>{ 입력값변경(e.target.value) } } />
        <button onClick={ ()=>{ 글발행(입력값) } }>저장</button>
      </div>

      {/* 입력값 저장 방법 */}
      {/* { 입력값 }
      <input onChange={ (e)=>{ 입력값변경(e.target.value) } } /> */}

      {/* <button onClick={ ()=>{ 누른제목변경(0) } }>버튼1</button>
      <button onClick={ ()=>{ 누른제목변경(1) } }>버튼2</button>
      <button onClick={ ()=>{ 누른제목변경(2) } }>버튼3</button> */}

      {/*<button onClick={ ()=>{ modal변경(modal토글(modal)) } }>버튼(나)</button> */}
      <button onClick={ ()=>{ modal변경(!modal) } }>열고닫기</button>

      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목} />
        : null 
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h2>{ props.글제목[props.누른제목] } </h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
