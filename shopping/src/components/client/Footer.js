import React from 'react'
import {
    Container
}
    from 'reactstrap'

import '../../assets/style/admin.scss'





export default function () {
    return (
        <Container className="Footer" fluid="true">
            <div className="row" >
                <div className=" col-12">
                    <a href="">CHÍNH SÁCH BẢO MẬT</a>
                    <a href=""> QUY CHẾ HOẠT ĐỘNG</a>
                    <a href=""> CHÍNH SÁCH VẬN CHUYỂN</a>
                    <a href=""> CHÍNH XÁC TRẢ HÀNG VÀ HOÀN TIỀN</a>
                </div>
            </div>

        </Container>
    )
}