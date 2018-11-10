export default class QueueSong extends Component {
  constructor(props) {}
  render() {
    return (
      <Container
        style={{
          flex: 1,
          backgroundColor: colors.green
        }}
      >
        <Header style={{ paddingTop: -50 }} transparent>
          <Body style={{ paddingTop: -50 }}>
            <Text style={[style.nowPlaying, style.modalTitle]}>
              Queue a song
            </Text>
          </Body>
          <Right>
            <Button
              light
              transparent
              onPress={() =>
                this.setState({
                  qsearchVisible: !this.state.qsearchVisible
                })
              }
            >
              <Icon name="close" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Item rounded>
            <Icon active name="search" />
            <Input placeholder="Search on spotify" />
          </Item>
        </Content>
      </Container>
    );
  }
}
