import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styled from "@emotion/styled";

const Rank = styled.div`
  position: absolute;
  top: 0px;
  left: 20px;
  width: 50px;
  height: 50px;
  background-color: red;
`;

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea style={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="270"
          image="/img/cafe/room.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            엑스케이프
          </Typography>
        </CardContent>
        <Rank>1</Rank>
      </CardActionArea>
    </Card>
  );
}
