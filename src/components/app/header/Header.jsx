import { Paper, Typography } from "@material-ui/core";
import React, { Component } from "react";
import "./Header.scss";
export default class Header extends Component {
  render() {
    return (
      <Paper
        style={{
          display: "grid",
          justifyItems: "center",
          backgroundColor: "#6E6E6E",
          width: "80%",
          margin: "0 auto",
          padding: "10px",
          
        }}
      >
        <Typography
          variant="h6"
          style={{ textAlign: "center", color: "#8A8A8A" }}
        >
          Campeonato de Filmes
        </Typography>
        <Typography
          variant="h5"
          style={{ textAlign: "center", color: "white" }}
        >
          {this.props.subTitle}
        </Typography>
        <Typography style={{ textAlign: "center", color: "white" }}>
          ___
        </Typography>
        <Typography
          variant="h6"
          style={{ textAlign: "center", color: "white" }}
        >
          {this.props.description}
        </Typography>
        <Typography
          variant="h6"
          style={{ textAlign: "center", color: "white" }}
        >
          {this.props.description2}
        </Typography>
      </Paper>
    );
  }
}
