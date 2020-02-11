import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Icon, Grid, Header, Menu, Image } from 'semantic-ui-react';

import avatar from '../../../../assets/images/avatar.png';
import feedOne from '../../../../assets/images/feed-img-one.png';
import feedTwo from '../../../../assets/images/feed-img-two.png';
import feedThree from '../../../../assets/images/feed-img-three.png';
import feedFour from '../../../../assets/images/feed-img-four.png';

const feedOneBg = {
  backgroundImage: 'url(' + feedOne + ')',
};
const feedTwoBg = {
  backgroundImage: 'url(' + feedTwo + ')',
};
const feedThreeBg = {
  backgroundImage: 'url(' + feedThree + ')',
};
const feedFourBg = {
  backgroundImage: 'url(' + feedFour + ')',
};

class FeedFour extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'allfeed' };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Container textAlign="center" className="lightestGray">
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
            className="fullWidth thunderBlue noMargin noPadding overflowHidden bgCover headerSmall headerShapes"
          >
            <Segment basic className="absolute toBottom fullWidth">
              <Menu secondary className="thunderMenu">
                <Menu.Item
                  name="allfeed"
                  active={activeItem === 'allfeed'}
                  onClick={this.handleItemClick}
                >
                  <Header as="h5" className="white">
                    ALL FEED
                  </Header>
                </Menu.Item>
                <Menu.Menu position="right">
                  <Menu.Item
                    name="popular"
                    active={activeItem === 'popular'}
                    onClick={this.handleItemClick}
                  >
                    <Header as="h5" className="white">
                      POPULAR
                    </Header>
                  </Menu.Item>
                  <Menu.Item
                    name="photos"
                    active={activeItem === 'photos'}
                    onClick={this.handleItemClick}
                  >
                    <Header as="h5" className="white">
                      PHOTOS
                    </Header>
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            </Segment>
          </Segment>

          <Segment basic className="noMargin noPadding">
            <Grid columns="equal" verticalAlign="middle">
              <Grid.Row columns={2} className="noPadding">
                <Grid.Column width={8} className="noPadding">
                  <Segment basic className="noMargin noPadding">
                    <Segment basic className="vh30 bgCover noMargin noPadding" style={feedFourBg} />
                  </Segment>
                </Grid.Column>
                <Grid.Column width={8} className="noPadding">
                  <Segment basic className="noMargin noPadding">
                    <Segment basic className="vh30 bgCover noMargin noPadding" style={feedOneBg} />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={1} className="noPadding">
                <Grid.Column width={16} className="noPadding">
                  <Segment basic className="noMargin noPadding">
                    <Segment basic className="vh30 bgCover noMargin noPadding" style={feedTwoBg} />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Segment basic>
              <Segment basic padded className="noMargin thunderWhite pTop0">
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
                          <span className="gray">Aidan Pass </span>Mauris non tempor quam, et
                          lacinia sapien. Mauris accumsan eros.
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
                          </span>&nbsp;&nbsp;
                          <span className="lightGray">
                            <Icon name="heart" className="lightGray" />2,435
                          </span>
                        </Header>
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Segment>

            <Grid columns="equal" verticalAlign="middle">
              <Grid.Row columns={1} className="noPadding">
                <Grid.Column width={16} className="noPadding">
                  <Segment basic className="noMargin noPadding">
                    <Segment
                      basic
                      className="vh30 bgCover noMargin noPadding"
                      style={feedThreeBg}
                    />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default FeedFour;
