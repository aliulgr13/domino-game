import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/";
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
  }, []);

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
            <TileCollection
              tiles={state.firstUser.tiles}
              title={state.firstUser.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TileCollection
              tiles={state.secondUser.tiles}
              title={state.secondUser.name}
            />
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
