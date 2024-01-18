import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom";

function DashBoardNavBar() {
  return (
    <div>
     <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><Link to="/" style={{ color:'black',textDecoration:"none"}}>Ecome</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <button type="button" class="btn btn-outline-primary me-2">Miya</button>
        <button type="button" class="btn btn-primary">Logout</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default DashBoardNavBar