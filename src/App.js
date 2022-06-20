import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Characters from './Characters/Characters'
import Search from './Search/Search';
import Episodes from './Episodes/Episodes';
import Locations from './Locations/Locations';
import Navbar from './Navbar/Navbar';
import './App.css';

function App() {
  return (<>
  
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/locations" element={<Locations />} />
        </Routes>
        <Routes>
          <Route path="/episodes" element={<Episodes />} />
        </Routes>
      </Router>
    </div>
  </>
  )
}

const Home = () => {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([])
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then(response => response.json())
      .then((apiData) => {
        setCharacters(apiData.results);
        setInfo(apiData.info);
      })
  }, [search])

  const nextPage = () => {
    fetch(info.next)
      .then(response => response.json())
      .then((apiData) => {
        setCharacters(apiData.results);
        setInfo(apiData.info);
      })
  }

  const prevPage = () => {
    fetch(info.prev)
      .then(response => response.json())
      .then((apiData) => {
        setCharacters(apiData.results);
        setInfo(apiData.info);
      })
  }

  return (
    <>

      <Search search={setSearch}></Search>

      <div className="buttons">
        <button onClick={prevPage}>Prev page</button>
        <button onClick={nextPage}>Next page</button>
      </div>
      <br />
      <Characters charactersList={characters} />
      <br />
      <div class="buttons">
        <button onClick={prevPage}>Prev page</button>
        <button onClick={nextPage}>Next page</button>
      </div>
      <br />
    </>
  );
}

export default App;

