import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
import { withRouter } from "react-router";
import Movie from "../Movie/Movie";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/circularProgress";
import movieAction from "../../actions/movieAction";
import React, { useEffect } from "react";

const MoviesList = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const [movieList, setMoviesList] = React.useState([]);
  const  movieArr  = useSelector((state) => state.movie?.movieArr);
  const  getMoviesLoading  = useSelector((state) => state.app?.loading?.getMoviesLoading);

  const handleListSelectMovies = (movie) => {
    const movieL = movieList.find((obj) => obj.id === movie.id);
    if (movieL === undefined) {
      if (movieList?.length < 8) {
        setMoviesList(movieList.concat(movie));
      }
    }
  };

  const handleDelete = (movie) => {
    setMoviesList(
      movieList.filter((appointment) => appointment.id !== movie.id)
    );
  };

  const handlePage = () => {
    dispatch(
      movieAction.generateChampionship(movieList, "generateChampionship")
    );
    dispatch(movieAction.saveLength(0));
    setMoviesList([]);
    history.push("/result");
  };

  useEffect(() => {
    dispatch(movieAction.getMovies("getMoviesLoading"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(movieAction.saveLength(movieList?.length));
  }, [dispatch, movieList]);

  return (
    <>
      <Loading loading={getMoviesLoading}>
        <Paper
          style={{
            margin: "0 auto",
            width: "80%",
            backgroundColor: "#9E9E9E",
            padding: "10px",
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box style={{ width: "10%" }}>
              <Typography style={{ color: "white" }}>
                Selecionados {movieList?.length} de 8 filmes
              </Typography>
            </Box>

            <Box>
              <Button
                onClick={(e) => handlePage(e)}
                disabled={movieList?.length < 8 ? true : false}
                style={{
                  backgroundColor:
                    movieList?.length < 8 ? "rgb(158, 158, 158)" : "#161616",
                  color: "white",
                }}
              >
                {" "}
                GERAR MEU CAMPEONATO
              </Button>
            </Box>
          </Box>
          <Grid style={{ padding: "20px" }} container spacing={2} >
            {movieArr?.length === 0 ? (
              <Grid item xs={12}>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <Typography variant="h5" style={{ color: "white" }}>
                    Nenhum filme encontrado!
                  </Typography>
                </Box>
              </Grid>
            ) : (
              movieArr?.map((item, index) => (
                <Grid key={index} item xs={12} md={3} sm={4} >
                  <Movie
                    title={item?.titulo}
                    year={item?.ano}
                    handleList={handleListSelectMovies}
                    handleDel={handleDelete}
                    movie={item}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Paper>
      </Loading>
    </>
  );
};

export default withRouter(MoviesList);
