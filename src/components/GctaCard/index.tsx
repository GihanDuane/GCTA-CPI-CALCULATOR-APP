import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import React from "react";
import DateInput from "@components/DateInput";
import Button from "@mui/material/Button";
import { Dayjs } from "dayjs";

interface GctaCardProps {
  onCalculate: (totalGctaPoints: number) => void; // Updated to pass months only
}

const getInitialGctaPoints = (day: number): number => {
  if (day >= 1 && day <= 7) return 20;
  if (day >= 8 && day <= 15) return 15;
  if (day >= 16 && day <= 22) return 10;
  if (day >= 23 && day <= 31) return 5;
  return 0; // Default case, should not happen
};

const GctaCard: React.FC<GctaCardProps> = ({ onCalculate }) => {
  const [dateOfDetention, setDateOfDetention] = React.useState<Dayjs | null>(
    null
  );
  const [endDate, setEndDate] = React.useState<Dayjs | null>(null);

  const handleDateOfDetentionChange = (newValue: Dayjs | null) => {
    setDateOfDetention(newValue);
    if (newValue) {
      const dayOfDetention = newValue.date();
      const initialPoints = getInitialGctaPoints(dayOfDetention);
      console.log(`Selected Date: ${newValue.format("YYYY-MM-DD")}`);
      console.log(`Initial GCTA Points: ${initialPoints}`);
    }
  };

  const handleEndDateChange = (newValue: Dayjs | null) => {
    setEndDate(newValue);
  };

  const handleCalculate = () => {
    if (dateOfDetention && endDate) {
      const monthsDiff = endDate.diff(dateOfDetention, "month");
      const initialPoints = getInitialGctaPoints(dateOfDetention.date());

      // Calculate total GCTA points
      const totalGctaPoints = initialPoints + 20 * monthsDiff;

      console.log(`Initial GCTA Points: ${initialPoints}`);
      console.log(`Months Difference: ${monthsDiff}`);
      console.log(`Total GCTA Points: ${totalGctaPoints}`);

      onCalculate(totalGctaPoints);
    }
  };

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
        <DateInput
          value={dateOfDetention}
          onChange={handleDateOfDetentionChange}
        />

        <br />
        <label className="text-sm">End Date</label>
        <DateInput value={endDate} onChange={handleEndDateChange} />
        <Button
          variant="outlined"
          size="small"
          style={{ marginTop: "20px" }}
          onClick={handleCalculate}
        >
          Calculate
        </Button>
      </FormControl>
    </CardContent>
  );
};

export default GctaCard;
