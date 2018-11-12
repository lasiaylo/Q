import React from "react";
import PropTypes from "prop-types";
import { Container, Content, Text } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import style from "../style/style";
import QButton from "./reuse/QButton";

class Start extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.spotifyInitialized = false;
    this.spotifyLoginButtonWasPressed = this.spotifyLoginButtonWasPressed.bind(this);
  }
  componentDidMount() {
    // initialize Spotify if it hasn't been initialized yet
		if(!Spotify.isInitialized())
		{
			// initialize spotify
			var spotifyOptions = {
				"clientID":"9644c9ae58d4469e8358562fadd90aaf",
				"sessionUserDefaultsKey":"SpotifySession",
				"redirectURL":"examplespotifyapp://auth",
				"scopes":["user-read-private", "user-library-modify", "streaming", "user-read-currently-playing", "playlist-modify-public", "user-modify-playback-state"],
			};
			Spotify.initialize(spotifyOptions).then((loggedIn) => {
				// update UI state
				this.setState({spotifyInitialized: true});
				// handle initialization
				if(loggedIn)
				{
					this.goToPlayer();
				}
			}).catch((error) => {
				Alert.alert("Error", error.message);
			});
		}
		else
		{
			// update UI state
			this.setState((state) => {
				state.spotifyInitialized = true;
				return state;
			});
			// handle logged in
			if(Spotify.isLoggedIn())
			{
				this.navigation.navigate("Choose");
			}
		}
  }
  spotifyLoginButtonWasPressed()
	{
		// log into Spotify
		Spotify.login().then((loggedIn) => {
			if(loggedIn)
			{
				// logged in
				this.navigation.navigate("Choose");
			}
			else
			{
				// cancelled
			}
		}).catch((error) => {
			// error
			Alert.alert("Error", error.message);
		});
	}
  render() {
    return (<Container>
      <Content>
        <Grid style={style.fs}>
          <Row style={style.titleRow} size={1.75}>
            <Text style={style.titleText}> aux </Text>
          </Row>
          <Row style={style.titleRow} size={1}>
            <Grid>
              <Row style={style.subRow} size={1}>
                <Text style={style.subText}>shared</Text>
              </Row>
              <Row style={style.subRow} size={1}>
                <Text style={style.subText}>listening</Text>
              </Row>
              <Row style={[style.subRow, style.lastRow]} size={1}>
                <Text style={style.subText}>experiences</Text>
              </Row>
            </Grid>
          </Row>
          <Row
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center"
            }}
            size={1.75}
          >
            <QButton
              width={250}
              onPress={this.spotifyLoginButtonWasPressed}
              type="green"
            >
              sign in with spotify
            </QButton>
          </Row>
        </Grid>
      </Content>
    </Container>);
  }
}

Start.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Start;
