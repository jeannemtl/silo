import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Header } from 'semantic-ui-react';

class StatisticBtns extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Header as="h3" className="uppercase">
              Statistic layouts
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/statistic-one">
              <Button secondary>Statistic 1</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/statistic-two">
              <Button primary>Statistic 2</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/statistic-three">
              <Button secondary>Statistic 3</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/statistic-four">
              <Button primary>Statistic 4</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/statistic-five">
              <Button secondary>Statistic 5</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default StatisticBtns;
