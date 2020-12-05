import React, { Component } from 'react'
import { Nav } from 'reactstrap'
import Navbarclient from './NavbarClient'
import SlideShow from './SlideShow'
import ProductList from './ProductList'
import IconHome from './IconHome'
import CartItem from './CartItem'
import Footer from './Footer'
import '../../assets/style/admin.scss'
import Logo from './Logo'


export default class Home extends Component {


    render() {
        return (
            <>
                <div className="container-fluid body-Page">
                    <SlideShow></SlideShow>
                    <IconHome></IconHome>
                    <CartItem></CartItem>
                    <Logo></Logo>
                </div>
                <Footer></Footer>

            </>
        )
    }
}
