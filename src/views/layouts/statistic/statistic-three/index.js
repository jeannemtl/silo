import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Icon, Grid, Header, Divider } from 'semantic-ui-react';

import chart from '../../../../assets/images/chart.png';

const chartBg = {
  backgroundImage: 'url(' + chart + ')',
};

const DoughnutChart = require('react-chartjs').Doughnut;

const chartData = [
  {
    value: 200,
    color: '#444A59',
    highlight: '#444A59',
    label: 'Inactive',
  },
  {
    value: 150,
    color: '#1677CB',
    highlight: '#1677CB',
    label: 'Middle',
  },
  {
    value: 50,
    color: '#DDBA76',
    highlight: '#DDBA76',
    label: 'Active',
  },
];

class StatisticThree extends Component {
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
                  DAILY
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
          <Segment basic className="noMargin pTop5vh pBottom0">
            <Grid columns={2}>
              <Grid.Row stretched>
                <Grid.Column>
                  <Segment basic className="textLeft">
                    <Header as="h5" className="darkGray noMargin">
                      20%
                    </Header>
                    <Header as="h5" className="mediumGray noMargin">
                      Inactive Time
                    </Header>
                  </Segment>
                  <Segment basic className="textLeft">
                    <Header as="h5" className="darkGray noMargin">
                      15%
                    </Header>
                    <Header as="h5" className="mediumGray noMargin">
                      Middle Active
                    </Header>
                  </Segment>
                  <Segment basic className="textLeft">
                    <Header as="h5" className="darkGray noMargin">
                      65%
                    </Header>
                    <Header as="h5" className="mediumGray noMargin">
                      Active Time
                    </Header>
                  </Segment>
                </Grid.Column>
                <Grid.Column className="noPadding">
                  <Segment basic className="textLeft">
                    <Header as="h5" className="mediumGray noMargin">
                      September 9, 2015
                      <span className="toRight">
                        {' '}
                        <Icon name="arrow right" className="darkGray" />
                      </span>
                    </Header>
                  </Segment>
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

          <Segment basic className="noMargin">
            <Segment basic className="noMargin noPadding">
              <Segment basic className="noPadding absolute fullWidth toBottom">
                <Segment basic className="vh12 noMargin noPadding bgCover" style={chartBg} />
              </Segment>
              <Segment basic className="noPadding">
                <Segment basic padded className="textLeft absolute index1 l3 t1">
                  <Header as="h5" className="darkGray">
                    200 MAX EL
                  </Header>
                  <Segment basic className="separator thunderLightGray noPadding noMargin" />
                </Segment>
                <Segment basic padded className="textLeft absolute index1 toBottom r3">
                  <Header as="h5" className="darkGray">
                    34 MIN EL
                  </Header>
                  <Segment basic className="separator thunderLightGray noPadding noMargin" />
                </Segment>
                <Grid columns="equal" verticalAlign="middle">
                  <Grid.Row columns={2}>
                    <Grid.Column width={6} className="pRight0">
                      <Segment basic className="vh25 noPadding noMargin thunderGoldOpaq8" />
                    </Grid.Column>
                    <Grid.Column width={10} className="pLeft0">
                      <Segment basic className="vh25 noPadding noMargin thunderLightestGrayOpaq8" />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Segment>
          </Segment>

          <Segment basic className="noPading mTop50 textLeft">
            <Header as="h5" className="lightGray">
              365 CALORIES
              <span className="gold toRight">&#9679;</span>
            </Header>
            <Divider />
            <Header as="h5" className="lightGray">
              61 KM DISTANCE
              <span className="gold toRight">&#9679;</span>
              <span className="gold toRight">&#9679;</span>
            </Header>
            <Divider />
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default StatisticThree;
