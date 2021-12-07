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
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';
function App() {
  const [releases, setReleases] = useState([]);
  const [search, setSearch] = useState ('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [releaseCount, setReleaseCount] = useState(0);
  const [update, setUpdate] = useState(JSON.parse(localStorage.getItem("update")));

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
  useEffect( ()=>{
    localStorage.setItem("update", JSON.stringify(update));
  }
  , [update])
  useEffect( ()=>{
    const interval = setInterval(()=>{
      getData();
    }, 6000);
    if(query != ''){
      clearInterval(interval);
    }
    if(page > 1){
      clearInterval(interval);
    }
    if(update == true){
      clearInterval(interval);
    }
    return ()=>{
      clearInterval(interval);
    }
  }
  , [query, page, update])
  useEffect( ()=>{
    getReleaseCount();
    const interval = setInterval(()=>{
      getReleaseCount();
    }, 6000);
    if(query != ''){
      clearInterval(interval);
    }
    return ()=>{
      clearInterval(interval);
    }
  }
  , [query, page])

  const getData = async ()=>{
    if(query === '') {
      const response = await fetch(`https://api.predb.xyz/api/releases?p=${page}&l=50`);
      const data = await response.json();
      setReleases(data);

    }
    if(query !== '') {
      const response = await fetch(`https://api.predb.xyz/api/search?q=${query}&p=${page}&l=50`);
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
    setPage(1);
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
  const getReleaseCount = async () =>{
    const response = await fetch(`https://api.predb.xyz/api/length`);
    const data = await response.json();
    setReleaseCount(data);
  }
  
return (
  <div className="app">
    

    <Container className="d-flex justify-content-center ">
      <div className="w-100">
      <h1 onClick={resetSearch}><Link to="/" style={{color: 'white', 'text-decoration': 'none'}}>predb</Link></h1><Link to="/about"><small>About</small></Link> 
      {"\n"}
      | {"\n"}<Link to="/api"><small>API Docs</small></Link> 
      
      {"\n"}
      <div class="control switch">
    <FormCheckInput type="checkbox" id="switch" onChange={(e) => {
      setUpdate(e.target.checked);
    }} checked={update}/> 
    {"\n"}
    <FormCheckLabel className="switch-label" htmlFor="switch">Disable Automatic Updates</FormCheckLabel>

</div>
      <small><i>proudly indexing {releaseCount.length} releases</i></small>
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
