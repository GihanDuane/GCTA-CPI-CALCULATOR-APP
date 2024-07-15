import DateInput from "@components/DateInput";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import React from "react";
import { Dayjs } from "dayjs";
import { convertDaysToYMD } from "../../dateUtils";
import ResetButton from "@components/ResetButton";

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
  const [startDateError, setStartDateError] = React.useState(false);
  const [endDateError, setEndDateError] = React.useState(false);

  const handleCalculateCpi = () => {
    let hasError = false;

    if (!cpiStartDate) {
      setStartDateError(true);
      hasError = true;
    }

    if (!cpiEndDate) {
      setEndDateError(true);
      hasError = true;
    }

    if (hasError || !cpiStartDate || !cpiEndDate) return;

    const diffDays = cpiEndDate.diff(cpiStartDate, "day");
    setCpiResult(diffDays);

    const { years, months, days } = convertDaysToYMD(diffDays);
    setCpiYears(years);
    setCpiMonths(months);
    setCpiDays(days);
  };

  const handleStartDateChange = (newValue: Dayjs | null) => {
    setCpiStartDate(newValue);
    if (newValue) {
      setStartDateError(false);
    }
  };

  const handleEndDateChange = (newValue: Dayjs | null) => {
    setCpiEndDate(newValue);
    if (newValue) {
      setEndDateError(false);
    }
  };

  const handleReset = () => {
    setCpiStartDate(null);
    setCpiEndDate(null);
    setStartDateError(false);
    setEndDateError(false);
    setCpiResult(null);
    setCpiYears(null);
    setCpiMonths(null);
    setCpiDays(null);
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
          <DateInput
            value={cpiStartDate}
            onChange={handleStartDateChange}
            error={startDateError}
          />

          <br />
          <label className="text-sm">End Date</label>
          <DateInput
            value={cpiEndDate}
            onChange={handleEndDateChange}
            error={endDateError}
          />

          <div className="flex items-center justify-between">
            <ResetButton isCustomStyle={true} onClick={handleReset} />

            <Button
              variant="outlined"
              size="small"
              style={{ marginTop: "20px" }}
              onClick={handleCalculateCpi}
            >
              Calculate
            </Button>
          </div>
        </FormControl>
      </div>
    </CardContent>
  );
};

export default CpiCard;
