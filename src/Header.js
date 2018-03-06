import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Header extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col>
						Header goes here
					</Col>
				</Row>	
				<Row>
                    <Col>.col</Col>
                    <Col>.col</Col>
                    <Col>.col</Col>
                    <Col>.col</Col>
                </Row>
			</Container>
		)
	}
}

export default Header;