import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Icon, Grid, Header, Image, Menu, Divider } from 'semantic-ui-react';

import profileImg from '../../../../assets/images/feed-img-two.png';
import avatar from '../../../../assets/images/avatar.png';

const profileImgBg = {
  backgroundImage: 'url(' + profileImg + ')',
};

class ProfileFour extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'followers' };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Container className="lightestGray" textAlign="center">
        <Segment basic className="navbar absolute index3 fullWidth noMargin transparent">
          <Grid columns="equal" verticalAlign="middle">
            <Grid.Row columns={2}>
              <Grid.Column width={2}>
                <Link to="/" className="darkGray">
                  <Icon name="arrow left" />
                </Link>
              </Grid.Column>
              <Grid.Column width={2} floated="right">
                <Link to="/" className="darkGray">
                  <Icon name="search" />
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment
          basic
          className="fullWidth thunderDarkGray noMargin noPadding overflowHidden bgCover headerLarge"
          style={profileImgBg}
        >
          <Segment basic className="absolute fullWidth noMargin noPadding verticalAlign">
            <Header as="h3" className="darkGray">
              RACHEL GILBERT
            </Header>
          </Segment>
        </Segment>
        <Segment basic className="noMargin textLeft">
          <Segment basic className="thunderWhite mTopOffset3em pTop0">
            <Segment basic className="noMargin pTop0">
              <Menu secondary className="thunderMenuInversed">
                <Menu.Item
                  name="followers"
                  active={activeItem === 'followers'}
                  onClick={this.handleItemClick}
                >
                  <Header as="h5" className="gray">
                    FOLLOWERS
                  </Header>
                </Menu.Item>
                <Menu.Item
                  name="following"
                  active={activeItem === 'following'}
                  onClick={this.handleItemClick}
                >
                  <Header as="h5" className="gray">
                    FOLLOWING
                  </Header>
                </Menu.Item>
              </Menu>
            </Segment>
            <Segment basic className="noPading mTop50">
              <Grid columns="equal" verticalAlign="middle" className="thunderList">
                <Grid.Row columns={3}>
                  <Grid.Column width={3}>
                    <Image avatar src={avatar} />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Header as="h5" className="gray">
                      Christine Curtis
                    </Header>
                  </Grid.Column>
                  <Grid.Column width={2} floated="right">
                    <Link to="/" className="lightGray">
                      <Icon name="plus" />
                    </Link>
                  </Grid.Column>
                </Grid.Row>
                <Divider section />
                <Grid.Row columns={2}>
                  <Grid.Column width={3}>
                    <Image avatar src={avatar} />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Header as="h5" className="gray">
                      Rose Wade
                    </Header>
                  </Grid.Column>
                </Grid.Row>
                <Divider section />
                <Grid.Row columns={3}>
                  <Grid.Column width={3}>
                    <Image avatar src={avatar} />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Header as="h5" className="gray">
                      Ryan Thompson
                    </Header>
                  </Grid.Column>
                  <Grid.Column width={2} floated="right">
                    <Link to="/" className="lightGray">
                      <Icon name="plus" />
                    </Link>
                  </Grid.Column>
                </Grid.Row>
                <Divider section />
                <Grid.Row columns={3}>
                  <Grid.Column width={3}>
                    <Image avatar src={avatar} />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Header as="h5" className="gray">
                      Gregory Green
                    </Header>
                  </Grid.Column>
                  <Grid.Column width={2} floated="right">
                    <Link to="/" className="lightGray">
                      <Icon name="plus" />
                    </Link>
                  </Grid.Column>
                </Grid.Row>
                <Divider section />
                <Grid.Row columns={2}>
                  <Grid.Column width={3}>
                    <Image avatar src={avatar} />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Header as="h5" className="gray">
                      Harold Nelson
                    </Header>
                  </Grid.Column>
                </Grid.Row>
                <Divider section />
                <Grid.Row columns={3}>
                  <Grid.Column width={3}>
                    <Image avatar src={avatar} />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Header as="h5" className="gray">
                      Gregory Green
                    </Header>
                  </Grid.Column>
                  <Grid.Column width={2} floated="right">
                    <Link to="/" className="lightGray">
                      <Icon name="plus" />
                    </Link>
                  </Grid.Column>
                </Grid.Row>
                <Divider section />
                <Grid.Row columns={2}>
                  <Grid.Column width={3}>
                    <Image avatar src={avatar} />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Header as="h5" className="gray">
                      Harold Nelson
                    </Header>
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

export default ProfileFour;
