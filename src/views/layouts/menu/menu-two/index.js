import React, { Component } from 'react';
import { Container, Grid, Sidebar, Segment, Menu, Icon, Header } from 'semantic-ui-react';

import menuTwoPic from '../../../../assets/images/ecommerce-product-five.png';

const bgImg = {
    backgroundImage: 'url(' + menuTwoPic + ')',
};

class MenuTwo extends Component {

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
            <Container className="vh darkGray" textAlign="center">
                <Sidebar.Pushable as={Segment} className="transparent">
                    <Sidebar as={Menu} animation='push' visible={visible} vertical width="wide" className="darkGray textLeft menuTwo">
                        <Segment basic className="pTop10vh pLeft2em fullHeight menuTwoSidebar bgCover">
                            <Menu.Item name='products' active>
                                <Icon name='block layout' />
                                Products
                            </Menu.Item>
                            <Menu.Item name='basket'>
                                <Icon name='shopping basket' />
                                Basket
                            </Menu.Item>
                            <Menu.Item name='account'>
                                <Icon name='user' />
                                Account
                            </Menu.Item>
                            <Menu.Item name='notifications'>
                                <Icon name='bell' />
                                Notifications
                            </Menu.Item>
                            <Menu.Item name='favourites'>
                                <Icon name='heart' />
                                Favourites
                            </Menu.Item>
                            <Menu.Item name='settings' className="lastItem">
                                <Icon name='setting' />
                                Settings
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
                                    <Grid.Column width={2} floated='right'>
                                        <Icon name="ellipsis vertical" className="lightGray" />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                        <Segment basic className="vh vw noMargin">
                            <Segment basic className="fullHeight noMargin bgCover" style={bgImg}>
                                <Segment basic className="pTop10vh noMargin noPadding">
                                    <Header as="h1" className="darkGray">CHAIR</Header>
                                    <Segment basic className="separator thunderDarkGray noPadding mXa"></Segment>
                                    <Header as="h5" className="darkGray noMargin">THUNDER</Header>
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


export default MenuTwo;
