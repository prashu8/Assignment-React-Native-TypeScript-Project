import * as React from 'react'
import DemoScreen from './DemoScreen';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import themeReducers from './store/reducers/theme';



export interface Props { }
export interface State { }



const rootReducer = combineReducers({
  theme: themeReducers,
});

const store = createStore(rootReducer);


export class App extends React.Component<Props, State> {

  render() {
    return (
      <Provider store={store}>
        <DemoScreen/>
      </Provider>
    );
  }
}

