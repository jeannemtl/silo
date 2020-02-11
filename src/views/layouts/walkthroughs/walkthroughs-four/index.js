import React, { Component } from 'react';
import { Container, Image, Button, Segment, Header, Grid } from 'semantic-ui-react';

import bgImg from '../../../../assets/images/pattern-walkthrough.png';

class WalkthroughsFour extends Component {
  render() {
    return (
      <Container className="white vh" textAlign="center">
        <Segment basic className="relative fullWidth pTop10vh h60">
          <Segment className="vw50 vh35 absolute index1 l40 mTop50 rotateLeft" />
          <Segment className="vw50 vh45 absolute noPadding overflowHidden centered index3">
            <Image src={bgImg} size="medium" />
          </Segment>
          <Segment className="vw50 vh35 absolute index1 r40 mTop50 rotateRight" />
        </Segment>
        <Segment basic padded="very" className="noMargin">
          <Header as="h4" className="lightGray">
            Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin.
          </Header>
        </Segment>
        <Segment basic className="absolute toBottom fullWidth">
          <Segment basic className="noPadding">
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column className="pRightHalf">
                  <Button primary>{'Sign in'}</Button>
                </Grid.Column>
                <Grid.Column className="pLeftHalf">
                  <Button secondary>{'Sign up'}</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default WalkthroughsFour;
