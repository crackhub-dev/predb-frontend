import React from 'react'
import {Button, Container, Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Api() {
    return (
        <div>
            <Container>
                <div className="d-flex justify-content-center">
                <div>
                <h1>API Docs</h1>
                <p><i>PreDB.xyz API</i></p>
                <p>All endpoints return a JSON response</p>
                <h5>Base URL: <code>BACKEND_API_URL</code> (SSL optional)</h5>
                <h4>API Endpoints:</h4>
                <ul>
                    <li><Badge>GET</Badge> <a href="https://BACKEND_API_URL/api/releases">/api/releases</a></li> <b>Takes <code>?p=</code> and <code>&l=</code> meaning page & limit.</b>
                    <li><Badge>GET</Badge> <a href="https://BACKEND_API_URL/api/rls/<id>">/api/rls/:id</a> <b>Take <code>id</code> param. It's an object ID you can get from the other endpoints.</b></li>
                    <li><Badge>GET</Badge> <a href="https://BACKEND_API_URL/api/search">/api/search</a> <b>Takes <code>?p=</code>, <code>&l=</code> and <code>&q=</code> args. Meaning page, limit and query.</b></li>
                    <li><Badge>GET</Badge> <a href="https://BACKEND_API_URL/api/getDate/<id>">/api/getDate/:id</a> <b>Takes <code>id</code> param. Returns human readable pre date.</b></li>
                    <li><Badge>GET</Badge> <a href="https://BACKEND_API_URL/api/cat">/api/cat</a> <b>Takes <code>?p=</code>, <code>&l=</code> and <code>&q=</code> args. Meaning page, limit and query.</b></li>
                    <li><Badge>GET</Badge> <a href="https://BACKEND_API_URL/api/grp">/api/grp</a> <b>Takes <code>?p=</code>, <code>&l=</code> and <code>&q=</code> args. Meaning page, limit and query.</b></li>
                    <li><Badge>GET</Badge> <a href="https://BACKEND_API_URL/api/length">/api/length</a> <b>Takes no arguments/params. Returns number releases in DB.</b></li>
                </ul>
                <p><small><i>{"code by crackhub213"}</i></small></p>
                <Link to="/"><Button className="btn-danger">Back to index</Button></Link>
                </div>

                </div>
            </Container>
        </div>
    )
}
