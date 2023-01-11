import './App.css';
// import { Button} from '@chakra-ui/react'
import { Route } from 'react-router-dom';

// Components
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div className="App">
     {/* <Button colorScheme='blue'>Button</Button> */}
      <Route path="/" component={HomePage} exact/>
      <Route path="/chats" component={ChatPage}/>
    </div>
  );
}

export default App;
