import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/App';
import ErrorBoundry from './components/error-boundry/error-boundry';
import ChartService from './services/chart-service';
import { ChartServiceProvider } from './components/chart-service-context';
import store from './store';
import "./index.css";

const chartService = new ChartService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ChartServiceProvider value={chartService}>
        <Router>
          <App />
        </Router>
      </ChartServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
