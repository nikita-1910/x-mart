import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars, reviews }) => {

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        debugger;
        return (
            <span style={{'color':'yellow', 'fontSize':'1.5em'}}key={index}>
                {stars >= index + 1 ? ( <FaStar />) : stars >= number ? (<FaStarHalfAlt  />) :(<AiOutlineStar />)}
            </span>
        );
    });
    return (
        <div>
            {ratingStar}
            <p>({reviews} customer reviews)</p>
        </div>
    )
}

export default Star