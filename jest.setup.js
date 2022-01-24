import 'jest-styled-components';
import 'jest-styled-components/native';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.useFakeTimers();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));
