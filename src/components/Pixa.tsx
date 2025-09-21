import { useEffect, useState } from "react";
import PixaInput from "./PixaInput";
import PixaInfo from "./PixaInfo";
import { Box } from "@mui/material";

type PhotoItem = {
  id: string;
  urls: { small: string };
  alt_description: string;
};

const Pixa: React.FC<{ query?: string }> = ({ query = "cat" }) => {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);

  const fetchPhoto = async (q: string) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${q}&per_page=3&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
      );
      const data = await response.json();
      setPhotos(data.results); 
    } catch (err) {
      console.error("Error fetching Unsplash images:", err);
    }
  };

  useEffect(() => {
    fetchPhoto(query);
  }, [query]);

  return (
    <div style={{ textAlign: "center" }}>
      <PixaInput doApi={fetchPhoto} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          mt: 2,
        }}
      >
        {photos.length > 0 ? (
          photos.map((item) => (
            <PixaInfo
              key={item.id}
              item={{
                imageUrl: item.urls.small,
                title: item.alt_description || "No description",
              }}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Box>
    </div>
  );
};

export default Pixa;
