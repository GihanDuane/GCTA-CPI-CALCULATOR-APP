import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import { yellow, blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { Fullscreen } from "@mui/icons-material";
import DateInput from "@components/DateInput";
import { Button, FormControl } from "@mui/material";
// import { text } from "stream/consumers";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const GctaCalculator = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "gray" }} aria-label="Prison">
            <Typography fontSize={12}>BJMP</Typography>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="CPI and GCTA Calculator"
        style={{ textAlign: "center", color: "black" }}
        // subheader="PDL"
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}

      <CardContent>
        <div className="flex justify-between space-x-10">
          <div>
            <FormControl>
              <Typography
                variant="h6"
                style={{ textAlign: "center", marginBottom: "20px" }}
              >
                CPI
              </Typography>
              <label className="text-sm">Date of Arrest</label>
              <DateInput />

              <br />
              <label className="text-sm">End Date</label>
              <DateInput />
              <Button
                variant="outlined"
                size="small"
                style={{ marginTop: "20px" }}
              >
                Calculate
              </Button>
            </FormControl>
          </div>

          <div>
            <FormControl>
              <Typography
                variant="h6"
                style={{ textAlign: "center", marginBottom: "20px" }}
              >
                GCTA
              </Typography>
              <label className="text-sm">Date of Detention</label>
              <DateInput />

              <br />
              <label className="text-sm">End Date</label>
              <DateInput />
              <Button
                variant="outlined"
                size="small"
                style={{ marginTop: "20px" }}
              >
                Calculate
              </Button>
            </FormControl>
          </div>
        </div>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph style={{ textAlign: "center" }}>
            R.A. 10592 GCTA AND CPI INSTRUCTIONS
          </Typography>
          <Typography paragraph>
            <p>GCTA CUT OFF DATES:</p>
            <p className="pt-2">First Week - Day 1 to 7 - 20 GCTA Credits</p>
            <p>Second Week - Day 8 to 15 - 15 GCTA Credits</p>
            <p>Third Week - Day 16 to 22 - 10 GCTA Credits</p>
            <p>Fourth Week - Day 23 to 31 - 5 GCTA Credits</p>
          </Typography>

          <Typography paragraph>
            <p>GCTA CREDITED POINTS:</p>
            <p className="pt-2">
              First two years of imprisonment = 20 GCTA Credits
            </p>
            <p>Three to Five years of imprisonment = 23 GCTA Credits</p>
            <p>Six to ten years of imprisonment = 25 GCTA Credits</p>
            <p>Ten to suvvessive years of imprisonment = 30 GCTA Credits</p>
          </Typography>

          <Typography paragraph>
            <p>Credit for Preventive Imprisonment</p>
            <p className="pt-2">
              Period of detention credited for the confinement of a PDL in a
              corectional facility before final judgement of a court of law.
            </p>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default GctaCalculator;
