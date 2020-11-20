import { Box, Checkbox, Paper, Snackbar, Typography } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const MoviesList = (props) => {
  const { title, year, movie, handleList, handleDel } = props;
  const [checked, setChecked] = React.useState(false);
  const [moviesLength, setLengthMovies] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const movies = useSelector((state) => state.movie?.movies);

  useEffect(() => {
    if (movies) {
      setLengthMovies(movies);
    }
  }, [movies]);

  const handleChange = (event) => {
    if (event.target.checked) {
      if (moviesLength === 8) {
        setOpen(true);
      } else {
        setChecked(event.target.checked);
        handleList(movie);
      }
    } else {
      setChecked(event.target.checked);
      handleDel(movie);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="warning">
          Você ja selecionou 8 filmes!
        </Alert>
      </Snackbar>
      <Paper
        style={{
          width: "83%",
          backgroundColor: "white",
          padding: "10px",
        }}
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Checkbox
            checked={checked}
            color="primary"
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <Typography>{title}</Typography>
        </Box>

        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#999999",
          }}
        >
          {year}
        </Typography>
      </Paper>
    </>
  );
};

export default MoviesList;
