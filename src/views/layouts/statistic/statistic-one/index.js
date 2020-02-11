import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Icon, Grid, Header, Menu, Image, Divider } from 'semantic-ui-react';

import avatar from '../../../../assets/images/avatar.png';

const DoughnutChart = require('react-chartjs').Doughnut;

const chartDataOne = [
  {
    value: 300,
    color: '#1677CB',
    highlight: '#1677CB',
    label: 'CYCLING',
  },
  {
    value: 150,
    color: '#b9d6ef',
    highlight: '#b9d6ef',
    label: 'ACTIVE TIME',
  },
];
const chartDataTwo = [
  {
    value: 340,
    color: '#444A59',
    highlight: '#444A59',
    label: 'RUNNING',
  },
  {
    value: 150,
    color: '#F2F2F2',
    highlight: '#F2F2F2',
    label: 'ACTIVE TIME',
  },
];

class StatisticOne extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'daily' };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
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
                  STATISTIC
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
          <Segment basic className="noMargin noPadding pTop1em">
            <Segment basic className="vh70 noMargin thunderWhite pTop0">
              <Segment basic className="noMargin pTop0">
                <Menu secondary className="thunderMenuInversed">
                  <Menu.Item
                    name="daily"
                    active={activeItem === 'daily'}
                    onClick={this.handleItemClick}
                  >
                    <Header as="h5" className="gray">
                      DAILY &nbsp;<span className="lightGray">9 SEPT</span>
                    </Header>
                  </Menu.Item>
                  <Menu.Menu position="right">
                    <Menu.Item
                      name="weekly"
                      active={activeItem === 'weekly'}
                      onClick={this.handleItemClick}
                    >
                      <Header as="h5" className="gray">
                        WEEKLY
                      </Header>
                    </Menu.Item>
                    <Menu.Item
                      name="monthly"
                      active={activeItem === 'monthly'}
                      onClick={this.handleItemClick}
                    >
                      <Header as="h5" className="gray">
                        MONTHLY
                      </Header>
                    </Menu.Item>
                  </Menu.Menu>
                </Menu>
              </Segment>

              <Segment basic className="noMargin textLeft">
                <Header as="h5" className="gray">
                  Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a
                  elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa.
                </Header>
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
                  <Grid.Column width={4} className="noPadding">
                    <Segment basic className="textRight">
                      <Header as="h6" className="darkGray">
                        61.64 KM
                      </Header>
                      <Header as="h6" className="darkGray noMargin">
                        3h 24
                      </Header>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column className="noPadding">
                    <Segment basic className="textLeft">
                      <Header as="h6" className="lightGray">
                        CYCLING
                      </Header>
                      <Header as="h6" className="lightGray noMargin">
                        ACTIVE TIME
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
                  <Grid.Column width={4} className="noPadding">
                    <Segment basic className="textRight">
                      <Header as="h6" className="darkGray">
                        3.2 KM
                      </Header>
                      <Header as="h6" className="darkGray noMargin">
                        25M 5
                      </Header>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column className="noPadding">
                    <Segment basic className="textLeft">
                      <Header as="h6" className="lightGray">
                        RUNNING
                      </Header>
                      <Header as="h6" className="lightGray noMargin">
                        ACTIVE TIME
                      </Header>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
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

export default StatisticOne;
