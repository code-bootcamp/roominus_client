import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

export default function GradientCover(props: {
  el: {
    theme: any;
    mainImg: string;
  };
}) {
  return (
    <Card sx={{ minHeight: "300px", minWidth: 200 }}>
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
  );
}
