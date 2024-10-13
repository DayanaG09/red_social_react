import { Provider } from 'react-redux';
import store from './redux/store';
import PostContainer from './components/PostContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Blog Posts</h1>
        <PostContainer />
      </div>
    </Provider>
  );
}

export default App;
