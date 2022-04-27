import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
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
      .then((actuaData) => setData(actuaData))
      .finally(setLoading(false));
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
          disabled={!input}
        >
          {loading ? "loading..." : "Check Transaction"}
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
      <div style={{ margin: "2rem" }}>
        <Typography variant="h5">Examples</Typography>
        <div style={{ margin: "1rem" }}>
          <Typography variant="h6">Fraud:</Typography>
          <Typography>
            4462,-2.30334956758553,1.759247460267,-0.359744743330052,2.33024305053917,-0.821628328375422,-0.0757875706194599,0.562319782266954,-0.399146578487216,-0.238253367661746,-1.52541162656194,2.03291215755072,-6.56012429505962,0.0229373234890961,-1.47010153611197,-0.698826068579047,-2.28219382856251,-4.78183085597533,-2.61566494476124,-1.33444106667307,-0.430021867171611,-0.294166317554753,-0.932391057274991,0.172726295799422,-0.0873295379700724,-0.156114264651172,-0.542627889040196,0.0395659889264757,-0.153028796529788,239.93
          </Typography>
          <p></p>
          <Typography variant="h6">Valid:</Typography>
          <Typography>
            9,-0.33826175242575,1.11959337641566,1.04436655157316,-0.222187276738296,0.49936080649727,-0.24676110061991,0.651583206489972,0.0695385865186387,-0.736727316364109,-0.366845639206541,1.01761446783262,0.836389570307029,1.00684351373408,-0.443522816876142,0.150219101422635,0.739452777052119,-0.540979921943059,0.47667726004282,0.451772964394125,0.203711454727929,-0.246913936910008,-0.633752642406113,-0.12079408408185,-0.385049925313426,-0.0697330460416923,0.0941988339514961,0.246219304619926,0.0830756493473326,3.68
          </Typography>
        </div>
      </div>
    </div>
  );
}
