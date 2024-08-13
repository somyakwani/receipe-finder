// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Navbar from 'react-bootstrap/Navbar';

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function HeaderComponent() {
  return (
    <div>
      {/* <Navbar style={{backgroundColor:"black",paddingInline:"10px", zIndex:5, }}>
            <Form >
              <Form.Control style={{
                backgroundColor:"pink"
              }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar> */}

      <Navbar
        style={{
          backgroundColor: "#2c5d63",
          height: "3rem",
          width: "100vw",
          zIndex: 5,
          position:"fixed"
        }}
      > 
    
        <Form>
          <Form.Control style={{height:"2rem",marginTop:"8px",marginLeft:"8px", border:"3px solid balck"}}
            type="search"
            placeholder="Explore Dishes"
            aria-label="Search"
          />
          
          <Button variant="outline-success" style={{height:"2rem",border:"3px solid balck"}}>explore</Button>
        </Form>
      </Navbar>
    </div>
  );
}
export default HeaderComponent;
