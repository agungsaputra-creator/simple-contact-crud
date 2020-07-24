import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    title: state.users.title
  }
}

const BannerComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-3">{props.title}</h1>
          <p className="lead">
            CODE.ID is a coding factory, a software development service company that focuses on helping our customers turn their best ideas into a product, application or website. CODE.ID also provide an IP Product such as Activo for Fixed Asset Management and Goodsales for Sales Tracking.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, null)(BannerComponent);
