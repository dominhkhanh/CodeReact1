import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../../assets/style/admin.scss'


export default function () {
    const slideImages = [
        'https://cf.shopee.vn/file/4c8f8e0dc013c4433388b10215c6e4fb_xxhdpi',
        'https://cf.shopee.vn/file/5a13f871fb55a8ea01a6cdfe4be111c9_xxhdpi',
        'https://cf.shopee.vn/file/8a28fdfd3752501a5fef0147ed1daad0_xxhdpi'
    ];

    return (
        <div className="slide-container1 container-fluid  ">
            <div className="row slide-container-img d-flex justify-content-center align-items-center   "  >
                <div className="col-7 p-4 mt-4">
                    <Slide  >
                        <div className="each-slide  ">
                            <div style={{ 'height': `300px`, 'backgroundImage': `url(${slideImages[0]})`, 'background-size': 'auto', 'background-position': 'center', 'background-repeat': 'no-repeat' }}>

                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'height': `300px`, 'backgroundImage': `url(${slideImages[1]})`, 'background-size': 'auto', 'background-position': 'center', 'background-repeat': 'no-repeat' }}>

                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'height': `300px`, 'backgroundImage': `url(${slideImages[2]})`, 'background-size': 'auto', 'background-position': 'center', 'background-repeat': 'no-repeat' }}>
                            </div>
                        </div>
                    </Slide>
                </div>
                <div className="col-4 p-2 pl-1 mt-4">
                    <div>
                        <div style={{ 'width': `100%` }}>
                            <img className=" Slide-img" src="https://cf.shopee.vn/file/0e090e5d3f78bc90c34fc92fa16d81ad_xhdpi" alt="" />
                        </div>

                    </div>
                    <div>
                        <div style={{ 'width': `100%` }}>
                            <img className="mt-1  Slide-img" src="https://cf.shopee.vn/file/b52513ba0418a73e8a94f56ac56779e9_xhdpi" alt="" />
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}



