import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import DetailUserComponent from "../components/DetailUserComponent";
import { getUserDetail } from "../action/userAction";

class DetailUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail User</h1>
        <DetailUserComponent />
      </Container>
    );
  }
}

export default connect()(DetailUserContainer);
