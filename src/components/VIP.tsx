import React, { useEffect, useState } from "react";
import axios from "axios";
import VipCard, { Vip } from "./VipCard";
import { Box } from "@mui/material";

function VIP() {
  const [vipItem, setVipItem] = useState<Vip[]>([]);
  useEffect(() => {
    doApi();
  }, []);
  const doApi = async () => {
    setVipItem([]);
    let url = "https://expressrichpepole.onrender.com/";
    try {
      let resp = await axios.get(url);
      console.log(resp.data);
      setVipItem(resp.data);
    } catch (err) {
      console.log(err);
      alert("There problem, come back latter");
    }
  };
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="space-around" gap={2}>
      {Array.isArray(vipItem) &&
        vipItem.map((vip) => (
          <Box key={vip.id} flex="0 1 calc(25% - 16px)">
            <VipCard key={vip.id} vip={vip} />
          </Box>
        ))}
    </Box>
  );
}

export default VIP;
