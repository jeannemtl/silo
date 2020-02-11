import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Segment, Header, Icon } from 'semantic-ui-react';

import bgImg from '../../../../assets/images/pattern-walkthrough.png';

class WalkthroughsTwo extends Component {
  render() {
    return (
      <Container className="white vh" textAlign="center">
        <Segment basic className="vh borderBlue">
          <Segment basic padded="very" className="fullWidth pTop10vh">
            <Image src={bgImg} size="medium" />
          </Segment>
          <Segment basic className="noMargin">
            <Header as="h2" className="grey">
              Quisque volutpat augue enim, pulvinar.
            </Header>
          </Segment>
          <Segment basic className="absolute toBottom fullWidth l0">
            <Segment basic>
              <Link to="/">
                <Icon as="i" name="arrow right" color="grey" />
              </Link>
            </Segment>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default WalkthroughsTwo;
