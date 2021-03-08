import ProfilePhoto from './Component/Profile/ProfilPhoto';
import ShowFullName from './Component/Profile/FullName';
import Myaddress from './Component/Profile/Address';
import './App.css';
import './style.css';


function App() {
  return (
    <div className="App">
      <ShowFullName/>
      {/* {ShowFullName()} */}
     <ProfilePhoto/>
    <Myaddress/>

    </div>
  );
}

export default App;