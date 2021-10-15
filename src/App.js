import './App.css';
import { Search, X } from 'react-feather';
import { useState } from 'react'

function App() {
  let [search, setSearch] = useState('')

  return (
    <div className="App">
      <div className="google-logo-container">
        <img className="google-logo" width="300" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
      </div>
      <div className="google-search-container">
        <div className="google-search-icon-container">
          <Search color={'#dadce0'} size={20} name="google-search-icon" />
        </div>
        <form onSubmit={() => window.open(`https://www.google.com/search?q=${search}`)} className="google-search-input-container">
          <input type="text" className="google-search-input" value={search} onChange={(e) => setSearch(e.target.value)} />
        </form>
        <div className="google-delete-icon-container"> {
            search.trim() != '' &&
            <X color="gray" size={20} name="google-delete-icon" onClick={() => setSearch('')} />
          }
        </div>
      </div>
      <div className="google-buttons-container">
        <button className="google-button">Google Search</button>
        <button className="google-button">I'm Feeling Lucky</button>
      </div>
    </div>
  );
}

export default App;
