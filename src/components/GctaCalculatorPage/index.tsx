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
// import { Fullscreen } from "@mui/icons-material";
// import { Button, FormControl } from "@mui/material";
// import { text } from "stream/consumers";
import GctaCard from "@components/GctaCard";
import CpiCard from "@components/CpiCard";
import CpiAndGctaDetails from "@components/CpiAndGctaDetails";
import BalanceIcon from "@mui/icons-material/Balance";

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

const GctaCalculatorPage: React.FC = ({}) => {
  const [expanded, setExpanded] = React.useState(false);

  const [cpiResult, setCpiResult] = React.useState<number | null>(null);
  const [cpiDays, setCpiDays] = React.useState<number | null>(null);
  const [cpiMonths, setCpiMonths] = React.useState<number | null>(null);
  const [cpiYears, setCpiYears] = React.useState<number | null>(null);

  const [totalGctaPoints, setTotalGctaPoints] = React.useState<number>(0);
  const [gctaPoints20, setGctaPoints20] = React.useState<number>(0);
  const [gctaPoints23, setGctaPoints23] = React.useState<number>(0);
  const [gctaPoints25, setGctaPoints25] = React.useState<number>(0);
  const [gctaPoints30, setGctaPoints30] = React.useState<number>(0);

  const [hiddenComponentTotalValue, setHiddenComponentTotalValue] =
    React.useState<number | null>(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCalculate = (
    totalPoints: number,
    points20: number,
    points23: number,
    points25: number,
    points30: number
  ) => {
    setTotalGctaPoints(totalPoints);
    setGctaPoints20(points20);
    setGctaPoints23(points23);
    setGctaPoints25(points25);
    setGctaPoints30(points30);
  };

  const handleHiddenComponentTotalValueChange = (value: number) => {
    setHiddenComponentTotalValue(value);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Card sx={{ maxWidth: 500 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "gray" }} aria-label="Prison">
              <Typography fontSize={12}>BJMP</Typography>
            </Avatar>
          }
          action={
            <div aria-label="settings">
              <IconButton>
                <BalanceIcon />
              </IconButton>
            </div>
          }
          title="CPI and GCTA Calculator"
          style={{ textAlign: "center", color: "black" }}
          subheader="@Duane"
        />

        <div className="flex flex-row justify-between">
          <CpiCard
            setCpiResult={setCpiResult}
            setCpiDays={setCpiDays}
            setCpiMonths={setCpiMonths}
            setCpiYears={setCpiYears}
          />

          <GctaCard
            onCalculate={handleCalculate}
            onTotalValueChange={handleHiddenComponentTotalValueChange}
          />
        </div>

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
          <CardContent
            style={{
              scrollBehavior: "auto",
              overflow: "scroll",
              height: "200px",
            }}
          >
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

      <CpiAndGctaDetails
        cpiResult={cpiResult}
        cpiYears={cpiYears}
        cpiMonths={cpiMonths}
        cpiDays={cpiDays}
        totalGctaPoints={totalGctaPoints}
        gctaPoints20={gctaPoints20}
        gctaPoints23={gctaPoints23}
        gctaPoints25={gctaPoints25}
        gctaPoints30={gctaPoints30}
        hiddenComponentTotalValue={hiddenComponentTotalValue}
      />
    </div>
  );
};

export default GctaCalculatorPage;
