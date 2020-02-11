import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Header } from 'semantic-ui-react';

class ProfileBtns extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Header as="h3" className="uppercase">
              Profile layouts
            </Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/profile-one">
              <Button secondary>Profile 1</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/profile-two">
              <Button primary>Profile 2</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/profile-three">
              <Button secondary>Profile 3</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/profile-four">
              <Button primary>Profile 4</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="pTopHalf pBottomHalf">
          <Grid.Column>
            <Link to="/profile-five">
              <Button secondary>Profile 5</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ProfileBtns;
