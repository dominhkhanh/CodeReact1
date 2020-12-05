import React from 'react'
import { Link } from 'react-router-dom';
import {
    Button,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
} from 'reactstrap'
export default function Product(props) {
    const { id, name, Price, img } = props;
    const handleAddToCart = () => {
        props.addToCart({
            id,
            name,
            Price,
            images: img
        }, 1)
    }
    return (
        <Col md={3} className="mb-5">
            <Card className="CartProduct">
                <div className="_150RS_ bgXBUk" >
                    <span class="lVCR4M ">Yêu thích</span>
                </div>

                <CardImg top width="100%" src={img} alt="Card image cap" />
                <div className="Extra">
                    <img src=" https://cf.shopee.vn/file/b25d5d200d9e4aef39d6498a96e9a3d1"></img>
                </div>


                <CardBody>
                    <CardTitle tag="h5">
                        <Link className="NameProduct mt-4" to={`/products/${id}`}>
                            {name}
                        </Link>
                    </CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 PriceProduct d-flex justify-content-center align-items-center ">{Price}$</CardSubtitle>
                    <Button color="primary" outline onClick={handleAddToCart}>Thêm Vào Giỏ </Button>
                </CardBody>
            </Card>
        </Col >
    )
}
