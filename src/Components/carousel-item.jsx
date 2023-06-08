import { Card, CardMedia } from "@mui/material";

function Item({ item }) {
  return (
    <Card sx={{ maxWidth: "100vw" }}>
      <CardMedia
        component="img"
        height="500"
        image={item.image}
        alt={item.title}
      />
    </Card>
  );
}

export default Item;
