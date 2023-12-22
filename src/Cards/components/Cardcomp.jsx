import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import ROUTES from "../../routes/routes";



const CardComponent = ({
  _id,
  title,
  subTitle,
  phone,
  address,
  img,
  alt,
  like,
  liked,
  cardNumber,
  onDeleteCardClick,
  onLikeClicked,
}) => {

  const navigate = useNavigate()


  const [didClick, setDidClick] = useState(false);

  const HandleClickEditCard = () => {

      setDidClick(true);
      navigate(ROUTES.EDITCARD, {state : { id: _id }})};
  
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" image={img} alt={alt} />
      </CardActionArea>
      <CardContent>
        <CardHeader title={title} subheader={subTitle} sx={{ p: 0, mb: 1 }} />
        <Divider />
        <Box sx={{ mt: 1 }}>
          <Typography variant="body2">
            <Typography fontWeight="700" variant="subtitle1" component="span">
              Phone:{" "}
            </Typography>
            {phone}
          </Typography>
          <Typography variant="body2">
            <Typography fontWeight="700" variant="subtitle1" component="span">
              Address:{" "}
            </Typography>
            {address}
          </Typography>
          <Typography variant="body2">
            <Typography fontWeight="700" variant="subtitle1" component="span">
              Card Number:{" "}
            </Typography>
            {cardNumber}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <IconButton>
              <PhoneIcon />
            </IconButton>
            <IconButton onClick={HandleClickEditCard}>
              <CreateIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton onClick={() => onDeleteCardClick(_id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => onLikeClicked(_id)}>
              <FavoriteIcon color={liked ? "favActive" : ""} />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

CardComponent.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  like: PropTypes.bool,
  cardNumber: PropTypes.number,
  onDeleteCardClick: PropTypes.func.isRequired,
  liked: PropTypes.bool,
};
CardComponent.defaultProps = {
  img: "https://www.livemint.com/lm-img/img/2023/08/14/1600x900/garena_free_fire_max_1688877791610_1691982307589.jpg",
  alt: "running",
}

export default CardComponent;
