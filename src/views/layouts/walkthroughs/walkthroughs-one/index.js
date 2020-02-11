import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Button, Segment, Header } from 'semantic-ui-react';

import bgImg from '../../../../assets/images/pattern-shapes.png';

class WalkthroughsOne extends Component {
  render() {
    return (
      <Container className="blue vh" textAlign="center">
        <Segment basic className="absolute toTop fullWidth pTop20vh">
          <Image src={bgImg} size="medium" />
        </Segment>
        <Segment basic padded="very" className="noMargin pTop30vh">
          <Header as="h2" className="white">
            Quisque volutpat augue enim, pulvinar.
          </Header>
        </Segment>
        <Segment basic className="absolute toBottom fullWidth">
          <Segment basic>
            <Button className="inverted blue">{"Let's start"}</Button>
            <Header as="h5" className="white">
              Already have an account?
              <Link to="/" className="white underline">
                {' '}
                Sign in
              </Link>
            </Header>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default WalkthroughsOne;
