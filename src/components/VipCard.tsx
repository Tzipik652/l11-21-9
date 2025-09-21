import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { FC } from "react";

export interface Vip {
  id: number;
  name: string;
  birth_year: string;
  country: string;
  image: string;
  source: string;
  worth: string;
}

const VipCard: FC<{ vip: Vip }> = ({ vip }) => (
  <Card sx={{ maxWidth: 300, borderRadius: 3, boxShadow: 3 }}>
    <CardMedia component="img" height="200" image={vip.image} alt={vip.name} />
    <CardContent>
      <Typography variant="h6" gutterBottom>{vip.name}</Typography>
      <Typography variant="body2" color="text.secondary">
        Born: {vip.birth_year} | {vip.country}
      </Typography>
      <Typography variant="body2" color="text.secondary">Source: {vip.source}</Typography>
      <Typography variant="body1" color="primary" sx={{ mt: 1 }}>Net Worth: {vip.worth}</Typography>
    </CardContent>
  </Card>
);

export default VipCard;
