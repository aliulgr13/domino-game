import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core/";
import { shuffleTiles, playGame } from "./domino";
import TileCollection from "./components/TileCollection";
import MessageLog from "./components/MessageLog";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "30px",
  },
  container: {
    height: "750px",
  },
}));

function App() {
  const classes = useStyles();
  const [state, setState] = useState(shuffleTiles("Ali", "Yusuf"));

  useEffect(() => {
    const { firstUser, secondUser } = playGame(
      state.firstUser,
      state.secondUser,
      state.board,
      state.tiles,
      state.messages
    );
    setState((prev) => ({ ...prev, firstUser: firstUser }));
    setState((prev) => ({ ...prev, secondUser: secondUser }));
  }, [
    state.board,
    state.firstUser,
    state.messages,
    state.secondUser,
    state.tiles,
  ]);

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="space-around">
        <Grid item container xs={12} sm={5} className={classes.container}>
          <Grid item xs={12}>
            <TileCollection tiles={state.tiles} title={"Tiles"} />
          </Grid>
          <Grid item xs={12}>
            <TileCollection tiles={state.board} title={"Board"} />
          </Grid>
          <Grid item xs={12}>
            {state.firstUser.tiles.length !== 0 ? (
              <TileCollection
                tiles={state.firstUser.tiles}
                title={state.firstUser.name}
              />
            ) : (
              <Typography color="secondary" variant="h5">
                Winner
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            {state.secondUser.tiles.length !== 0 ? (
              <TileCollection
                tiles={state.secondUser.tiles}
                title={state.secondUser.name}
              />
            ) : (
              <Typography color="secondary" variant="h5">
                Winner
              </Typography>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <MessageLog messages={state.messages} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
