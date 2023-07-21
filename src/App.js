
import './App.css';
import Main from './components/Body/Main';
import MobileSidebar from './components/Sidebar/MobileSidebar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
   <div className='app'>
    <Sidebar />
    <Main />
    <MobileSidebar />
   </div>
  );
}

export default App;
