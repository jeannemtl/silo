import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Header } from 'semantic-ui-react';

class WalkthroughsBtns extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Header as="h3" className="uppercase">
              Walkthroughs layouts
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/walkthroughs-one">
              <Button primary>Walkthroughs 1</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/walkthroughs-two">
              <Button secondary>Walkthroughs 2</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/walkthroughs-three">
              <Button primary>Walkthroughs 3</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/walkthroughs-four">
              <Button secondary>Walkthroughs 4</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/walkthroughs-five">
              <Button primary>Walkthroughs 5</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default WalkthroughsBtns;
