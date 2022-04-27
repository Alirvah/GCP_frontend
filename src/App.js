import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState();
  const [input, setInput] = useState();
  const [inputcsv, setInputcsv] = useState();
  const [result, setResult] = useState();

  const handleClick = () => {
    fetch("https://ccardfrauddetection-s44wmvt6pq-ey.a.run.app/check")
      .then((response) => response.json())
      .then((actuaData) => setData(actuaData));

    data.result === "OK" ? setResult(true) : setResult(false);

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
          style={{ color: "white" }}
          id="fullWidth"
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
      {result === "OK" ? (
        <img src="./checked.svg" />
      ) : (
        <img src="./cancel.svg" />
      )}
    </>
  );
}
