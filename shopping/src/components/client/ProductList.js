import React from 'react'
import Product from './Product'
import {
    Row, Spinner, Col, Button
} from 'reactstrap';
import Axios from 'axios';
import API_CONSTANT from '../../assets/constants/api'
import { connect } from 'react-redux'

class Productlist extends React.Component {
    state = {
        products: [],
        loading: false
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        Axios.get(API_CONSTANT.DOMAIN + '/products').then(res => {
            this.setState({
                products: res.data,
                loading: false
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <>
                <Row className=" SX-Product ">
                    <Col>
                        <h5 className="mt-1">Sắp xếp theo</h5>
                    </Col>
                    <Col>
                        <Button color="light">Liên Quan</Button>
                    </Col>
                    <Col>
                        <Button color="light">Mới Nhất</Button>
                    </Col>
                    <Col>
                        <Button color="light">Bán Chạy</Button>
                    </Col>
                    <Col>
                        <select className="p-2" name="" id="">
                            <option value="">Giá Thấp Đến Cao</option>
                            <option value="">Giá Cao Đến Thấp</option>

                        </select>
                    </Col>


                </Row>
                <Row className="mt-4">
                    {this.state.loading && <Spinner color="primary" />}
                    {this.state.products.map((product, index) => {
                        return <Product addToCart={this.props.addToCart} key={`$product_${index}`} id={product.id} name={product.name} img={product.image[0]} Price={product.Price} />
                    })}
                </Row>
            </>
        )
    }


}
const mapDispatchToProps = (dispatch) => {
    // store.dispatch
    return {
        addToCart: (product, quantity) => {
            dispatch({
                type: "ADD_TO_CART", payload: {
                    ...product,
                    quantity
                }
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(Productlist)