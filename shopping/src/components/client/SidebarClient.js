import React from 'react'
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap'
export default function Sidebarclient(props) {


    return (
        <ListGroup>
            <ListGroupItem>
                <h4> Bộ Lọc Tìm Kiếm</h4>
            </ListGroupItem>
            <ListGroupItem>
                <select className="p-2 pr-3" name="" id="">
                    <option value="">Áo Nỉ nam</option>
                    <option value="">Quần Thun Nam</option>
                    <option value="">Váy</option>
                    <option value="">Giày</option>
                </select>
            </ListGroupItem>
            <ListGroupItem>
                <select className="p-2 pr-5" name="" id="">
                    <option value="">Nơi Bán</option>
                    <option value="">Hồ Chí Minh </option>
                    <option value="">hà Nội</option>
                    <option value="">Đà Nẵng</option>
                </select></ListGroupItem>
            <ListGroupItem>
                <select className="p-2 pr-5" name="" id="">
                    <option value=""> Vận Chuyển</option>
                    <option value="">Shopee </option>
                    <option value="">Go NOW</option>
                    <option value="">J & T </option>
                </select>
            </ListGroupItem>
            <ListGroupItem>
                <select className="p-2 pr-5" name="" id="">
                    <option value="">Tình Trạng</option>
                    <option value="">Sản Phẩm Mới</option>
                    <option value="">Đã Dùng</option>

                </select>
            </ListGroupItem>
            <ListGroupItem>
                <select className="p-2 pr-5" name="" id="">
                    <option value="">Khuyến Mãi</option>
                    <option value="">Free Extra</option>
                    <option value="">Free Giao Hàng</option>

                </select>
            </ListGroupItem>
        </ListGroup>
    )
}
