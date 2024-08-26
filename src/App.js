 import './App.css'; 
import store from './store';
import { Provider } from 'react-redux'
import TodoList from './components/TodoList/TodoList'


function App() {  
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList/>
      </div>
    </Provider>
  );
}

export default App;
