import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";

const MovieResult = (props) => {
  const { ordem, title, nota } = props;

  return (
    <>
      <Paper
        style={{
          // height: "55px",
          marginTop: "15px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box style={{ display: "flex", alignItems: "baseline" }}>
          <Box
            style={{
              width: "40px",
              display: "flex",
              backgroundColor: "#C5B8B8",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5">{ordem}ª</Typography>
          </Box>
          <Typography
            variant="h5"
            style={{
              marginLeft: "15px",
            }}
          >
            {title}
            <div
              style={{
                marginLeft: "15px",
                fontSize: "14px",
              }}
            >
              *Avaliação: {nota}
            </div>
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default MovieResult;
