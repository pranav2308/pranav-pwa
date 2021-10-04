import React from "react";
import { WrapperDiv, StyledHeader, StyledButton } from "./styles";
import Grid from "@mui/material/Grid";

function App() {
  const sendNotification = () => {
    Notification.requestPermission().then((result) => {
      console.log("in here outside!");
      navigator.serviceWorker.ready.then(function (registration) {
        console.log("in here inside!");
        registration.showNotification("Sloth says:", {
          body: "Do you really want to wake me up?",
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "notification-sample",
        });
      });
    });
  };
  const imgSrc =
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/sloth-sleeping-john-benedict.jpg";
  return (
    <WrapperDiv>
      <Grid container direction="row" style={{ paddingTop: "100px" }}>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <StyledHeader variant="h2">Sleepy Sloth</StyledHeader>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "30px" }}>
          <img src={imgSrc} width="300px" height="200px"></img>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "30px" }}>
          <StyledButton onClick={sendNotification}>
            Press this button to wake up the Sloth!
          </StyledButton>
        </Grid>
      </Grid>
    </WrapperDiv>
  );
}

export default App;
