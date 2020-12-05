import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {
    Col,
    Container,
    Row,
    Button,
    Card,
    Spinner,
} from 'reactstrap'
import { Commonquantityinput } from './CommonQuantityInput'
import Imagecontainer from './ImageContainer'
import Navbarclient from './NavbarClient'
import Axios from 'axios'
import API_CONSTANT from '../../assets/constants/api'
import { connect } from 'react-redux'
class Productdetail extends Component {
    state = {
        quantity: 1,
        product_detail: {
            id: null,
            name: '',
            Price: '',
            image: []
        },
        loading: undefined

    }
    componentDidMount() {
        this.setState({
            loading: true,
        })
        Axios.get(`${API_CONSTANT.DOMAIN}/products/${this.props.match.params.id}`).then(res => {
            this.setState({
                product_detail: res.data,
                loading: false
            })
        }).catch(err => {
            console.log(err)
        })
    }
    handleChangeQuantity = (data, operator = false) => {
        if (operator) {
            return this.setState({
                quantity: this.state.quantity + data
            })
        }
        this.setState({
            quantity: data
        })
    }
    handleAddToCart = () => {
        this.props.addToCart({
            ...this.state.product_detail,
            images: this.state.product_detail.image[0]
        }, this.state.quantity)
    }
    items = 'https://product.hstatic.net/1000351433/product/4a3c7686-0b83-4ab1-abff-de3d21a1758e_31d51d9c063940f09bddd0e5ac3475d3_grande.jpg'
    render() {
        const { name, Price, image } = this.state.product_detail;
        return (
            <>
                {this.state.loading === false ?
                    <Container className="my-5">
                        <Row>

                            <Col md={5} cls>
                                <Imagecontainer items={image} />
                            </Col>
                            <Col md={7}>
                                <Card className="p-3">
                                    <h3>
                                        {name}
                                    </h3>
                                    <h5 className="text-warning">
                                        Price: {Price}$
                                    </h5>

                                    <Commonquantityinput onChange={this.handleChangeQuantity} value={this.state.quantity} />
                                    <Button color="primary" outline onClick={this.handleAddToCart}>Thêm Vào Giỏ Hàng</Button>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    :
                    <div className="loading d-flex justify-content-center align-items-center">
                        <Spinner color="primary" />
                    </div>}

            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (product, quantity) => {
            dispatch({
                type: "ADD_TO_CART",
                payload: {
                    ...product,
                    quantity
                }
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Productdetail))