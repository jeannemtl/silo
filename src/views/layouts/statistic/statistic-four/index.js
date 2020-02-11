import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Icon, Grid, Header, Divider } from 'semantic-ui-react';

import chart from '../../../../assets/images/chart.png';

const chartBg = {
  backgroundImage: 'url(' + chart + ')',
};

const PieChart = require('react-chartjs').Pie;

const chartData = [
  {
    value: 370,
    color: '#1677CB',
    highlight: '#1677CB',
    label: 'Earned',
  },
  {
    value: 80,
    color: '#F2F2F2',
    highlight: '#F2F2F2',
    label: 'Spent',
  },
];

class StatisticFour extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Segment basic className="thunderDarkGray navbar absolute index3 fullWidth noMargin">
          <Grid columns="equal" verticalAlign="middle">
            <Grid.Row columns={3}>
              <Grid.Column width={2}>
                <Link to="/" className="white">
                  <Icon name="arrow left" />
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

        <Segment basic className="noMargin noPadding contentWrap">
          <Segment basic padded className="noMargin pTop5vh pBottom0">
            <Segment basic className="textLeft">
              <Header as="h5" className="lightGray">
                9 SEPTEMBER
                <span className="toRight">
                  <Icon name="calendar outline" className="lightGray" />
                </span>
              </Header>
            </Segment>
          </Segment>
          <Segment basic className="noMargin">
            <Segment basic className="noMargin noPadding">
              <Segment basic className="noPadding absolute fullWidth toBottom">
                <Segment basic className="vh12 noMargin noPadding bgCover" style={chartBg} />
              </Segment>
              <Segment basic className="noPadding">
                <Grid columns="equal" verticalAlign="middle">
                  <Grid.Row columns={2}>
                    <Grid.Column width={8} className="pRight0">
                      <Segment basic className="vh25 noPadding noMargin thunderBlueOpaq8">
                        <Segment basic padded className="textLeft">
                          <Header as="h5" className="white noMargin">
                            Total earn
                          </Header>
                          <Header as="h5" className="white noMargin">
                            $478,678
                          </Header>
                        </Segment>
                      </Segment>
                    </Grid.Column>
                    <Grid.Column width={8} className="pLeft0">
                      <Segment basic className="vh25 noPadding noMargin thunderLightestGrayOpaq8">
                        <Segment basic padded className="textLeft">
                          <Header as="h5" className="mediumGray noMargin">
                            Total spent
                          </Header>
                          <Header as="h5" className="gray noMargin">
                            $13,245
                          </Header>
                        </Segment>
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Segment>
          </Segment>

          <Segment basic className="noPading mTop50">
            <Grid columns="equal" verticalAlign="middle" className="thunderList">
              <Grid.Row columns={3}>
                <Grid.Column width={4}>
                  <PieChart
                    data={chartData}
                    width={60}
                    height={30}
                    options={{
                      maintainAspectRatio: false,
                    }}
                  />
                </Grid.Column>
                <Grid.Column width={5} floated="right" className="noPadding">
                  <Segment basic className="noMargin noPadding textRight">
                    <Header as="h5" className="gray">
                      + $9,789
                    </Header>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={5} floated="right">
                  <Segment basic className="noMargin noPadding">
                    <Header as="h5" className="lightGray">
                      1ST DAY
                    </Header>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Divider />
              <Grid.Row columns={3}>
                <Grid.Column width={4}>
                  <PieChart
                    data={chartData}
                    width={60}
                    height={30}
                    options={{
                      maintainAspectRatio: false,
                    }}
                  />
                </Grid.Column>
                <Grid.Column width={5} floated="right" className="noPadding">
                  <Segment basic className="noMargin noPadding textRight">
                    <Header as="h5" className="gray">
                      + $5,235
                    </Header>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={5} floated="right">
                  <Segment basic className="noMargin noPadding">
                    <Header as="h5" className="lightGray">
                      1ST WEEK
                    </Header>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Divider />
              <Grid.Row columns={3}>
                <Grid.Column width={4}>
                  <PieChart
                    data={chartData}
                    width={60}
                    height={30}
                    options={{
                      maintainAspectRatio: false,
                    }}
                  />
                </Grid.Column>
                <Grid.Column width={5} floated="right" className="noPadding">
                  <Segment basic className="noMargin noPadding textRight">
                    <Header as="h5" className="gray">
                      + $29,744
                    </Header>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={5} floated="right">
                  <Segment basic className="noMargin noPadding">
                    <Header as="h5" className="lightGray">
                      2ND WEEK
                    </Header>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Divider />
              <Grid.Row columns={3}>
                <Grid.Column width={4}>
                  <PieChart
                    data={chartData}
                    width={60}
                    height={30}
                    options={{
                      maintainAspectRatio: false,
                    }}
                  />
                </Grid.Column>
                <Grid.Column width={5} floated="right" className="noPadding">
                  <Segment basic className="noMargin noPadding textRight">
                    <Header as="h5" className="gray">
                      + $9,783
                    </Header>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={5} floated="right">
                  <Segment basic className="noMargin noPadding">
                    <Header as="h5" className="lightGray">
                      3RD WEEK
                    </Header>
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

export default StatisticFour;
