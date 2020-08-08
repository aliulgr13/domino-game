import React from "react";
import { Paper, Typography, Divider } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
    textAlign: "center",
  },
  divider: {
    marginTop: "20px",
    marginBottom: "20px",
  },
}));

function TileCollection({ tiles, title, user }) {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="h5">
        {title} ({tiles.length})
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="body1">
        {tiles.map((tile) => {
          return `<${tile[0]}:${tile[1]}>`;
        })}
      </Typography>
    </Paper>
  );
}

export default TileCollection;
