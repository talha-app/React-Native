import React, { Component } from "react";
import { Body, Button, Card, CardItem, Container, Content, Header, Text, Title } from "native-base";
import { inc, dec, reset, reload } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


class Counter extends Component {
  render() {
    const { count, inc, dec, reset, reload } = this.props;
    return (
      <Container>
        <Header>
          <Body>
            <Title><Text>Title</Text></Title>
          </Body>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Text>
                {count}
              </Text>
            </CardItem>
          </Card>
          <Button block onPress={() => inc()}>
            <Text>Arttır</Text>
          </Button>

          <Button block onPress={() => dec()}>
            <Text>Azalt</Text>
          </Button>

          <Button block onPress={() => reset()}>
            <Text>reset</Text>
          </Button>

          <Button block onPress={() => reload()}>
            <Text>Geri yükle</Text>
          </Button>


        </Content>
      </Container>
    );
  }
}

const mapToStateProps = state => {return {count: state.count}}

const matchDispatchToProps = dispath => bindActionCreators({inc: inc, dec: dec, reset:reset, reload:reload}, dispath)

export default connect(mapToStateProps, matchDispatchToProps)(Counter);
