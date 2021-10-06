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

  const wisdomArray = [
    "Don't just do something, sit there!",
    "Never postpone what you can cancel",
    "Always take a pillow wherever you go!",
    "You can never have enough sleep",
    "Use the bathroom facing down",
    "Never waste any time you can spend on sleeping",
    "Always say, I'll do it tomorrow",
    "Getting out of bed for work is something we should be bragging about all the time",
    "There may be no excuse for laziness, but always keep looking for one",
  ];

  const sendNonInteractiveNotification = () => {
    const wisdom = wisdomArray[Math.floor(Math.random() * wisdomArray.length)];
    navigator.serviceWorker.ready.then(function (registration) {
      registration.showNotification("Sloth says:", {
        body: wisdom,
        icon: "images/favicon16.png",
        image: "../images/logo192.png",
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        tag: "non-interactive-notification-sample",
      });
    });
  };

  let wisdomButton;
  if ("Notification" in window) {
    wisdomButton = (
      <Grid item xs={12} style={{ textAlign: "center", marginTop: "30px" }}>
        <StyledButton onClick={sendNonInteractiveNotification}>
          Listen to sloth's wisdom!
        </StyledButton>
      </Grid>
    );
  }

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
    ? "Wake up the sloth!"
    : "Put sloth to sleep again";

  const onShareButtonClick = () => {
    try {
      navigator.share({
        url: window.location.href,
        title: document.title,
      });
    } catch (e) {
      console.error("Could not share! we got error: ", e);
    }
  };

  let shareButton;
  if (navigator.share) {
    shareButton = (
      <Grid item xs={12} style={{ textAlign: "center", marginTop: "30px" }}>
        <StyledButton onClick={onShareButtonClick}>
          Spread the sloth's wisdom with your friends!
        </StyledButton>
      </Grid>
    );
  }

  return (
    <WrapperDiv>
      <Grid container direction="row" style={{ paddingTop: "100px" }}>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <StyledHeader variant="h2">Sleepy Sloth</StyledHeader>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "30px" }}>
          <img src={imgSrc} width="300px" height="200px"></img>
        </Grid>
        {wisdomButton}
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "30px" }}>
          <StyledButton onClick={sendNotification}>{buttonText}</StyledButton>
        </Grid>
        {shareButton}
      </Grid>
    </WrapperDiv>
  );
}

export default App;
