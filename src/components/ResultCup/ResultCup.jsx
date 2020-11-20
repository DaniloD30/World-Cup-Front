import { Button, Grid, Paper } from "@material-ui/core";
import MovieResult from "../MovieResult/MovieResult";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import React from "react";
import Loading from "../../components/Loading/circularProgress"
const ResultCup = (props) => {
  const { winners } = useSelector((state) => state.movie);
  const { generateChampionship } = useSelector((state) => state.app.loading);
  const comeBack = () => {
    props.history.push("/");
  };
  return (
    <>
    <Loading loading={generateChampionship }>
      <Paper
        style={{
          margin: "0 auto",
          width: "80%",
          backgroundColor: "#9E9E9E",
          padding: "10px",
        }}
      >
        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            comeBack();
          }}
        >
          Voltar
        </Button>
        <Grid container spacing={2}>
          {winners?.map((item, index) => (
            <Grid key={index} item xs={12}>
              <MovieResult ordem={index + 1} title={item?.titulo} nota={item?.nota} />
            </Grid>
          ))}
        </Grid>
      </Paper>
      </Loading>
    </>
  );
};

export default withRouter(ResultCup);
