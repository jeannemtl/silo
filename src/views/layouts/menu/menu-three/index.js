import React, { Component } from 'react';
import { Container, Grid, Sidebar, Segment, Menu, Icon, Header } from 'semantic-ui-react';

import menuThreePic from '../../../../assets/images/ecommerce-product-five.png';

const bgImg = {
    backgroundImage: 'url(' + menuThreePic + ')',
};

class MenuThree extends Component {

    constructor(props) {
        super(props);

        this.state = { visible: false };
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility() {
        this.setState({ visible: !this.state.visible });
    }

    render() {
        const { visible } = this.state;

        return (
            <Container className="vh" textAlign="center">
                <Sidebar.Pushable as={Segment} className="transparent">
                    <Sidebar as={Menu} animation='push' visible={visible} vertical width="very wide" className="blue">
                        <Segment basic className="navbar absolute index3 fullWidth noMargin transparent">
                            <Grid columns="equal" verticalAlign="middle">
                                <Grid.Row columns={1}>
                                    <Grid.Column width={2} floated='right'>
                                        <Icon name="arrow right" onClick={this.toggleVisibility} className="white" />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                        <Segment basic className="pTop10vh noMargin noPadding">
                            <Header as="h1" className="white">THUNDER</Header>
                            <Segment basic className="separator thunderWhite noPadding mXa"></Segment>
                            <Header as="h5" className="white noMargin">SIGN IN</Header>
                        </Segment>
                        <Segment basic className="pTop20vh pLeft2em">
                            <Menu.Item name='products'>
                                Products
                            </Menu.Item>
                            <Menu.Item name='basket'>
                                Basket
                            </Menu.Item>
                            <Menu.Item name='discounts'>
                                Discounts
                            </Menu.Item>
                            <Menu.Item name='notifications'>
                                Notifications
                            </Menu.Item>
                            <Menu.Item name='favourites'>
                                Favourites
                            </Menu.Item>
                        </Segment>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic className="navbar absolute index3 fullWidth noMargin transparent">
                            <Grid columns="equal" verticalAlign="middle">
                                <Grid.Row columns={2}>
                                    <Grid.Column width={2}>
                                        <Icon name="align left" onClick={this.toggleVisibility} className="menuIcon darkGray pLeftHalf" />
                                    </Grid.Column>
                                    <Grid.Column width={2} floated="right">
                                        <Icon name="ellipsis vertical" className="lightGray" />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                        <Segment basic className="vh vw noMargin noPadding">
                            <Segment basic className="fullHeight noMargin bgCover" style={bgImg}>
                                <Segment basic className="pTop10vh noMargin noPadding">
                                    <Header as="h1" className="darkGray">CHAIR</Header>
                                    <Segment basic className="separator thunderDarkGray noPadding mXa"></Segment>
                                    <Header as="h5" className="darkGray noMargin">Living Room</Header>
                                </Segment>
                                <Segment basic padded className="absolute toBottom noMargin fullWidth">
                                    <Grid columns="equal" verticalAlign="middle">
                                        <Grid.Row columns={2}>
                                            <Grid.Column width={4} className="noPadding">
                                                <Header as="h5" className="darkGray noMargin textLeft">$ 299.00</Header>
                                            </Grid.Column>
                                            <Grid.Column width={3} floated='right'>
                                                <Segment basic className="noMargin noPadding squareXs thunderBlue centerContent">
                                                    <Icon name="plus" className="white noMargin" />
                                                </Segment>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                            </Segment>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>

            </Container>
        );
    }
}


export default MenuThree;
