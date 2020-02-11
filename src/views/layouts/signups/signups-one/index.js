import React, { Component } from 'react';
import { Container, Segment, Button, Grid } from 'semantic-ui-react';

import signupsPic from '../../../../assets/images/ecommerce-product-six.png';

const bgImg = {
  backgroundImage: 'url(' + signupsPic + ')',
};

class SignupsOne extends Component {
  render() {
    return (
      <Container className="white vh" textAlign="center">
        <Segment basic className="fullWidth vh bgCover noMargin" style={bgImg} />
        <Segment basic className="absolute toBottom fullWidth">
          <Segment basic className="noPadding">
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column className="pRightHalf">
                  <Button primary>{'Log in'}</Button>
                </Grid.Column>
                <Grid.Column className="pLeftHalf">
                  <Button secondary>{'Take a tour'}</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default SignupsOne;
