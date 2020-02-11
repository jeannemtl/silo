import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Icon, Grid, Header, Image, Menu } from 'semantic-ui-react';

import map from '../../../../assets/images/map-usa.png';

const BarChart = require('react-chartjs').Bar;

const chartData = {
  labels: ['2/18', '2/20', '2/22', '2/24', '2/26', '2/28'],
  datasets: [
    {
      label: 'My First dataset',
      fillColor: '#1677CB',
      highlightFill: 'rgba(220,220,220,0.75)',
      highlightStroke: 'rgba(220,220,220,1)',
      data: [1, 20, 78, 81, 25, 30],
    },
  ],
};

const chartOptions = {
  scaleShowGridLines: false,
  barShowStroke: false,
  barValueSpacing: 10,
  maintainAspectRatio: false,
};

class StatisticFive extends Component {
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
          <Segment basic padded className="noMargin pTop5vh">
            <Menu secondary className="thunderMenu">
              <Menu.Item
                name="daily"
                active={activeItem === 'daily'}
                onClick={this.handleItemClick}
              >
                <Header as="h5" className="gray">
                  DAILY <span className="lightGray">9 SEPT</span>
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
          <Segment basic className="noMargin">
            <Segment basic padded="very" className="noMargin">
              <Image src={map} size="medium" className="mXa" />
            </Segment>
          </Segment>
          <Segment basic className="noMargin noPadding">
            <BarChart data={chartData} options={chartOptions} width={320} height={160} />
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default StatisticFive;
