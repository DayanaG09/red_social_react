import { Provider } from 'react-redux';
import store from './redux/store';
import PostContainer from './components/PostContainer';
import './assets/styles/style.css'
import logo from './assets/images/bellota-logo.png';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        
      <header className="app-header">
          <img src={logo} alt="Logo de Bellota" className="app-logo" />
          <h1 className="app-title">Bellota Blog</h1>
        </header>
        <PostContainer />
      </div>
    </Provider>
  );
}

export default App;
