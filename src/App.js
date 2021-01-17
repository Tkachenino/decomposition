import News from './components/News';
import Search from './components/Search';
import Wheather from './components/Apps/Wheather';
import TvProgramm from './components/Apps/TvProgramm';
import Popular from './components/Apps/Popular';
import Map from './components/Apps/Map';
import Podcast from './components/Apps/Podcast';
import './App.css';

function App() {
  return (
    <div className="App">
      <News />
      <Search />
      <Wheather />
      <TvProgramm />
      <Popular />
      <Map />
      <Podcast />
    </div>
  );
}

export default App;
