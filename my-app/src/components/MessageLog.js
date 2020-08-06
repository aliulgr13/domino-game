import React from "react";
import { Paper, Typography, Divider } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
  },
  divider: {
    marginTop: "20px",
    marginBottom: "20px",
  },
}));
function MessageLog({ messages }) {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="h5">Play </Typography>
      <Divider className={classes.divider} />
      {messages.map((msg, i) => (
        <Typography key={i} variant="body1">
          {msg}
        </Typography>
      ))}
    </Paper>
  );
}

export default MessageLog;
