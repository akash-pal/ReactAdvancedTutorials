import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { worker } from "./mocks/browser";
import RootReducer from "./store/reducers/rootReducer";
import { watchIncrement } from "./store/saga";
import "./styles.css";
import Main from "./Main";
import Ref from "./Ref";
import Hoc from "./Components/HOC";
import User from "./Components/User";
import Hooks from "./Components/Hooks";
import ReduxHooks from "./Components/ReduxHooks";
import ReduxThunk from "./Components/ReduxThunk";
import ReduxSaga from "./Components/ReduxSaga";
import ReactClone from "./Components/ReactClone";
import ErrorBoundary from "./ErrorBoundary";
import CurrencyConverter from "./CurrencyConverter";
import { ThemeContent, theme } from "./theme-context";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === theme.dark ? theme.light : theme.dark
      }));
    };

    this.state = {
      theme: theme.dark,
      toggleTheme: this.toggleTheme
    };
    worker.start();
  }

  render() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
      RootReducer,
      applyMiddleware(thunk, sagaMiddleware, logger)
    );
    sagaMiddleware.run(watchIncrement);

    return (
      <Provider store={store}>
        <div className="App">
          <ThemeContent.Provider value={this.state}>
            <BrowserRouter>
              <ul>
                <li>
                  <Link to="/home">Main</Link>
                </li>
                <li>
                  <Link to="/renderProps">Render props</Link>
                </li>
                <li>
                  <Link to="/hoc">Higher Order Component</Link>
                </li>
                <li>
                  <Link to="/user/Akash/Pal">User</Link>
                </li>
                <li>
                  <Link to="/ref">Ref and Forward Ref</Link>
                </li>
                <li>
                  <Link to="/hooks">Hooks Lifecycle</Link>
                </li>
                <li>
                  <Link to="/reduxHooks">Redux Hooks</Link>
                </li>
                <li>
                  <Link to="/reduxThunk">Redux Thunk</Link>
                </li>
                <li>
                  <Link to="/reduxSaga">Redux Saga</Link>
                </li>
                <li>
                  <Link to="/reactClone">React Clone</Link>
                </li>
              </ul>
              <ErrorBoundary>
                <Switch>
                  <Route
                    exact
                    path="/home"
                    component={() => <Main age={27} />}
                  />
                  <Route
                    exact
                    path="/renderProps"
                    component={CurrencyConverter}
                  />
                  <Route exact path="/hoc" component={Hoc} />
                  <Route exact path="/ref" component={Ref} />
                  <Route exact path="/hooks" component={Hooks} />
                  <Route exact path="/reduxHooks" component={ReduxHooks} />
                  <Route exact path="/reduxThunk" component={ReduxThunk} />
                  <Route exact path="/reduxSaga" component={ReduxSaga} />
                  <Route exact path="/reactClone" component={ReactClone} />
                  <Route
                    exact
                    path="/user/:firstName/:lastName"
                    component={User}
                  />
                </Switch>
              </ErrorBoundary>
            </BrowserRouter>
          </ThemeContent.Provider>
        </div>
      </Provider>
    );
  }
}
