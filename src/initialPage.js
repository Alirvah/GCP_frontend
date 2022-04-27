import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { color, padding } from "@mui/system";

const InitialPage = () => {
  const [data, setData] = useState();
  const [input, setInput] = useState();
  const [inputcsv, setInputcsv] = useState();

  //   useEffect(() => {
  //     fetch("https://ccard-fraud-detection-s44wmvt6pq-uc.a.run.app/")
  //       .then((response) => response.json())
  //       .then((actuaData) => setData(actuaData));
  //   }, []);

  const handleClick = () => {
    fetch(
      "https://ccardfrauddetection-s44wmvt6pq-ey.a.run.app/check-transaction"
    )
      .then((response) => response.json())
      .then((actuaData) => setData(actuaData));
    console.log(data);
  };

  return (
    <>
      <Typography
        align="center"
        variant="h2"
        gutterBottom
        component="div"
        style={{
          backgroundColor: "#ff57a2",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        T-SYSTEMS
      </Typography>
      <div style={{ margin: "10rem" }}>
        <TextField
          fullWidth
          multiline
          label="line input"
          id="fullWidth"
          style={{ color: "white" }}
          onChange={(event) => {
            setInput(event.target.value);
          }}

          //   style={{ paddingTop: 50 }}
        />
        <Button
          style={{ marginTop: 25 }}
          variant="contained"
          onClick={(event) => {
            handleClick();
          }}
        >
          send input
        </Button>
      </div>

      {/* <div style={{ margin: "10rem" }}>
        <TextField
          fullWidth
          multiline
          label="csv input"
          id="fullWidth"
          onChange={(event) => {
            setInputcsv(event.target.value);
          }}
        />
        <Button
          style={{ marginTop: 25 }}
          variant="contained"
          onClick={(event) => {
            console.log(inputcsv);
          }}
        >
          send CSV
        </Button>
      </div> */}
    </>
  );
};

export default InitialPage;
