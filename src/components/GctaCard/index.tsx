import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import React from "react";
import DateInput from "@components/DateInput";
import Button from "@mui/material/Button";
import { Dayjs } from "dayjs";
import HiddenComponent from "@components/HiddenComponent";
import Dropdown from "@components/DropDown";
import ResetButton from "@components/ResetButton";

interface GctaCardProps {
  onCalculate: (
    totalPoints: number,
    points20: number,
    points23: number,
    points25: number,
    points30: number
  ) => void;
  onTotalValueChange: (totalValue: number) => void; // Add this prop
  onShowHiddenComponentChange: (show: boolean) => void; // New prop to notify parent component
}

const getMonthly20Points = (): Record<string, number> => {
  // Define points for each month (January to December)
  return {
    January: 20,
    February: 20,
    March: 20,
    April: 20,
    May: 20,
    June: 20,
    July: 20,
    August: 20,
    September: 20,
    October: 20,
    November: 20,
    December: 20,
  };
};

const getMonthly23Points = (): Record<string, number> => {
  // Define points for each month (January to December)
  return {
    January: 23,
    February: 23,
    March: 23,
    April: 23,
    May: 23,
    June: 23,
    July: 23,
    August: 23,
    September: 23,
    October: 23,
    November: 23,
    December: 23,
  };
};

const getMonthly25Points = (): Record<string, number> => {
  // Define points for each month (January to December)
  return {
    January: 25,
    February: 25,
    March: 25,
    April: 25,
    May: 25,
    June: 25,
    July: 25,
    August: 25,
    September: 25,
    October: 25,
    November: 25,
    December: 25,
  };
};

const getMonthly30Points = (): Record<string, number> => {
  // Define points for each month (January to December)
  return {
    January: 30,
    February: 30,
    March: 30,
    April: 30,
    May: 30,
    June: 30,
    July: 30,
    August: 30,
    September: 30,
    October: 30,
    November: 30,
    December: 30,
  };
};

const getInitialGctaPoints = (day: number): number => {
  if (day >= 1 && day <= 7) return 20;
  if (day >= 8 && day <= 15) return 15;
  if (day >= 16 && day <= 22) return 10;
  if (day >= 23 && day <= 31) return 5;
  return 0; // Default case, should not happen
};

const GctaCard: React.FC<GctaCardProps> = ({
  onCalculate,
  onTotalValueChange,
  onShowHiddenComponentChange,
}) => {
  const [dateOfDetention, setDateOfDetention] = React.useState<Dayjs | null>(
    null
  );
  const [endDate, setEndDate] = React.useState<Dayjs | null>(null);

  const [showHiddenComponent, setShowHiddenComponent] = React.useState(false);
  const [showDateInputs, setShowDateInputs] = React.useState(true); // State to control visibility of DateInputs

  const [dateOfDetentionError, setDateOfDetentionError] = React.useState(false);
  const [endDateError, setEndDateError] = React.useState(false);

  const handleDateOfDetentionChange = (newValue: Dayjs | null) => {
    setDateOfDetention(newValue);
    if (newValue) {
      setDateOfDetentionError(false);
      const dayOfDetention = newValue.date();
      const initialPoints = getInitialGctaPoints(dayOfDetention);
      console.log(`Selected Date: ${newValue.format("YYYY-MM-DD")}`);
      console.log(`Initial GCTA Points: ${initialPoints}`);
    }
  };

  const handleEndDateChange = (newValue: Dayjs | null) => {
    setEndDate(newValue);
    if (newValue) {
      setEndDateError(false);
    }
  };

  const handleShowHiddenComponent = () => {
    setShowHiddenComponent(true);
    setShowDateInputs(false); // Hide DateInputs when showing HiddenComponent
    onShowHiddenComponentChange(true); // Notify parent component
  };

  const handleHideHiddenComponent = () => {
    setShowHiddenComponent(false);
    setShowDateInputs(true); // Show DateInputs when hiding HiddenComponent
    onShowHiddenComponentChange(false); // Notify parent component
  };

  const handleReset = () => {
    setDateOfDetention(null);
    setEndDate(null);
    onCalculate(0, 0, 0, 0, 0);
    onTotalValueChange(0);
  };

  const handleCalculate = () => {
    let hasError = false;

    if (!dateOfDetention) {
      setDateOfDetentionError(true);
      hasError = true;
    }

    if (!endDate) {
      setEndDateError(true);
      hasError = true;
    }

    if (hasError) return;

    if (dateOfDetention && endDate) {
      const monthly20Points = getMonthly20Points();
      const monthly23Points = getMonthly23Points();
      const monthly25Points = getMonthly25Points();
      const monthly30Points = getMonthly30Points();
      const initialPoints = getInitialGctaPoints(dateOfDetention.date());

      let totalGctaPoints = initialPoints;
      console.log(`Initial Points for Detention Month: ${initialPoints}`);

      let currentMonth = dateOfDetention.clone().startOf("month");
      const endMonth = endDate.clone().startOf("month");
      let monthCounter = 0;
      let gctaPoints20 = 0;
      let gctaPoints23 = 0;
      let gctaPoints25 = 0;
      let gctaPoints30 = 0;

      while (currentMonth.isBefore(endMonth) || currentMonth.isSame(endMonth)) {
        const monthName = currentMonth.format("MMMM");

        let pointsAdded;
        if (monthCounter < 36) {
          pointsAdded = monthly20Points[monthName];
          gctaPoints20 += pointsAdded;
        } else if (monthCounter < 72) {
          pointsAdded = monthly23Points[monthName];
          gctaPoints23 += pointsAdded;
        } else if (monthCounter < 132) {
          pointsAdded = monthly25Points[monthName];
          gctaPoints25 += pointsAdded;
        } else {
          pointsAdded = monthly30Points[monthName];
          gctaPoints30 += pointsAdded;
        }

        if (!currentMonth.isSame(dateOfDetention.startOf("month"))) {
          totalGctaPoints += pointsAdded;
        } else {
          pointsAdded = initialPoints;
        }

        console.log(`GCTA Points added (${monthName}): ${pointsAdded}`);

        if (monthCounter === 35) {
          console.log(`Total GCTA Points before 36 months: ${totalGctaPoints}`);
        }

        if (monthCounter === 71) {
          console.log(`Total GCTA Points before 72 months: ${totalGctaPoints}`);
        }

        if (monthCounter === 131) {
          console.log(
            `Total GCTA Points before 132 months: ${totalGctaPoints}`
          );
        }

        currentMonth = currentMonth.add(1, "month");
        monthCounter += 1;

        console.log(`Current Month: ${currentMonth.format("MMMM YYYY")}`);
        console.log(`Total GCTA Points after ${monthName}: ${totalGctaPoints}`);
      }

      console.log(`Total GCTA Points: ${totalGctaPoints}`);
      onCalculate(
        totalGctaPoints,
        gctaPoints20,
        gctaPoints23,
        gctaPoints25,
        gctaPoints30
      );
    }
  };

  return (
    <CardContent>
      <FormControl>
        <div className="flex flex-row justify-between items-center pb-5">
          <Typography variant="h6" style={{ paddingLeft: "70px" }}>
            GCTA
          </Typography>
          <Dropdown
            onShowHiddenComponent={handleShowHiddenComponent}
            onHideHiddenComponent={handleHideHiddenComponent}
            showHiddenComponent={showHiddenComponent}
          />
        </div>

        {showDateInputs && ( // Conditionally render DateInputs and labels
          <>
            <label className="text-sm">Date of Detention</label>
            <DateInput
              value={dateOfDetention}
              onChange={handleDateOfDetentionChange}
              error={dateOfDetentionError}
            />
            <br />

            <label className="text-sm">End Date</label>
            <DateInput
              value={endDate}
              onChange={handleEndDateChange}
              error={endDateError}
            />

            <div className="flex items-center justify-between">
              <ResetButton isCustomStyle={true} onClick={handleReset} />

              <Button
                variant="outlined"
                size="small"
                style={{ marginTop: "20px" }}
                onClick={handleCalculate}
              >
                Calculate
              </Button>
            </div>
          </>
        )}

        {showHiddenComponent && (
          <HiddenComponent onTotalValueChange={onTotalValueChange} />
        )}
      </FormControl>
    </CardContent>
  );
};

export default GctaCard;
