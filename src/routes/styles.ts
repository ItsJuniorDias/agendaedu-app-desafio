import styled from 'styled-components/native';
import { Icon } from '../components/Global';
import { s } from 'react-native-size-matters';
import { rp } from '../utils';

export const IconContainer = styled.View<{ focused: boolean }>`
  width: 100px;
  justify-content: center;
  align-items: center;
`;

export const IconCard = styled((props) => Icon(props, props.lib)).attrs(
  ({ theme, focused }) => ({
    color: focused ? theme.primary : theme.subTitle,
  }),
)<{ focused: boolean }>`
  font-size: ${rp(s(24), 32)}px;
  padding: ${rp(s(4), 12)}px ${rp(s(10), 18)}px;
  border-radius: ${s(4)}px;
  background-color: ${({ theme, focused }) =>
    focused ? theme.backgroundCard : 'transparent'};
`;
