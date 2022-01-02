import '../darkBootstrap.css';
import {useState, useEffect} from 'react';
import Release from '../Release';
import {Button, Container, Badge} from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function GroupBrowse() {
    const params = useParams();
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
        getData();
      }else{
        getData();
      }
    } , [page])
    const getData = async ()=>{
      const response = await fetch(`https://BACKEND_API_URL/api/grp?q=${params.grp}&p=${page}&l=50`);
      const data = await response.json();
      setReleases(data);
      
    
    }
    const updateSearch = e =>{
      setSearch(e.target.value);
      setQuery(e.target.value);
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
      
  
      <Container className="d-flex justify-content-center">
        <div className="app w-100">
        <Container >
        <h1>predb</h1>  
        <p className="text-success">You are browsing all releases from the group <span className="text-warning"><b>{params.grp}</b></span></p> 
        <form className="search-form" onSubmit={getSearch}>
          <input type="text" className="search-bar form-control" value={params.cat} onChange={updateSearch} placeholder="Start typing to search for releases!"/>
          <Link to="/"> <Button className="btn btn-danger">Reset Search</Button></Link>
  
        </form>
        {releases.map(rls =>(
  
          <Release title={rls.rls} category={rls.cat} id={rls._id}/>
          
        
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
    )
}
