import React from 'react'
import { useParams } from 'react-router';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Button, Container, Badge} from 'react-bootstrap';

export default function Rls() {
    const params = useParams();
    const [release, setRelease] = useState([]);
    const [date, setDate] = useState([]);
    const getData = async ()=>{
        const response = await fetch(`BACKEND_API_URL/api/rls/${params.id}`);
        const data = await response.json();      
        setRelease(data);
      };
    const getDate = async ()=>{
        const response = await fetch(`BACKEND_API_URL/api/getDate/${params.id}`);
        const data = await response.json();      
        setDate(data.date);
      }
    useEffect(()=>{
        getDate();
    },[])

      useEffect( ()=>{
        getData();
      }, [])
    return (
        <div>
            <div className="container d-flex justify-content-center align-itmes-center">
                <div className="jumbotron">
                    
                </div>
                <br />
                <div className="d-flex justify-content-around mt-3">

            <div className="container">
                <div class="card">
                <div class="card-body">
                <h4 className="card-title" >{release.rls}</h4>
                  <h6 class="card-subtitle mb-2">Category: <Link to={"/cat/" + release.cat}>{release.cat}</Link></h6>
                <h6 class="card-subtitle mb-2">Pre At: <b>{date}</b></h6>
                  <a href={"https://www.srrdb.com/release/details/" + release.rls} target="_blank"  rel="noreferrer" class="card-link"><button className="btn btn-success">srrDB</button></a>
                  <a href={"https://dup3.me/includes/image.php?x=" + release.rls + "&z=1"} target="_blank"  rel="noreferrer" class="card-link"><button className="btn btn-light">dup3.me NFO Image</button></a>
                </div>
                </div>
                </div>
              </div>   
              </div>
              <div className="text-center"><Link to="/"><Button className="btn-danger">Back to Index</Button></Link>   </div>
              

        </div>

    )
}
