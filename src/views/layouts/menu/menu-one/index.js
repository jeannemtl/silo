import React, { Component } from 'react';
import { Container, Grid, Sidebar, Segment, Menu, Image, Icon, Header, Label } from 'semantic-ui-react';

import headerImg from '../../../../assets/images/pattern-shapes.png';
import picImg from '../../../../assets/images/pattern-walkthrough.png';

class MenuOne extends Component {

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
            <Container className="lightestGray" textAlign="center">
                <Sidebar.Pushable as={Segment} className="minHeightVH transparent">
                    <Sidebar as={Menu} animation='push' visible={visible} vertical width="wide" className="textLeft blue">
                        <Segment basic className="verticalAlign pLeft2em">
                            <Menu.Item name='feed'>
                                <Icon name='block layout' />
                                Feed
                            </Menu.Item>
                            <Menu.Item name='friends'>
                                <Icon name='user' />
                                Friends
                            </Menu.Item>
                            <Menu.Item name='messages'>
                                <Icon name='talk' />
                                Messages
                                <Label>2</Label>
                            </Menu.Item>
                            <Menu.Item name='notifications'>
                                <Icon name='bell' />
                                Notifications
                            </Menu.Item>
                            <Menu.Item name='photos'>
                                <Icon name='picture' />
                                Photos
                            </Menu.Item>
                            <Menu.Item name='logout' className="pTop10vh">
                                <Icon name='log out' />
                                Logout
                            </Menu.Item>
                        </Segment>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic className="navbar absolute index3 fullWidth noMargin transparent">
                            <Grid columns="equal" verticalAlign="middle">
                                <Grid.Row columns={2}>
                                    <Grid.Column width={2}>
                                        <Icon name="align left" onClick={this.toggleVisibility} className="menuIcon white" />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                        <Segment basic className="fullWidth thunderDarkGray noMargin noPadding overflowHidden headerLarge">
                            <Segment basic className="absolute fullWidth noMargin noPadding verticalAlign">
                                <Header as="h1" className="white">THUNDER</Header>
                                <Segment basic className="separator thunderWhite noPadding mXa"></Segment>
                                <Header as="h5" className="white noMargin">SIGN IN</Header>
                            </Segment>
                            <Image src={headerImg} size="medium" className="mXa" />
                        </Segment>
                        <Segment basic className="transparent noMargin">
                            <Segment basic className="noMargin">
                                <Segment basic className="thunderWhite pBottomHalf">
                                    <Image src={picImg} size="small" className="mXa" />
                                </Segment>
                            </Segment>
                            <Segment basic className="noMargin">
                                <Segment basic className="thunderWhite pTopHalf">
                                    <Image src={picImg} size="small" className="mXa" />
                                </Segment>
                            </Segment>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>

            </Container>
        );
    }
}


export default MenuOne;
