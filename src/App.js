import './App.css';
import { Provider } from 'react-redux';
import SignInOutContainer from './container';
import Store from './store';

function App() {
  return (
    <Provider store = {Store}>
      <div className="App">
        <SignInOutContainer />
      </div>
    </Provider>

  );
}

export default App;
