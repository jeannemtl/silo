import React, { Component } from 'react';
import { Container, Grid, Segment, Header, Image } from 'semantic-ui-react';
import headerimg from '../../assets/images/pattern-shapes.png';

import EcommerceBtns from './components/ecommerce-btns';
import FeedBtns from './components/feed-btns';
import MenuBtns from './components/menu-btns';
import ProfileBtns from './components/profile-btns';
import SignupsBtns from './components/signups-btns';
import StatisticBtns from './components/statistic-btns';
import WalkthroughsBtns from './components/walkthorughs-btns';

class Home extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Segment
          basic
          className="fullWidth thunderDarkGray noMargin noPadding overflowHidden headerMedium"
        >
          <Segment basic className="absolute fullWidth noMargin noPadding verticalAlign">
            <Header as="h1" className="white">
              THUNDER
            </Header>
            <Segment basic className="separator thunderWhite noPadding mXa" />
            <Header as="h5" className="white noMargin">
              ALL PAGES
            </Header>
          </Segment>
          <Image src={headerimg} size="medium" className="mXa" />
        </Segment>
        <Segment basic>
          <Grid>
            <Grid.Row columns={1}>
              <Grid.Column>
                <EcommerceBtns />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <FeedBtns />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <MenuBtns />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <ProfileBtns />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <SignupsBtns />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <StatisticBtns />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <WalkthroughsBtns />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

export default Home;
