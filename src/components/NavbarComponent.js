import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
  Container
} from 'reactstrap';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/"><img src="https://static.wixstatic.com/media/ab2f5c_4090dbbaeafb4b0d975bd44c6cd498f6~mv2_d_5000_3314_s_4_2.png/v1/fill/w_262,h_78,al_c,q_85,usm_0.66_1.00_0.01/code-colored.webp" /></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              
            </Nav>
            <NavbarText>Frontend Developer</NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;