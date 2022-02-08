import React from 'react';
import {Provider} from 'react-redux';

import RootNavigation from './src/navigator/RootNavigation';
import { store } from "./src/redux";

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
