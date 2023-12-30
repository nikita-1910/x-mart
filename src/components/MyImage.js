import React, { useState } from "react";
import "./MyImage.css"
const MyImage = ({ imgs = [{ url: "" }] }) => {
    const [mainImage, setMainImage] = useState(imgs[0]);
    return (
        <>
            <div className="singleProductImages">
                <div className="grid grid-four-column-s">
                    {imgs.map((curElm, index) => {
                        return (
                            <figure>
                                <img
                                    src={curElm.url}
                                    alt={curElm.filename}
                                    className="box-image--style "
                                    key={index}
                                    onClick={() => setMainImage(curElm)}
                                />
                            </figure>
                        );
                    })}
                </div>
                {/* 2nd column  */}

                <div className=" main-image">
                    <img src={mainImage.url} alt={mainImage.filename} />
                </div>
            </div>
        </>
    );
};

export default MyImage