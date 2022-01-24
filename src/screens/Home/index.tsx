import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import EventCard from '../../components/EventCard';
import { Event } from '../../components/EventCard/types';
import OptionsCard from '../../components/OptionsCard';
import { Options } from '../../components/OptionsCard/types';
import ShortcutCard from '../../components/ShortcutCard';
import { user, events, options, shortcuts } from '../../database';

import {
  Container,
  Switch,
  StatusBar,
  Main,
  AvatarContainer,
  UserAvatar,
  UserName,
  Suggestion,
  IndicatorsContainer,
  Indicators,
  OptionsList,
  ShortcutsContainer,
  ShortcutContent,
  ShortcutTitle,
  ShortcutsList,
} from './styles';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);

const Home = () => {
  const dispatch = useDispatch();
  const theme = useSelector(({ MainReducer }) => MainReducer.theme);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [avatarHeight, setAvatarHeight] = useState<number>(0);

  const handleTheme = (newTheme: string) => {
    dispatch({
      type: 'SAGA.THEME.CHANGE',
      theme: newTheme === 'dark' ? 'light' : 'dark',
    });
  };

  const onLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setAvatarHeight(height);
  };

  const renderEvent = ({ item }: { item: Event }) => <EventCard item={item} />;

  const indicators = () => {
    return (
      <Indicators
        dotsLength={events.length}
        activeDotIndex={activeSlideIndex}
      />
    );
  };

  const renderOption = ({ item }: { item: Options }) => (
    <OptionsCard item={item} />
  );

  const renderShortcut = ({ item }: { item: string }) => (
    <ShortcutCard image_url={item} />
  );

  return (
    <Container>
      <StatusBar />
      <Switch
        trackColor={{ false: '#454545', true: '#F1EBFB' }}
        thumbColor={theme === 'dark' ? '#454545' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => handleTheme(theme)}
        value={theme === 'dark'}
      />
      <Main>
        <AvatarContainer
          onLayout={onLayout}
          style={{ marginTop: -(avatarHeight / 2) }}>
          <UserAvatar
            source={{
              uri: user.image_url,
            }}
            resizeMethod="resize"
            resizeMode="cover"
          />
        </AvatarContainer>
        <UserName>Olá, {user.name} 👋</UserName>
        <Suggestion>Confira a sua agenda de hoje!</Suggestion>

        <Carousel
          data={events}
          renderItem={renderEvent}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={(index) => setActiveSlideIndex(index)}
        />
        <IndicatorsContainer>{indicators()}</IndicatorsContainer>
      </Main>

      <OptionsList
        data={options}
        keyExtractor={(_, index) => String(index)}
        renderItem={renderOption}
      />

      <ShortcutsContainer>
        <ShortcutContent>
          <ShortcutTitle>Acessos rápidos ⭐</ShortcutTitle>
          <ShortcutsList
            data={shortcuts}
            keyExtractor={(_, index) => String(index)}
            renderItem={renderShortcut}
          />
        </ShortcutContent>
      </ShortcutsContainer>
    </Container>
  );
};

export default Home;
