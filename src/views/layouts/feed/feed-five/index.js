import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Icon, Grid, Header, Image, Menu } from 'semantic-ui-react';
import Slider from 'react-slick';

import avatar from '../../../../assets/images/avatar.png';

import feedOne from '../../../../assets/images/feed-img-one.png';
import feedFour from '../../../../assets/images/feed-img-four.png';

const feedOneBg = {
  backgroundImage: 'url(' + feedOne + ')',
};
const feedFourBg = {
  backgroundImage: 'url(' + feedFour + ')',
};

class FeedFive extends Component {
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
      <Container textAlign="center" className="lightestGray">
        <Segment basic className="thunderDarkGray navbar absolute index3 fullWidth noMargin ">
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

        <Segment basic className="noMargin noPadding contentWrap">
          <Segment basic className="noMargin pBottom0">
            <Segment basic className="noMargin pBottom0">
              <Menu secondary className="thunderMenu">
                <Menu.Item
                  name="public"
                  active={activeItem === 'public'}
                  onClick={this.handleItemClick}
                >
                  <Header as="h5" className="gray">
                    PUBLIC
                  </Header>
                </Menu.Item>
                <Menu.Menu position="right">
                  <Menu.Item
                    name="personal"
                    active={activeItem === 'personal'}
                    onClick={this.handleItemClick}
                  >
                    <Header as="h5" className="gray">
                      PERSONAL
                    </Header>
                  </Menu.Item>
                  <Menu.Item
                    name="world"
                    active={activeItem === 'world'}
                    onClick={this.handleItemClick}
                  >
                    <Header as="h5" className="gray">
                      WORLD
                    </Header>
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            </Segment>
          </Segment>
          <Segment basic className="noMargin pTop0">
            <Segment basic className="noMargin noPadding thunderWhite">
              <Segment basic padded className="noMargin">
                <Grid>
                  <Grid.Row columns={2}>
                    <Grid.Column width={3}>
                      <Segment basic className="noMargin noPadding avatar">
                        <Image src={avatar} />
                      </Segment>
                    </Grid.Column>
                    <Grid.Column width={13}>
                      <Segment basic className="noMargin noPadding textLeft">
                        <Header as="h5" className="lightGray noMargin">
                          <span className="gray">Aidan Pass </span>Mauris non tempor quam, lacinia
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
                        </Header>
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
              <Segment basic className="noPadding">
                <Slider slidesToShow={2} arrows={false}>
                  <Segment basic className="vh22 noMargin noPadding bgCover" style={feedFourBg} />
                  <Segment basic className="vh22 noMargin noPadding bgCover" style={feedOneBg} />
                </Slider>
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
                      <Segment basic className="noMargin noPadding textLeft">
                        <Header as="h5" className="lightGray noMargin">
                          <span className="gray">Hailey Hodges </span>has set a new status
                          <span className="gray">&nbsp; “Make Love, Not War!”</span>
                        </Header>
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={1}>
                    <Grid.Column width={13} floated="right">
                      <Segment basic className="textLeft borderBottomLightGray pLeft0 pRight0">
                        <Header as="h5">
                          <span className="lightGray">
                            <Icon name="clock" className="lightGray" />58 min
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
                      <Segment basic className="noMargin noPadding textLeft">
                        <Header as="h5" className="lightGray noMargin">
                          <span className="gray">Aidan Pass </span>added a new project
                          <span className="gray">&nbsp; Parallax</span>
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
                      <Segment basic className="noMargin noPadding textLeft">
                        <Header as="h5" className="lightGray noMargin">
                          <span className="gray">Aidan Pass </span>commented on{' '}
                          <span className="gray">Morning Ride </span>
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
                        </Header>
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Segment>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default FeedFive;
