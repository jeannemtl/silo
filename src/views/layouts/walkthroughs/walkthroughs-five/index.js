import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Segment, Header } from 'semantic-ui-react';

import bgImg from '../../../../assets/images/pattern-walkthrough.png';

class WalkthroughsFive extends Component {
  render() {
    return (
      <Container className="white vh">
        <Segment basic className="noMargin noPadding flexContainer vh">
          <Segment basic className="noMargin noPadding">
            <Segment basic className="noMargin noPadding">
              <Segment basic padded className="thunderBlue fullWidth noMargin">
                <Header as="h5" className="white">
                  Cras quis nulla commodo
                </Header>
              </Segment>
              <Segment basic padded className="thunderDarkGray fullWidth noMargin">
                <Header as="h5" className="white">
                  Mauris tempor
                </Header>
              </Segment>
              <Segment basic padded className="thunderLightestGray fullWidth noMargin">
                <Header as="h5" className="gray">
                  Donec facilisis tortor
                </Header>
              </Segment>
            </Segment>
            <Segment basic className="noMargin noPadding">
              <Segment basic className="noMargin noPadding">
                <Image src={bgImg} size="small" className="mXa" />
              </Segment>
              <Segment basic padded className="fullWidth pTop20vh">
                <Header as="h5" className="lightGray">
                  Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada
                  enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi.
                </Header>
              </Segment>
            </Segment>
          </Segment>

          <Segment basic className="noMargin noPadding flexEnd">
            <Segment basic padded className="fullWidth">
              <Header as="h5" className="lightGray">
                Already have an account?
                <Link to="/"> Sign in</Link>
              </Header>
            </Segment>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default WalkthroughsFive;
