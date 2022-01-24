import React from 'react';
import { Alert } from 'react-native';

import {
  Container,
  Content,
  Header,
  Footer,
  IconCard,
  Counter,
  Title,
} from './styles';
import { Options } from './types';

const OptionsCard = ({ item }: { item: Options }) => {
  const alertTitle = () => Alert.alert(item.title);

  return (
    <Container onPress={alertTitle}>
      <Content>
        <Header>
          <IconCard lib={item.icon.lib} name={item.icon.name} />
          {!!item.counter && <Counter>{item.counter}</Counter>}
        </Header>
        <Footer>
          <Title>{item.title}</Title>
        </Footer>
      </Content>
    </Container>
  );
};

export default OptionsCard;
