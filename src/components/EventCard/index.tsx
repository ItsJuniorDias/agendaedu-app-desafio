import React from 'react';

import {
  Container,
  EventImage,
  Gradient,
  DetailsContainer,
  Category,
  Title,
  Calendar,
  Infos,
} from './styles';
import { Event } from './types';

const EventCard = ({ item }: { item: Event }) => {
  return (
    <Container>
      <EventImage
        resizeMethod="resize"
        resizeMode="cover"
        source={{ uri: item.image_url }}
      />
      <Gradient>
        <DetailsContainer>
          <Category>{item.category}</Category>
          <Title>{item.title}</Title>
          <Infos>
            <Calendar /> {item.info}
          </Infos>
        </DetailsContainer>
      </Gradient>
    </Container>
  );
};

export default EventCard;
