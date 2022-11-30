import logo from './logo.svg';
import './App.css';

import NavMain from './components/profile/NavMain';
import ProfilePhoto from './components/profile/ProfilePhoto';
import FullName from './components/profile/FullName';
import Address from './components/profile/Address';
import Footer from './components/profile/Footer';
function App() {
  return (
    <div className="App">
      <NavMain />      
      <ProfilePhoto />
      <FullName />
      <Address />
      <Footer />
    </div>
  );
}

export default App;
