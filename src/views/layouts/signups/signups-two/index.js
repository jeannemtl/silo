import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Button, Icon, Grid, Header, Form, Input } from 'semantic-ui-react';

import headerImg from '../../../../assets/images/header-signups-two.png';

const headerBg = {
  backgroundImage: 'url(' + headerImg + ')',
};

class SignupsTwo extends Component {
  render() {
    return (
      <Container className="white vh" textAlign="center">
        <Segment basic className="navbar absolute index3 fullWidth noMargin transparent">
          <Grid columns="equal" verticalAlign="middle">
            <Grid.Row columns={2}>
              <Grid.Column width={2}>
                <Link to="/" className="darkGray">
                  <Icon name="arrow left" />
                </Link>
              </Grid.Column>
              <Grid.Column width={12} className="centerContent">
                <Header as="h5">SIGN IN</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment
          basic
          className="fullWidth noMargin noPadding overflowHidden bgCover headerSmall"
          style={headerBg}
        />
        <Segment basic className="noMargin textLeft">
          <Form>
            <Grid columns="equal" verticalAlign="middle">
              <Grid.Row columns={2} className="pBottomHalf">
                <Grid.Column width={4}>
                  <Header as="h5" className="lightGray">
                    Full Name
                  </Header>
                </Grid.Column>
                <Grid.Column width={12}>
                  <Input placeholder="full name" className="fullWidth light pLeft0" />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2} className="pTopHalf pBottomHalf">
                <Grid.Column width={4}>
                  <Header as="h5" className="lightGray">
                    Email
                  </Header>
                </Grid.Column>
                <Grid.Column width={12}>
                  <Input placeholder="email" className="fullWidth light pLeft0" />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2} className="pTopHalf pBottomHalf">
                <Grid.Column width={4}>
                  <Header as="h5" className="lightGray">
                    Username
                  </Header>
                </Grid.Column>
                <Grid.Column width={12}>
                  <Input placeholder="username" className="fullWidth light pLeft0" />
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

        <Segment basic className="absolute toBottom fullWidth">
          <Segment basic className="noPadding">
            <Button primary>{'Create Account'}</Button>
          </Segment>
          <Segment basic className="noPadding">
            <Button secondary>{'Sign in'}</Button>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default SignupsTwo;
