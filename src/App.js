import './App.css';
import MenuBar from './component/MenuBar.js'
import PartCrypto from './component/PartCrypto.js'
import LogCryptoTitle from './component/LogCryptoTitle.js'
import DecryptLogView from './component/DecryptLog.js'


function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <PartCrypto></PartCrypto>
      <LogCryptoTitle></LogCryptoTitle>
      <DecryptLogView></DecryptLogView>
    </div>
  );
}

export default App;
