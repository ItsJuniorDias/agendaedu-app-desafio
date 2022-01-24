import React from 'react';
import { Dictionary } from './types';

const iconsDictionary: Dictionary = {
  Feather: require('react-native-vector-icons/Feather').default,
  Ionicons: require('react-native-vector-icons/Ionicons').default,
  MaterialCommunityIcons: require('react-native-vector-icons/MaterialCommunityIcons')
    .default,
};

const index = ({ ...props }: any, lib: string) => {
  const IconComp = iconsDictionary[lib];

  return <IconComp {...props} />;
};

export default index;
