import * as React from 'react'
import DemoScreen from './DemoScreen';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';


import themeReducers from './store/reducers/theme';
import AppNavigator from './navigation/AppNavigator';
import apisReducers from './store/reducers/apis';



export interface Props { }
export interface State { }



const rootReducer = combineReducers({
  theme: themeReducers,
  apis: apisReducers
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


export class App extends React.Component<Props, State> {

  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}

