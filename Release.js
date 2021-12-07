import React from "react";
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

const Release = ({title, category, id})=>{

    return(
        <div className={"rls-" + id}>
           <Link to={"/cat/" + category}><Badge>{category}</Badge></Link> <small><a href={"https://www.srrdb.com/release/details/" + title} target="_blank"  rel="noreferrer"><Badge className="badge bg-success">srrDB</Badge></a></small> <Link to={"/rls/" + id}><p><b>{title}</b></p></Link>
        </div>
    );
}

export default Release;