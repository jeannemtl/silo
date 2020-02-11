import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Header } from 'semantic-ui-react';

class FeedBtns extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Header as="h3" className="uppercase">
              Feed layouts
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/feed-one">
              <Button secondary>Feed 1</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/feed-two">
              <Button primary>Feed 2</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/feed-three">
              <Button secondary>Feed 3</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/feed-four">
              <Button primary>Feed 4</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/feed-five">
              <Button secondary>Feed 5</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default FeedBtns;
