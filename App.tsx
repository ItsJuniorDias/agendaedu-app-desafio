import 'react-native-gesture-handler';
import React from 'react';
import Route from './src/routes';
import GlobalContext from './src/contexts/';
const App = () => {
  return (
    <GlobalContext>
      <Route />
    </GlobalContext>
  );
};

export default App;
