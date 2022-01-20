import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import SignInOutContainer from './container'
import Store from './store'
import { Switch, Route, Redirect } from 'react-router-dom'
import Patient from './component/Patient'
import Doctor from './component/Doctor'

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Switch>
          <Route exact path="/" component={SignInOutContainer} />
          <Route exact path="/patient" component={Patient} />
          <Route exact path="/doctor" component={Doctor} />
          <Redirect to="/" />
        </Switch>
      </Provider>
    </div>
  )
}

export default App
