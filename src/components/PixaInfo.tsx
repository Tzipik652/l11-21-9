import React, { FC } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

type PixaInfoProps = {
  item: {
    imageUrl: string;
    title: string;
  };
};

const PixaInfo: FC<PixaInfoProps> = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: 2, boxShadow: 3, m: 1 }}>
      <CardMedia
        component="img"
        height="200"
        image={item.imageUrl}
        alt={item.title}
      />
      <CardContent>
        <Typography variant="body1" color="text.primary">
          {item.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PixaInfo;
