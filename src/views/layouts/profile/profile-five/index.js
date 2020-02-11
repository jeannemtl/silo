import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Icon, Grid, Header, Menu, Image, Divider } from 'semantic-ui-react';
import Slider from 'react-slick';

import avatar from '../../../../assets/images/avatar.png';

const DoughnutChart = require('react-chartjs').Doughnut;

const chartDataOne = [
  {
    value: 300,
    color: '#DDBA76',
    highlight: '#DDBA76',
    label: 'FOLLOWERS',
  },
  {
    value: 150,
    color: '#f4ead5',
    highlight: '#f4ead5',
    label: 'FOLLOWING',
  },
];
const chartDataTwo = [
  {
    value: 320,
    color: '#444A59',
    highlight: '#444A59',
    label: 'PROJECT VIEWS',
  },
  {
    value: 130,
    color: '#F2F2F2',
    highlight: '#F2F2F2',
    label: 'LIKES',
  },
];

class ProfileThree extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'info' };
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Container textAlign="center" className="darkGray minHeightVH">
        <Segment basic className="thunderDarkGray navbar absolute index3 fullWidth noMargin">
          <Grid columns="equal" verticalAlign="middle">
            <Grid.Row columns={3}>
              <Grid.Column width={2}>
                <Link to="/" className="white">
                  <Icon name="arrow left" className="menuIcon" />
                </Link>
              </Grid.Column>
              <Grid.Column width={12} className="centerContent">
                <Header as="h5" className="white">
                  PROFILE
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

        <Segment basic className="noMargin contentWrap">
          <Segment basic className="noMargin pTop1em">
            <Slider centerMode="true" centerPadding="0" arrows={false}>
              <Segment basic className="noPadding">
                <Segment basic className="vh50 noMargin thunderWhite pTop0">
                  <Segment basic className="noMargin pTop0">
                    <Menu secondary className="thunderMenuInversed">
                      <Menu.Item name="info" active={activeItem === 'info'}>
                        <Header as="h5" className="gray">
                          INFO
                        </Header>
                      </Menu.Item>
                    </Menu>
                  </Segment>

                  <Grid columns="equal" verticalAlign="middle">
                    <Grid.Row columns={3}>
                      <Grid.Column className="noPadding">
                        <DoughnutChart
                          data={chartDataOne}
                          width={140}
                          height={70}
                          options={{
                            maintainAspectRatio: false,
                          }}
                        />
                      </Grid.Column>
                      <Grid.Column className="noPadding">
                        <Segment basic className="textRight">
                          <Header as="h6" className="darkGray">
                            12,678
                          </Header>
                          <Header as="h6" className="darkGray noMargin">
                            120
                          </Header>
                        </Segment>
                      </Grid.Column>
                      <Grid.Column className="noPadding">
                        <Segment basic className="textLeft">
                          <Header as="h6" className="lightGray">
                            FOLLOWERS
                          </Header>
                          <Header as="h6" className="lightGray noMargin">
                            FOLLOWING
                          </Header>
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                    <Divider section />
                    <Grid.Row columns={3}>
                      <Grid.Column className="noPadding">
                        <DoughnutChart
                          data={chartDataTwo}
                          width={140}
                          height={70}
                          options={{
                            maintainAspectRatio: false,
                          }}
                        />
                      </Grid.Column>
                      <Grid.Column className="noPadding">
                        <Segment basic className="textRight">
                          <Header as="h6" className="darkGray">
                            15,890
                          </Header>
                          <Header as="h6" className="darkGray noMargin">
                            897
                          </Header>
                        </Segment>
                      </Grid.Column>
                      <Grid.Column className="noPadding">
                        <Segment basic className="textLeft">
                          <Header as="h6" className="lightGray">
                            PROJECT VIEWS
                          </Header>
                          <Header as="h6" className="lightGray noMargin">
                            LIKES
                          </Header>
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                    <Divider section />
                    <Segment basic padded className="textLeft">
                      <Header as="h6" className="gray">
                        Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a
                        elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa.
                      </Header>
                    </Segment>
                  </Grid>
                </Segment>
              </Segment>
            </Slider>
          </Segment>
          <Segment basic className="noMargin textLeft">
            <Segment basic className="noPadding">
              <Segment basic className="noPadding avatar">
                <Image src={avatar} className="mXa" />
              </Segment>
              <Segment basic className="separatorLg thunderBlue noPadding noMargin" />
            </Segment>
            <Segment basic>
              <Grid columns="equal" verticalAlign="middle">
                <Grid.Row columns={2} className="noPadding">
                  <Grid.Column width={14} className="noPadding">
                    <Header as="h1" className="white">
                      Rachel Gilbert
                    </Header>
                  </Grid.Column>
                  <Grid.Column width={2} floated="right" className="noPadding">
                    <Segment basic className="squareM thunderGold centerContent">
                      <Icon name="plus" className="white" />
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

export default ProfileThree;
