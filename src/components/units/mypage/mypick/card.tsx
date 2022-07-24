import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { useEffect, useState } from "react";

export default function GradientCover(props: {
  el: {
    theme: any;
    mainImg: string;
  };
}) {
  const [windowSize, setWindowSize] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    } else {
      setWindowSize(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  return (
    <>
      {!windowSize && (
        <Card sx={{ minHeight: "300px", minWidth: 150 }}>
          <CardCover>
            <img src={props.el?.theme.mainImg} />
          </CardCover>
          <CardCover
            sx={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
            }}
          />
          <CardContent sx={{ justifyContent: "flex-end" }}>
            <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
              {props.el?.theme.title}
            </Typography>
            <Typography
              startDecorator={<LocationOnRoundedIcon />}
              textColor="neutral.300"
            >
              {props.el?.theme.cafe?.name}
            </Typography>
          </CardContent>
        </Card>
      )}

      {windowSize && (
        <Card sx={{ minHeight: "50px" }}>
          <CardCover>
            <img src={props.el?.theme.mainImg} />
          </CardCover>
          <CardCover
            sx={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
            }}
          />
          <CardContent sx={{ justifyContent: "flex-end" }}>
            <Typography level="h2" fontSize="small" textColor="#fff" mb={1}>
              {props.el?.theme.title}
            </Typography>
            <Typography
              startDecorator={<LocationOnRoundedIcon />}
              textColor="neutral.300"
            >
              {props.el?.theme.cafe?.name}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}
