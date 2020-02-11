import React, { Component } from 'react';
import { Container, Image, Button, Segment, Header } from 'semantic-ui-react';

import logo from '../../../../assets/images/logo-dark.png';

class WalkthroughsThree extends Component {
  render() {
    return (
      <Container className="darkGray vh" textAlign="center">
        <Segment basic className="fullWidth pTop20vh">
          <Image src={logo} size="mini" centered />
        </Segment>
        <Segment basic padded="very" className="mTop50">
          <Header as="h3" className="white">
            Quisque volutpat augue enim, pulvinar.
          </Header>
        </Segment>
        <Segment basic className="mTop50">
          <Header as="h6" className="white">
            3 / 5
          </Header>
        </Segment>
        <Segment basic className="noMargin noPadding absolute toBottom fullWidth">
          <Button primary>{'Login with Facebook'}</Button>
          <Button className="inverted blue">{'Login with email'}</Button>
        </Segment>
      </Container>
    );
  }
}

export default WalkthroughsThree;
