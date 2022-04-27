import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState(false);
  const [input, setInput] = useState("");

  const handleClick = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ trans: input }),
    };
    fetch(
      "https://ccardfrauddetection-s44wmvt6pq-ey.a.run.app/check",
      requestOptions
    )
      .then((response) => response.json())
      .then((actuaData) => setData(actuaData));
  };
  return (
    <div style={{ width: "100%" }}>
      <Typography
        align="left"
        variant="h2"
        gutterBottom
        component="div"
        style={{
          backgroundColor: "#e20074",
          padding: "1rem",
          margin: "0rem",
          color: "white",
        }}
      >
        T-Systems
      </Typography>
      <div style={{ margin: "10rem" }}>
        <TextField
          fullWidth
          multiline
          label="Transaction string"
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
          Check Transaction
        </Button>
      </div>
      {data &&
        (data.result === "OK" ? (
          <div
            style={{
              backgroundColor: "green",
              padding: "1rem",
              color: "white",
              textAlign: "center",
            }}
          >
            Transaction OK
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "red",
              padding: "1rem",
              color: "black",
              textAlign: "center",
            }}
          >
            FRAUD
          </div>
        ))}
    </div>
  );
}
