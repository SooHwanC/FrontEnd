import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import List from './components/List';
import Detail from './components/Detail';
import axios from 'axios'
import './Player.css'
import Sharetest from './components/Sharetest';

const Player = () => {

    /* 
    1. public 안의 json 파일에서 데이터 가져오기
        -> useEffect, axios 사용
        -> state 생성 후 가져온 데이터 세팅
    2. 컴포넌트 생성 및 라우팅 설정
        -> 메인페이지 : Main.jsx, /
        -> 리스트 페이지 : List.jsx, /list
        -> 상세 페이지 : Detail.jsx, /detail
    */

    const [list, setList] = useState([]);

    useEffect(() => {
        console.log("스프링으로 요청");
        let url = 'http://localhost:8090/SpringBoot2/PlayerList.do'
        axios
            .post(url, { responseType: 'blob' })
            .then((res) => {
                console.log(res.data);
                setList(res.data);
            })
            .catch(() => {
                console.log('error');
            })
    }, [])



    return (
        <div>
            <Routes>
                <Route path='/' element={<Main />}></Route>
                <Route path='/list' element={<List list={list} />}></Route>
                <Route path='/detail/:index' element={<Detail list={list} />}></Route>
                <Route path='/sharetest' element={<Sharetest />}></Route>

            </Routes>
        </div>
    )
}

export default Player