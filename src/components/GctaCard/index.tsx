import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import React from "react";
import DateInput from "@components/DateInput";
import Button from "@mui/material/Button";

const GctaCard: React.FC = () => {
  return (
    <CardContent>
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
        <Button variant="outlined" size="small" style={{ marginTop: "20px" }}>
          Calculate
        </Button>
      </FormControl>
    </CardContent>
  );
};

export default GctaCard;
