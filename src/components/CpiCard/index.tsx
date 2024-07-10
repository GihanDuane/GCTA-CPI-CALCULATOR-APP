import DateInput from "@components/DateInput";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import React from "react";
import { Dayjs } from "dayjs";
import { convertDaysToYMD } from "../../dateUtils";

interface CpiProps {
  setCpiResult: (result: number | null) => void;
  setCpiYears: (years: number | null) => void;
  setCpiMonths: (months: number | null) => void;
  setCpiDays: (days: number | null) => void;
}

const CpiCard: React.FC<CpiProps> = ({
  setCpiResult,
  setCpiYears,
  setCpiMonths,
  setCpiDays,
}) => {
  const [cpiStartDate, setCpiStartDate] = React.useState<Dayjs | null>(null);
  const [cpiEndDate, setCpiEndDate] = React.useState<Dayjs | null>(null);

  const handleCalculateCpi = () => {
    if (cpiStartDate && cpiEndDate) {
      if (cpiStartDate && cpiEndDate) {
        const diffDays = cpiEndDate.diff(cpiStartDate, "day");
        setCpiResult(diffDays);

        const { years, months, days } = convertDaysToYMD(diffDays);
        setCpiYears(years);
        setCpiMonths(months);
        setCpiDays(days);
      }
    }
  };
  return (
    <CardContent>
      <div>
        <FormControl>
          <Typography
            variant="h6"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            CPI
          </Typography>
          <label className="text-sm">Date of Arrest</label>
          <DateInput value={cpiStartDate} onChange={setCpiStartDate} />

          <br />
          <label className="text-sm">End Date</label>
          <DateInput value={cpiEndDate} onChange={setCpiEndDate} />
          <Button
            variant="outlined"
            size="small"
            style={{ marginTop: "20px" }}
            onClick={handleCalculateCpi}
          >
            Calculate
          </Button>
        </FormControl>
      </div>
    </CardContent>
  );
};

export default CpiCard;
