import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Header } from 'semantic-ui-react';

class SignupsBtns extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Header as="h3" className="uppercase">
              Signups layouts
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/signups-one">
              <Button primary>Signups 1</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/signups-two">
              <Button secondary>Signups 2</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/signups-three">
              <Button primary>Signups 3</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/signups-four">
              <Button secondary>Signups 4</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/signups-five">
              <Button primary>Signups 5</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default SignupsBtns;
