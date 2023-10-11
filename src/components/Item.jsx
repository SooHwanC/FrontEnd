import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Item = ({ imgSrc, name, position, index }) => {

    /* 
    선수 카드 클릭 시 상세페이지 이동
    */

    const nav = useNavigate();


    return (
        <div className='item-item' onClick={() => {
            console.log("detail 요청부분")
            let url = "http://localhost:8090/SpringBoot2/PlayerDetail.do?name="+name;

            axios.post(url)
                .then((res) => {
                    console.log(res.data);  // 나상호의 정보 출력
                })
            nav(`/detail/${index}`)
        }}>

            <img src={imgSrc} height='100%' />
            <table >
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>Position</td>
                        <td>{position}</td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}

export default Item