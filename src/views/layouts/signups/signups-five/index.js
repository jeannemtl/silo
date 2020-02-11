import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Button, Icon, Grid, Header, Form, Input } from 'semantic-ui-react';

class SignupsFive extends Component {
  render() {
    return (
      <Container className="white vh" textAlign="center">
        <Segment basic className="navbar absolute index3 fullWidth noMargin transparent">
          <Grid columns="equal" verticalAlign="middle">
            <Grid.Row columns={1}>
              <Grid.Column width={2}>
                <Link to="/" className="white">
                  <Icon name="arrow left" />
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment
          basic
          className="fullWidth thunderBlue noMargin noPadding overflowHidden bgCover headerSmall headerShapesSmall"
        >
          <Segment basic className="absolute fullWidth noMargin noPadding verticalAlign">
            <Header as="h1" className="white">
              THUNDER
            </Header>
          </Segment>
        </Segment>
        <Segment basic className="noMargin textLeft pTop10vh">
          <Form>
            <Grid columns="equal" verticalAlign="middle">
              <Grid.Row columns={2} className="pBottomHalf">
                <Grid.Column width={4}>
                  <Header as="h5" className="lightGray">
                    Email
                  </Header>
                </Grid.Column>
                <Grid.Column width={12}>
                  <Input placeholder="email" className="fullWidth light pLeft0" />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2} className="pTopHalf">
                <Grid.Column width={4}>
                  <Header as="h5" className="lightGray">
                    Password
                  </Header>
                </Grid.Column>
                <Grid.Column width={12}>
                  <Input
                    placeholder="password"
                    type="password"
                    className="fullWidth light pLeft0"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </Segment>

        <Segment basic className="absolute toBottom fullWidth noMargin noPadding">
          <Segment basic className="noPadding noMargin">
            <Button secondary>{'Sign up'}</Button>
          </Segment>
          <Segment basic className="noPadding noMargin">
            <Button primary>{'Sign up via Facebook'}</Button>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default SignupsFive;
