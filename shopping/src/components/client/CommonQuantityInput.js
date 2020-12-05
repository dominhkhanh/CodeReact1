import React from 'react'
import { Col, Row } from 'reactstrap'
import '../../assets/style/common_input.scss'

export function Commonquantityinput(props) {
    return (
        <>
            <Row className="quantity-input">
                <Col md={4} className="minus" onClick={() => { props.onChange && props.onChange(-1, true) }}>
                    -
                </Col>
                <Col md={4} className="quantity">
                    <input value={props.value || 0} onChange={(event) => { props.onChange && props.onChange(Number(event.target.value)) }} />
                </Col>
                <Col md={4} className="plus" onClick={() => { props.onChange && props.onChange(1, true) }}>
                    +
                </Col>
            </Row>

        </>
    )
}
