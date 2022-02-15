import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '남자 슬랙스 추천', '여자 슬랙스 추천']);
  let posts = "강남 고기 맛집";
  let [좋아요, 좋아요변경] = useState(0);

  let [modal, modal변경] = useState(false);

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

  // 내 방법
  function modal토글(status) {
    status === false
    ? modal = true
    : modal = false

    return modal
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h3> { 글제목[0] } <span onClick={ ()=>{ 좋아요변경(좋아요 + 1) } }>👍</span> {좋아요} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[1] } </h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3 onClick={ ()=>{ modal변경(true) } }> { 글제목[2] } </h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>

      {/*
        modal === true
        ? <Modal />
        : null 
      */}

      <button onClick={ ()=>{ modal변경(modal토글(modal)) } }>버튼(나)</button> { /* 내 코드 */ }
      <button onClick={ ()=>{ modal변경(!modal) } }>버튼(코딩애플)</button> { /* 코딩애플 코드 */ }
      
      {
        modal === true
        ? <Modal />
        : null 
      }

      {
        // 반복문 사용 방법 1: map() 함수 사용
        글제목.map(function(글){
          return (
          <div className='list'>
            <h3> { 글 } </h3>
            <p>2월 18일 발행</p>
            <hr/>
          </div>
          )
        })
      }

      {
        // 반복문 사용 방법 2: for문 사용
        //반복된UI()
      }

    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
