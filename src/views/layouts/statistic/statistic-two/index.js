import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Icon, Grid, Header, Divider } from 'semantic-ui-react';
import Slider from 'react-slick';

const DoughnutChart = require('react-chartjs').Doughnut;

const chartData = [
  {
    value: 200,
    color: '#lightGold',
    highlight: '#lightGold',
    label: 'Calories',
  },
  {
    value: 150,
    color: '#1677CB',
    highlight: '#1677CB',
    label: 'Steps',
  },
  {
    value: 50,
    color: '#DDBA76',
    highlight: '#DDBA76',
    label: 'Distance',
  },
];

class StatisticTwo extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'daily' };
    this.onTabPress = this.onTabPress.bind(this);
  }

  onTabPress(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Container className="vh white" textAlign="center">
        <Segment basic className="vh vw noPadding noMargin bgCover">
          <Segment basic className="navbar absolute index3 fullWidth noMargin thunderLightestGray">
            <Grid columns="equal" verticalAlign="middle">
              <Grid.Row columns={1}>
                <Grid.Column width={2}>
                  <Link to="/" className="darkGray">
                    <Icon name="align left" className="menuIcon" />
                  </Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment basic className="noMargin noPadding contentWrap thunderLightestGray">
            <Segment basic className="noMargin noPadding pBottom5vh">
              <Slider centerMode="true" centerPadding="0" className="tabsSlider" arrows={false}>
                <Segment
                  basic
                  className="noMargin textLeft mRight5"
                  active={activeItem === 'daily'}
                  onClick={() => this.onTabPress('daily')}
                >
                  <Header as="h2" className="darkGray">
                    DAILY
                  </Header>
                  <Segment basic className="separator thunderBlue noMargin noPadding" />
                </Segment>
                <Segment
                  basic
                  className="noMargin textLeft mRight5"
                  active={activeItem === 'weekly'}
                  onClick={() => this.onTabPress('weekly')}
                >
                  <Header as="h2" className="darkGray">
                    WEEKLY
                  </Header>
                  <Segment basic className="separator thunderBlue noMargin noPadding" />
                </Segment>
              </Slider>
            </Segment>
          </Segment>

          <Segment basic className="mTop50">
            <Grid columns={2}>
              <Grid.Row stretched>
                <Grid.Column>
                  <Segment basic className="textLeft">
                    <Header as="h3" className="darkGray noMargin">
                      03:24:19
                    </Header>
                    <Header as="h5" className="mediumGray noMargin">
                      September, 9 2015
                    </Header>
                  </Segment>
                  <Segment basic className="textLeft">
                    <Link to="/" className="darkGray">
                      <Icon name="arrow left" />
                    </Link>
                  </Segment>
                </Grid.Column>
                <Grid.Column className="noPadding">
                  <Segment basic>
                    <DoughnutChart
                      data={chartData}
                      width={160}
                      height={80}
                      options={{
                        maintainAspectRatio: false,
                      }}
                    />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment basic>
            <Segment basic className="thunderLightestGray">
              <Grid columns={2}>
                <Grid.Row stretched>
                  <Grid.Column>
                    <Segment basic className="noMargin textLeft">
                      <Header as="h5" className="darkGray noMargin">
                        1,065
                      </Header>
                      <Header as="h5" className="mediumGray noMargin">
                        Calories Burned
                      </Header>
                    </Segment>
                    <Segment basic className="noMargin textLeft">
                      <Header as="h5" className="darkGray noMargin">
                        10,098
                      </Header>
                      <Header as="h5" className="mediumGray noMargin">
                        Steps
                      </Header>
                    </Segment>
                    <Segment basic className="noMargin textLeft">
                      <Header as="h5" className="darkGray noMargin">
                        61 km
                      </Header>
                      <Header as="h5" className="mediumGray noMargin">
                        Distance
                      </Header>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment basic className="noMargin textLeft">
                      <Header as="h5" className="darkGray noMargin">
                        173 (90%)
                      </Header>
                      <Header as="h5" className="mediumGray noMargin">
                        Average Heart Rate
                      </Header>
                    </Segment>
                    <Segment basic className="noMargin textLeft">
                      <Header as="h5" className="darkGray noMargin">
                        24%
                      </Header>
                      <Header as="h5" className="mediumGray noMargin">
                        Fat Burned
                      </Header>
                    </Segment>
                    <Segment basic className="noMargin textLeft">
                      <Header as="h5" className="darkGray noMargin">
                        6:10 m/km
                      </Header>
                      <Header as="h5" className="mediumGray noMargin">
                        Average Pace
                      </Header>
                    </Segment>
                  </Grid.Column>
                  <Divider vertical className="fullHeight" />
                </Grid.Row>
              </Grid>
            </Segment>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default StatisticTwo;
