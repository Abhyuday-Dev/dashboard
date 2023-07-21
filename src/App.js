
import './App.css';
import Main from './components/Body/Main';
import Notification from './components/Body/Notification';
import MobileSidebar from './components/Sidebar/MobileSidebar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
   <div className='app'>
    <Notification />
    <Sidebar />
    <Main />
    <MobileSidebar />
   </div>
  );
}

export default App;
