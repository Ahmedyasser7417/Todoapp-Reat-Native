import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './src/store/store';
import { loadTodosAsync } from './src/store/asyncActions';
import MainNavigator from './navigation/MainNavigator';

const ReduxLoader = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTodosAsync());
  }, [dispatch]);
  return children;
};

export default function App() {
  return (
    <Provider store={store}>
      <ReduxLoader>
        <MainNavigator />
      </ReduxLoader>
    </Provider>
  );
}


