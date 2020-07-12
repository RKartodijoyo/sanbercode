import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MyNavBar from "./navbar.js";
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      flexGrow: 1
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }
}));

export default function CenteredGrid(props) {
  // This binding is necessary to make `this` work in the callback
  const classes = useStyles();
  const [date, setDate] = useState(new Date());
  const initialCounterPositif = 429;
  const [positif, setPositif] = useState(initialCounterPositif);
  const initialCounterDirawat = 63;
  const [dirawat, setDirawat] = useState(initialCounterDirawat);
  const initialCounterSembuh = 360;
  const [sembuh, setSembuh] = useState(initialCounterSembuh);
  const initialCounterMeninggal = 6;
  const [meninggal, setMeninggal] = useState(initialCounterMeninggal);

  //Replaces componentDidMount and componentWillUnmount
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  handleClickDirawat = () => {
    const dataku = sembuh + dirawat + meninggal;
    console.log(dataku);
    if (positif > dataku) {
      setDirawat(dirawat + 1);
    }
  };
  handleClickPositifk = () => {
    const dataku = sembuh + dirawat + meninggal;
    console.log(dataku);
    if (positif > dataku) {
      setPositif(positif - 1);
    }
  };
  handleClickSembuh = () => {
    const dataku = sembuh + dirawat + meninggal;
    console.log(dataku);
    if (positif > dataku) {
      setSembuh(sembuh + 1);
    }
  };
  handleClickMeninggal = () => {
    const dataku = sembuh + dirawat + meninggal;
    console.log(dataku);
    if (positif > dataku) {
      setMeninggal(meninggal + 1);
    }
  };
  return (
    <div
      style={{ textAlignVertical: "center", textAlign: "center" }}
      className={classes.root}
    >
      <MyNavBar />
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <h1> UPDATE DATA COVID KAB MIMIKA</h1>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <h2>Tanggal : {date.toLocaleDateString()}</h2>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>POSITIF</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>DIRAWAT</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>SEMBUH</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>MENINGGAL</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>{positif}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>{dirawat}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>{sembuh}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>{meninggal}</Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Button
              onClick={() => setPositif(positif + 1)}
              variant="contained"
              color="secondary"
            >
              Positif tambah
            </Button>
            <Button
              onClick={this.handleClickPositifk}
              variant="contained"
              color="primary"
            >
              Positif kurang
            </Button>
            <Button
              onClick={this.handleClickDirawat}
              variant="contained"
              color="secondary"
            >
              dirawat tambah
            </Button>
            <Button
              onClick={() => setDirawat(dirawat - 1)}
              variant="contained"
              color="primary"
            >
              dirawat kurang
            </Button>
            <Button
              onClick={() => setSembuh(sembuh - 1)}
              variant="contained"
              color="secondary"
            >
              sembuh kurang
            </Button>
            <Button
              onClick={this.handleClickSembuh}
              variant="contained"
              color="primary"
            >
              sembuh tambah
            </Button>
            <Button
              onClick={this.handleClickMeninggal}
              variant="contained"
              color="secondary"
            >
              meninggal tambah
            </Button>
            <Button
              onClick={() => setMeninggal(meninggal - 1)}
              variant="contained"
              color="primary"
            >
              meninggal kurang
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <h1>sponsor1</h1>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <h1>sponsor2</h1>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <h1>sponsor3</h1>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
