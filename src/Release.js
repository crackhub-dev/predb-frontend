import React from "react";
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

const Release = ({title, category, id})=>{
    let titleArr = title.split('-');
    let group = titleArr[titleArr.length-1];
    return(
        <div className={"rls-" + id}>
           <Link to={"/cat/" + category}>
            <Badge>{category}</Badge>
            </Link>
            <Link to={"/grp/" + group}>
            <Badge style={{marginLeft: "5px", marginRight: "5px"}} className="badge bg-info">{group}</Badge>
            </Link>
            <small><a href={"https://www.srrdb.com/release/details/" + title} target="_blank"  rel="noreferrer"><Badge className="badge bg-success">srrDB</Badge></a></small> <Link to={"/rls/" + id}><p><b>{title}</b></p></Link>
        </div>
    );
}

export default Release;