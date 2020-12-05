import React from 'react'
import {
    Collapse,
    Container,
    NavbarText,
    Nav,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    Navbar
}

    from 'reactstrap'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import { ShoppingCartSolid } from '../../assets/icons/shopping-cart-solid';
import { connect } from 'react-redux';
import HomePage from './HomePage'


function Navbarclient(props) {

    const toggle = false;
    const isOpen = false;

    return (<>
        <HomePage></HomePage>

        <Container fluid={true}>

            <Navbar color="light" light expand="md">
                <NavbarBrand>
                    <NavLink className="text-info " exact to="/">
                        HOME
                    </NavLink>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className="text-danger " to="/products/">PRODUCT NEW</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-warning" to="/cart">CART</NavLink>
                        </NavItem>
                    </Nav>
                    <div className="search mr-3 ">
                        <InputGroup>
                            <Input />
                            <InputGroupAddon addonType="append ">

                                <button className="bg-danger buttom-search rounded-right text-light">Tìm Kiếm</button>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                    <NavbarText>
                        <div className="cart-icon">
                            <span class="badge badge-pill badge-primary">{props.cart_total}</span>
                            <ShoppingCartSolid />
                        </div>
                    </NavbarText>

                </Collapse>
            </Navbar>
        </Container>
    </>
    )

}

const mapStateToProps = (state) => {
    const total = state.cart.reduce((sum, product) => {
        return sum = product.quantity + sum
    }, 0) // tinh tong so luong san pham trong gio
    return {
        cart_total: total
    }
}

export default connect(mapStateToProps)(Navbarclient)