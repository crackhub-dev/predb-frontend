import './darkBootstrap.css';
import {useState, useEffect} from 'react';
import Release from './Release';
import {Button, Container, Badge} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [releases, setReleases] = useState([]);
  const [search, setSearch] = useState ('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect( ()=>{
    getData();
  }, [query])
  useEffect( ()=>{
    if(page < 1){
      setPage(1);
    }else{
      getData();
    }
    
  } , [page])

  const getData = async ()=>{
    if(query === '') {
      const response = await fetch(`BACKEND_API_URL/api/releases?p=${page}&l=50`);
      const data = await response.json();
      setReleases(data);

    }
    if(query !== '') {
      const response = await fetch(`BACKEND_API_URL/api/search?q=${query}&p=${page}&l=50`);
      const data = await response.json();
      setReleases(data);
    }
    
  
  }
  const updateSearch = e =>{
    setSearch(e.target.value);
    setQuery(e.target.value);
    setPage(1);
  }
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
  }
  const resetSearch = () =>{
    setSearch('');
    setQuery('');
  }
  const nextPage = () =>{
    const nextp = page + 1;
    if(nextp < 1){
      let nextp = 1;
      setPage(nextp);
    }else{
      setPage(nextp);
    }
  
    

  }
  const prevPage = () =>{
    const prevp = page - 1;
    setPage(prevp);
  }

return (
  <div className="app">
    

    <Container className="d-flex justify-content-center ">
      <div className="w-100">
      <h1>predb</h1>  
      <form className="search-form " onSubmit={getSearch}>
        <input type="text" className="search-bar form-control" value={search} onChange={updateSearch} placeholder="Start typing to search for releases!"/>
        <Button className="btn btn-danger" onClick={resetSearch}>Reset Search</Button>

      </form>
  <Container>
      {releases.map(rls =>(

        <Release key={rls.id} title={rls.rls} category={rls.cat} id={rls._id}/>
      
      
      ))}
      </Container>
    </div>
    </Container>
    <Container className="d-flex justify-content-center">
    <div>
    <Button className="btn-danger" onClick={prevPage}>Previous Page</Button>
    <Button className="btn-success" onClick={nextPage}>Next Page</Button>
    <Badge className="bg-warning">Page {page}</Badge>
    </div>
  </Container>
  </div>
)};

export default App;
