import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Icon, Grid, Header, Menu, Image } from 'semantic-ui-react';

import avatar from '../../../../assets/images/avatar.png';

import feedOne from '../../../../assets/images/feed-img-one.png';

const feedOneBg = {
  backgroundImage: 'url(' + feedOne + ')',
};

class FeedTwo extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'public' };
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
              <Grid.Row columns={3}>
                <Grid.Column width={2}>
                  <Link to="/" className="white">
                    <Icon name="align left" className="menuIcon" />
                  </Link>
                </Grid.Column>
                <Grid.Column width={12} className="centerContent">
                  <Header as="h5" className="white">
                    FEED
                  </Header>
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
            className="fullWidth thunderDarkGray noMargin noPadding overflowHidden bgCover headerSmall headerShapesSmall"
          >
            <Segment basic className="absolute toBottom fullWidth pBottom0">
              <Menu secondary className="thunderMenu gold">
                <Menu.Item
                  name="public"
                  active={activeItem === 'public'}
                  onClick={this.handleItemClick}
                >
                  <Header as="h5" className="white">
                    PUBLIC
                  </Header>
                </Menu.Item>
                <Menu.Menu position="right">
                  <Menu.Item
                    name="personal"
                    active={activeItem === 'personal'}
                    onClick={this.handleItemClick}
                  >
                    <Header as="h5" className="white">
                      PERSONAL
                    </Header>
                  </Menu.Item>
                  <Menu.Item
                    name="world"
                    active={activeItem === 'world'}
                    onClick={this.handleItemClick}
                  >
                    <Header as="h5" className="white">
                      WORLD
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
                      <Header as="h5" className="lightGray">
                        <span className="gray">Hailey Hodges </span>Cras quis nulla commodo, aliquam
                        lectus sed, blandit augue. Cras ullamcorper bibendum bibendum.
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
                        <span className="toRight">
                          <span className="lightGray">
                            <Icon name="heart" className="lightGray" />2,435
                          </span>&nbsp;&nbsp;
                          <span className="lightGray">
                            <Icon name="comment" className="lightGray" />198
                          </span>
                        </span>
                      </Header>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>

            <Segment basic className="noMargin">
              <Segment basic className="vh30 noPadding bgCover" style={feedOneBg} />
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column width={3}>
                    <Segment basic className="noMargin noPadding avatar">
                      <Image src={avatar} />
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Segment basic className="noPadding textLeft">
                      <Header as="h5" className="lightGray">
                        <span className="gray">Aidan Pass</span> Mauris non tempor quam, et lacinia
                        sapien. Mauris accumsan eros.
                      </Header>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                  <Grid.Column width={13} floated="right">
                    <Segment basic className="textLeft borderBottomLightGray pLeft0 pRight0">
                      <Header as="h5">
                        <span className="lightGray">
                          <Icon name="clock" className="lightGray" />23 min
                        </span>
                        <span className="toRight">
                          <span className="lightGray">
                            <Icon name="heart" className="lightGray" />123
                          </span>&nbsp;&nbsp;
                          <span className="lightGray">
                            <Icon name="comment" className="lightGray" />564
                          </span>
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

export default FeedTwo;
