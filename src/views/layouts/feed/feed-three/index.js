import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Icon, Grid, Header, Menu, Image } from 'semantic-ui-react';

import avatar from '../../../../assets/images/avatar.png';
import logo from '../../../../assets/images/logo-blue.png';

class FeedThree extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'feed' };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Container textAlign="center">
        <Segment basic className="vw noPadding noMargin bgCover">
          <Segment basic className="navbar absolute index3 fullWidth noMargin transparent">
            <Grid columns="equal" verticalAlign="middle">
              <Grid.Row columns={2}>
                <Grid.Column width={2}>
                  <Link to="/" className="white">
                    <Icon name="align left" className="menuIcon" />
                  </Link>
                </Grid.Column>
                <Grid.Column width={2} floated="right">
                  <Link to="/" className="white">
                    <Icon name="search" />
                  </Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment
            basic
            className="fullWidth thunderBlue noMargin noPadding overflowHidden bgCover headerMedium headerShapes"
          >
            <Segment basic className="absolute fullWidth noMargin noPadding verticalAlign">
              <Image src={logo} className="logoXs mXa" />
            </Segment>
            <Segment basic className="absolute toBottom fullWidth pBottom0">
              <Menu secondary className="thunderMenu">
                <Menu.Item>
                  <Header as="h6" className="white">
                    15 - 21 September
                  </Header>
                </Menu.Item>
                <Menu.Menu position="right">
                  <Menu.Item
                    name="pins"
                    active={activeItem === 'pins'}
                    onClick={this.handleItemClick}
                  >
                    <Header as="h5" className="white">
                      PINS
                    </Header>
                  </Menu.Item>
                  <Menu.Item
                    name="feed"
                    active={activeItem === 'feed'}
                    onClick={this.handleItemClick}
                  >
                    <Header as="h5" className="white">
                      FEED
                    </Header>
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            </Segment>
          </Segment>

          <Segment basic className="noMargin noPadding pTop5vh">
            <Segment basic padded className="noMargin">
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column width={3}>
                    <Segment basic className="noMargin noPadding avatar">
                      <Image src={avatar} />
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={13}>
                    <Segment basic className="noPadding textLeft">
                      <Header as="h5" className="lightGray noMargin">
                        <span className="gray">Hailey Hodges </span>commented on{' '}
                        <span className="gray">Morning </span>
                      </Header>
                      <Header as="h5" className="lightGray noMargin">
                        Ride “Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
                        ullamcorper bibendum bibendum.”
                      </Header>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                  <Grid.Column width={13} floated="right">
                    <Segment basic className="textLeft borderBottomLightGray pLeft0 pRight0">
                      <Header as="h5">
                        <span className="lightGray">
                          <Icon name="clock" className="lightGray" />10 min
                        </span>
                      </Header>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>

            <Segment basic padded className="noMargin">
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column width={3}>
                    <Segment basic className="noMargin noPadding avatar">
                      <Image src={avatar} />
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={13}>
                    <Segment basic className="noPadding textLeft">
                      <Header as="h5" className="lightGray noMargin">
                        <span className="gray">Aidan Pass </span>added a new project{' '}
                        <span className="gray">Parallax </span>
                      </Header>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                  <Grid.Column width={13} floated="right">
                    <Segment basic className="textLeft borderBottomLightGray pLeft0 pRight0">
                      <Header as="h5">
                        <span className="lightGray">
                          <Icon name="clock" className="lightGray" />22 min
                        </span>
                      </Header>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>

            <Segment basic padded className="noMargin">
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column width={3}>
                    <Segment basic className="noMargin noPadding avatar">
                      <Image src={avatar} />
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={13}>
                    <Segment basic className="noPadding textLeft">
                      <Header as="h5" className="lightGray noMargin">
                        <span className="gray">Hailey Hodges </span>has set a new status
                      </Header>
                      <Header as="h5" className="gray noMargin">
                        “Make Love, Not War!”
                      </Header>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                  <Grid.Column width={13} floated="right">
                    <Segment basic className="textLeft borderBottomLightGray pLeft0 pRight0">
                      <Header as="h5">
                        <span className="lightGray">
                          <Icon name="clock" className="lightGray" />1 hour
                        </span>
                      </Header>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>

            <Segment basic padded className="noMargin">
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column width={3}>
                    <Segment basic className="noMargin noPadding avatar">
                      <Image src={avatar} />
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={13}>
                    <Segment basic className="noPadding textLeft">
                      <Header as="h5" className="lightGray noMargin">
                        <span className="gray">Aidan Pass </span>commented on{' '}
                        <span className="gray">Morning Ride </span>
                      </Header>
                      <Header as="h5" className="lightGray noMargin">
                        “Cras quis nulla commodo, aliquam lectus sed.”
                      </Header>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                  <Grid.Column width={13} floated="right">
                    <Segment basic className="textLeft borderBottomLightGray pLeft0 pRight0">
                      <Header as="h5">
                        <span className="lightGray">
                          <Icon name="clock" className="lightGray" />2 hour
                        </span>
                      </Header>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default FeedThree;
