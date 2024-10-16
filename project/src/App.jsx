import { Provider } from 'react-redux';
import store from './redux/store';
import PostContainer from './components/PostContainer';
import './assets/styles/style.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostContainer />
      </div>
    </Provider>
  );
}

export default App;
