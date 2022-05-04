import { Button, Divider, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading && data) {
      setLoading(false);
    }
  }, [loading, data]);

  const handleClick = () => {
    setData(false);
    setLoading(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ trans: input }),
    };
    fetch(
      "https://gcpbackend-6eunni2yda-ey.a.run.app/check",
      requestOptions
    )
      .then((response) => response.json())
      .then((actuaData) => setData(actuaData))
      .catch((e) => {
        setLoading(false);
        setInput("");
        setData({ result: "ERROR" });
      });
  };
  return (
    <div style={{ width: "100%" }}>
      <Typography
        align="left"
        variant="h4"
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
      <div>
        {" "}
        <Typography
          variant="h6"
          style={{
            margin: "1rem",
            textAlign: "right",
          }}
        >
          All Serverless - Hosted by Google Sovereign Cloud
        </Typography>
      </div>

      <div style={{ margin: "2rem" }}>
        <TextField
          fullWidth
          multiline
          label="Transaction string"
          style={{ color: "white" }}
          id="fullWidth"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <Button
          style={{ marginTop: 25 }}
          variant="contained"
          onClick={() => {
            handleClick();
          }}
          disabled={!input}
        >
          {!data && loading ? "loading..." : "Check Transaction"}
        </Button>
      </div>
      {data &&
        (data.result === "OK" ? (
          <div
            style={{
              backgroundColor: "green",
              padding: "0.5rem",
              color: "white",
              textAlign: "center",
            }}
          >
            <Typography variant="body1">Transaction OK</Typography>
          </div>
        ) : data.result !== "ERROR" ? (
          <div
            style={{
              backgroundColor: "red",
              padding: "0.5rem",
              color: "black",
              textAlign: "center",
            }}
          >
            <Typography variant="body1">Transaction FRAUD</Typography>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "yellow",
              padding: "0.5rem",
              color: "black",
              textAlign: "center",
            }}
          >
            <Typography variant="body1">Synatx Error: Wrong Input</Typography>
          </div>
        ))}
      <div style={{ margin: "2rem" }}>
        <Typography variant="h6">Examples</Typography>
        <Divider />
        <div style={{ margin: "1rem" }}>
          <Typography variant="h6">Fraud:</Typography>
          <div
            style={{ cursor: "pointer" }}
            onClick={(event) => setInput(event.target.textContent)}
          >
            <Typography variant="caption" style={{ overflowWrap: "anywhere" }}>
              4462,-2.30334956758553,1.759247460267,-0.359744743330052,2.33024305053917,-0.821628328375422,-0.0757875706194599,0.562319782266954,-0.399146578487216,-0.238253367661746,-1.52541162656194,2.03291215755072,-6.56012429505962,0.0229373234890961,-1.47010153611197,-0.698826068579047,-2.28219382856251,-4.78183085597533,-2.61566494476124,-1.33444106667307,-0.430021867171611,-0.294166317554753,-0.932391057274991,0.172726295799422,-0.0873295379700724,-0.156114264651172,-0.542627889040196,0.0395659889264757,-0.153028796529788,239.93
            </Typography>
          </div>
          <p></p>
          <Typography variant="h6">Valid:</Typography>
          <div
            style={{ cursor: "pointer" }}
            onClick={(event) => setInput(event.target.textContent)}
          >
            <Typography variant="caption" style={{ overflowWrap: "anywhere" }}>
              9,-0.33826175242575,1.11959337641566,1.04436655157316,-0.222187276738296,0.49936080649727,-0.24676110061991,0.651583206489972,0.0695385865186387,-0.736727316364109,-0.366845639206541,1.01761446783262,0.836389570307029,1.00684351373408,-0.443522816876142,0.150219101422635,0.739452777052119,-0.540979921943059,0.47667726004282,0.451772964394125,0.203711454727929,-0.246913936910008,-0.633752642406113,-0.12079408408185,-0.385049925313426,-0.0697330460416923,0.0941988339514961,0.246219304619926,0.0830756493473326,3.68
            </Typography>
          </div>
        </div>
      </div>
      <div style={{ margin: "2rem" }}>
        <Typography variant="h6">Sources:</Typography>
        <Divider />
        <div
          style={{
            margin: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">
            <a href="https://www.kaggle.com/code/jdelamorena/recall-97-by-using-undersampling-neural-network">
              Research - Neural Network
            </a>
          </Typography>
          <Typography variant="h6">
            <a href="https://console.cloud.google.com/run">GCP Cloud Run</a>
          </Typography>
          <Typography variant="h6">
            <a href="https://github.com/ivanek121/GCP_frontend">
              GitHub - Frontend
            </a>
          </Typography>
          <Typography variant="h6">
            <a href="https://github.com/ivanek121/GCP_backend">
              GitHub - Backend
            </a>
          </Typography>
        </div>
      </div>
      <div style={{ margin: "2rem" }}>
        <Typography variant="h6">Technologies:</Typography>
        <Divider />
        <div
          style={{
            margin: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">GCP</Typography>
          <Typography variant="h6">React</Typography>
          <Typography variant="h6">Scikit - Maschine Learning</Typography>
          <Typography variant="h6">Flask</Typography>
          <Typography variant="h6">Docker</Typography>
          <Typography variant="h6">GitHub</Typography>
          <Typography variant="h6">Python</Typography>
          <Typography variant="h6">Jupyter</Typography>
          <Typography variant="h6">JavaScript</Typography>
          <Typography variant="h6">Node.js</Typography>
          <Typography variant="h6">Linux</Typography>
          <Typography variant="h6">Bash</Typography>
        </div>
        <Divider />
      </div>
      <div style={{ margin: "2rem" }}>
        <div
          style={{ margin: "2rem", marginBottom: "3rem", textAlign: "center" }}
        >
          <img width="70%" alt="tech" src="./tech.png" />
        </div>
      </div>
      <div style={{ margin: "2rem", marginBottom: "3rem" }}>
        <Typography variant="h6">API (curl):</Typography>
        <Divider />
        <div
          style={{
            margin: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              backgroundColor: "white",
              padding: "1rem",
              border: "1px solid #b0b0b0",
              borderRadius: "10px",
              overflowWrap: "anywhere",
            }}
          >
            {`curl 'https://gcpbackend-6eunni2yda-ey.a.run.app/check' -H 'Content-Type: application/json' --data-raw '{"trans":"9,-0.33826175242575,1.11959337641566,1.04436655157316,-0.222187276738296,0.49936080649727,-0.24676110061991,0.651583206489972,0.0695385865186387,-0.736727316364109,-0.366845639206541,1.01761446783262,0.836389570307029,1.00684351373408,-0.443522816876142,0.150219101422635,0.739452777052119,-0.540979921943059,0.47667726004282,0.451772964394125,0.203711454727929,-0.246913936910008,-0.633752642406113,-0.12079408408185,-0.385049925313426,-0.0697330460416923,0.0941988339514961,0.246219304619926,0.0830756493473326,3.68"}'`}
          </Typography>
        </div>
      </div>
      <div style={{ margin: "2rem", marginBottom: "3rem" }}>
        <Typography variant="h6">How it works:</Typography> <Divider />
      </div>

      <div
        style={{ margin: "2rem", marginBottom: "3rem", textAlign: "center" }}
      >
        <img width="70%" alt="tech" src="./arch.png" />
      </div>
      <div style={{ margin: "2rem", marginBottom: "3rem" }}>
        <Typography variant="h6">How we worked:</Typography> <Divider />
      </div>

      <div style={{ margin: "2rem", textAlign: "center" }}>
        <img width="70%" alt="tech" src="./us.jpg" />
      </div>
    </div>
  );
}
