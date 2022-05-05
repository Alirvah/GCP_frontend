# Credit Card Fraud Detection - Frontend

Running serverless on GCP

React UI application which uses [Flask Bakend](https://github.com/Alirvah/GCP_backend) to predict if a given credit card transaction string is a fraud or not.

```
git clone https://github.com/Alirvah/GCP_frontend.git
cd GCP_frontend
```

After you deploy the [Backend part](https://github.com/Alirvah/GCP_backend) of the project, please use the generated URL in [src/App.js](https://github.com/Alirvah/GCP_frontend/blob/a93489452fa10d4cf3daab7fbab4a047ab11973a/src/App.js#L4) to set `BACKEND_URL` variable.

![image](https://user-images.githubusercontent.com/37639059/166878744-3dca3194-8b43-407f-9624-23a21584e02a.png)


```
gcloud run deploy
```
