import React from 'react';
import routes from './routes/index.jsx'
import { HashRouter } from 'react-router-dom'
import { GlobalStyle } from './style'
import { IconStyle } from './assets/iconfont/iconfont'
import { renderRoutes } from 'react-router-config';
import store from './store/index'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
