import React, { useEffect } from 'react'
import axios from 'axios'
import Item from './Item'

const List = ({ list }) => {

    console.log('확인', list);

    /* 
    1. 포지션이 MF인 선수 배열
    2. 만들어진 배열 map함수로
    */



    let FMList2 = list.filter((item, index) => (item.position === 'MF' && (item.index = index, true)));

    let FMList = list.filter((item, index) => {
        if (item.position === 'MF') {
            item.index = index; // 새로운 속성 추가
            return true; // 조건에 맞는 경우만 필터링
        }
        return false; // 조건에 맞지 않는 경우는 필터링하지 않음
    });


    console.log('fm확인112', FMList);



    return (
        <div className='list-container'>
            <h1>Korea Republic</h1>
            <div className='item-container'>
                {list.map((item, index) => <Item key={index} imgSrc={"data:image/;base64,"+item.imgSrc} name={item.name} position={item.position} index={index} />)}
            </div>

            <hr />
            <h1>MF 선수</h1>
            <div className='item-container'>
                {FMList2.map((item, index) => <Item key={index} imgSrc={item.imgSrc} name={item.name} position={item.position} index={item.index} />)}

            </div>


        </div>
    )
}

export default List