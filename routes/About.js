import React from 'react'
import {Button, Container, Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default function About() {
    return (
        <div>
            <Container>
                <div className="d-flex justify-content-center">
                <div>
                <h1>About</h1>
                <p><i>Yet another PreDB...</i></p>
                <h4>Technologies used:</h4>
                <Badge>React </Badge>

                <Badge>Node.js</Badge>

                <Badge>Express</Badge>
                
                <Badge>MongoDB</Badge>

                <h4>Why so few releases?</h4>
                <p>I did not add any old releases to the DB. The DB started collecting releases on December 4th 2021.</p>
                <h4>GitHub</h4>
                <p><a href="https://github.com/crackhub-dev/predb-frontend"  target="_blank" rel="noreferrer">React Frontend</a></p>
                <p><a href="https://github.com/crackhub-dev/predb-backend" target="_blank" rel="noreferrer">Node.js Backend</a> {"<--"} Info is from public source, you don't need any special access to host your own! </p>
                <small>Just a small project, may or may not be updated in the future. </small>
                <p><small><i>{"code by crackhub213"}</i></small></p>
                <Link to="/"><Button className="btn-danger">Back to index</Button></Link>
                </div>

                </div>
            </Container>
        </div>
    )
}
