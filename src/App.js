import React from "react";
import { WrapperDiv, StyledHeader, StyledButton } from "./styles";
import Grid from "@mui/material/Grid";

function App() {
  const [isAsleep, setIsAsleep] = React.useState(true);

  React.useEffect(() => {
    navigator.serviceWorker.addEventListener("message", ({ data }) => {
      if (data !== undefined) {
        setIsAsleep(data);
      }
    });
  }, []);

  const actions = isAsleep
    ? [
        {
          action: "wake up",
          title: "Wake up the sloth!",
          icon: "images/favicon16.png",
        },
        {
          action: "close",
          title: "Close notification",
          icon: "images/favicon16.png",
        },
      ]
    : [
        {
          action: "put to sleep",
          title: "Put sloth to sleep again!",
          icon: "images/favicon16.png",
        },
        {
          action: "close",
          title: "Close notification",
          icon: "images/favicon16.png",
        },
      ];

  const body = isAsleep
    ? "Do you really want to wake me up?"
    : "Do you really want me to go to sleep again?";

  const sendNotification = () => {
    Notification.requestPermission().then((result) => {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification("Sloth says:", {
          body,
          icon: "images/favicon16.png",
          image: "../images/logo192.png",
          actions,
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "notification-sample",
        });
      });
    });
  };

  const imgSrc = isAsleep
    ? "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/sloth-sleeping-john-benedict.jpg"
    : "https://i.huffpost.com/gen/1742216/thumbs/o-SLOTH-facebook.jpg";

  const buttonText = isAsleep
    ? "Press this button to wake up the sloth!"
    : "Press this button to put sloth to sleep again";
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
          <StyledButton onClick={sendNotification}>{buttonText}</StyledButton>
        </Grid>
      </Grid>
    </WrapperDiv>
  );
}

export default App;
