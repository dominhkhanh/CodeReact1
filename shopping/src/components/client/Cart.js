import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    Button,
} from 'reactstrap'
import { Commonquantityinput } from './CommonQuantityInput'
import Imagecontainer from './ImageContainer'
import { connect } from 'react-redux';
import Swal from 'sweetalert2'
import '../../assets/style/admin.scss'
import Axios from 'axios'

class CartProduct extends React.Component {
    state = {
        quantity: 0,
    }
    componentDidMount() {
        this.setState({ quantity: this.props.product.quantity })
    }

    handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(this.props.product.id_cart);
                this.props.deleteCart(this.props.product.id_cart)
                Swal.fire(
                    {
                        title: "Deleted",
                        showConfirmButton: false,
                        timer: 1000,
                        icon: 'success',
                        timerProgressBar: true
                    }
                )
            }
        })
    }
    handleChangeQuantity = (data, operator = false) => {
        if (operator) {
            if (this.state.quantity === 1 && data === -1) {
                //delete
                this.handleDelete()
            }
            return this.setState({
                quantity: this.state.quantity + data
            }, () => {
                this.props.updateCart(this.props.product.id_cart, this.state.quantity)
            })
        }
        if (data === 0 || data < 0) {
            //delete
            return this.handleDelete()
        }
        this.setState({
            quantity: data
        }, () => {
            this.props.updateCart(this.props.product.id_cart, this.state.quantity)
        })
    }
    render() {
        const { name, Price, quantity, images, id, id_cart } = this.props.product;
        return <Card className="p-3">
            <Container fluid>
                <Row>
                    <Col md={3}>
                        {/* <Imagecontainer items={images}/> */}
                        <img src={images}></img>
                    </Col>
                    <Col md={9}>
                        <h3>
                            {name}
                        </h3>
                        <h5 className="text-warning">
                            Price: {Price}$
                        </h5>
                        <Commonquantityinput onChange={this.handleChangeQuantity} value={this.state.quantity} />
                        <Button onClick={this.handleDelete} color="primary" outline>Submit</Button>
                    </Col>
                </Row>
            </Container>
        </Card>
    }
}

class CheckoutModal extends React.Component {
    state = {
        full_name: "",
        phone: "",
        address: ""
    }
    handleClose = () => {
        this.props.toggleModal()
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();

        Axios.post('https://shopping-api-with-jwt.herokuapp.com/carts', {
            ...this.state,
            cart: [
                ...this.props.cart
            ],
            total_item: this.props.total_item,
            total_price: this.props.total_price
        }).then(res => {
            Swal.fire({
                title: "Mua Hàng Thành Công ",
                timer: 1500,
                showConfirmButton: false,
                icon: 'success',
                timerProgressBar: true
            }).then(() => {
                this.props.clearCart()
                this.handleClose();
                alert('Cảm ơn quý khách đã sử dụng dịch vụ của chúng tôi')
            })
        }).catch(err => {

            Swal.fire({
                title: "Mua Hàng Không Thành Công",
                text: "Something went wrong",
                timer: 1500,
                showConfirmButton: false,
                icon: 'error',
                timerProgressBar: true
            })
            alert('Chúng Tôi Rất Xin Lỗi Vì Sự Cố Này, Xin Quý Khách Thử Lại Sau ')
        })

    }
    render() {
        const { full_name, address, phone } = this.state
        return <div className="modal ">
            <div className="content p-3">
                <button type="button" onClick={this.handleClose} className="close btn ">
                    X
                </button>
                <h5>Checkout</h5>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Họ Tên Khách Hàng</label>
                        <input type="text" name="full_name" className="form-control" placeholder="Full name" value={full_name} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Số Điện Thoại</label>
                        <input type="text" name="phone" className="form-control" placeholder="Phone" value={phone} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Địa Chỉ</label>
                        <input type="text" name="address" className="form-control" placeholder="Address" value={address} onChange={this.handleChange} />
                    </div>
                    <button type="submit" class="btn btn-outline-primary">
                        Mua
                    </button>
                </form>
            </div>
        </div>
    }
}

class Cart extends Component {
    state = {
        open: false,
    }

    toggleModal = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return (
            <>
                <Container className="my-5">
                    <Row>
                        <Col md={9}>
                            {this.props.cart.length > 0 ?
                                this.props.cart.map(product => {
                                    return <CartProduct deleteCart={this.props.deleteCart} updateCart={this.props.updateCart} product={product} key={product.cart_id} />
                                }) :
                                <h3 className="text-danger">Chưa có sản phẩm nào được thêm vào giỏ hàng</h3>}
                        </Col>
                        <Col md={3} cls>
                            <Card className="p-3">
                                <h3>Sản Phẩm : {this.props.total_item} </h3>
                                <h4 className="text-warning">Tổng Tiền: {this.props.total_price}$</h4>
                                <Button onClick={this.toggleModal} color="primary" >Mua</Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                {
                    this.state.open ? <CheckoutModal total_item={this.props.total_item} total_price={this.props.total_price} cart={this.props.cart} clearCart={this.props.clearCart} toggleModal={this.toggleModal} /> : ''
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    const total_item = state.cart.reduce((sum, product) => {
        return sum = product.quantity + sum
    }, 0)
    const total_price = state.cart.reduce((sum, product) => {
        return sum = product.quantity * product.Price + sum
    }, 0)
    return {
        cart: state.cart,
        total_item,
        total_price
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateCart: (id_cart, quantity) => {
            dispatch({
                type: "UPDATE_CART",
                payload: {
                    id_cart,
                    quantity
                }
            })
        },
        deleteCart: id_cart => {
            dispatch({
                type: "DELETE_CART",
                payload: id_cart
            })
        },
        clearCart: () => {
            dispatch({
                type: "CLEAR_CART"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)