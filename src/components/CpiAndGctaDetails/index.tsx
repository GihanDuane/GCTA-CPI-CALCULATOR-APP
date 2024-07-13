import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import calculateYearsMonthsDays from "../../calculateYearsMonthsDays";
import React from "react";

interface CpiAndGctaDetailsProps {
  cpiResult: number | null;
  cpiYears: number | null;
  cpiMonths: number | null;
  cpiDays: number | null;

  totalGctaPoints: number;
  gctaPoints20: number;
  gctaPoints23: number;
  gctaPoints25: number;
  gctaPoints30: number;

  hiddenComponentTotalValue: number | null;
  showHiddenComponent: boolean; // New prop to control visibility
}

const CpiAndGctaDetails: React.FC<CpiAndGctaDetailsProps> = ({
  cpiResult,
  cpiYears,
  cpiMonths,
  cpiDays,

  totalGctaPoints,
  gctaPoints20,
  gctaPoints23,
  gctaPoints25,
  gctaPoints30,

  hiddenComponentTotalValue,
  showHiddenComponent,
}) => {
  // State to hold the calculated years, months, and days
  const [yearsMonthsDays, setYearsMonthsDays] = React.useState<{
    years: number | null;
    months: number | null;
    days: number | null;
  }>({ years: null, months: null, days: null });

  // State to hold the calculated years, months, and days for totalGctaPoints
  const [totalGctaYearsMonthsDays, setTotalGctaYearsMonthsDays] =
    React.useState<{
      years: number | null;
      months: number | null;
      days: number | null;
    }>({ years: null, months: null, days: null });

  React.useEffect(() => {
    if (hiddenComponentTotalValue !== null) {
      const { years, months, days } = calculateYearsMonthsDays(
        hiddenComponentTotalValue
      );
      setYearsMonthsDays({ years, months, days });
    }
  }, [hiddenComponentTotalValue]);

  React.useEffect(() => {
    const { years, months, days } = calculateYearsMonthsDays(totalGctaPoints);
    setTotalGctaYearsMonthsDays({ years, months, days });
  }, [totalGctaPoints]);

  return (
    <div className="mt-10 flex flex-row items-center justify-center w-full gap-5">
      <Card style={{ width: "auto", background: "white" }}>
        <Typography fontSize={12} style={{ padding: 10 }}>
          CPI Result
        </Typography>

        <CardContent>
          <p className="text-sm">
            Total Days Earned From Date of Arrest to Present
          </p>

          <p className="text-sm pt-12">
            <span>
              Total: <span>{cpiResult !== null ? cpiResult : "N/A"} Days</span>
            </span>
          </p>
          <p className="text-sm pt-3">
            <span>Or:</span>{" "}
            {cpiYears !== null && cpiMonths !== null && cpiDays !== null
              ? `${cpiYears} Years, ${cpiMonths} Months, ${cpiDays} Days`
              : "N/A"}
          </p>
        </CardContent>
      </Card>

      <Card style={{ width: "auto", background: "white" }}>
        <Typography fontSize={12} style={{ padding: 10 }}>
          GCTA Result
        </Typography>

        {!showHiddenComponent ? (
          <CardContent>
            <p className="text-sm font-bold">
              Total Gcta Earned From Date of Arrest to Present
            </p>
            <p className="text-sm">
              1-2 years total GCTA points: {gctaPoints20}
            </p>
            <p className="text-sm">
              3-5 years total GCTA points: {gctaPoints23}
            </p>
            <p className="text-sm">
              6-10 years total GCTA points: {gctaPoints25}
            </p>
            <p className="text-sm">
              11 years above total GCTA points: {gctaPoints30}
            </p>
            <p className="text-sm">Total GCTA points: {totalGctaPoints}</p>
            <p className="text-sm">
              <span>Or: </span>
              {totalGctaYearsMonthsDays.years !== null &&
              totalGctaYearsMonthsDays.months !== null &&
              totalGctaYearsMonthsDays.days !== null
                ? `${totalGctaYearsMonthsDays.years} Years, ${totalGctaYearsMonthsDays.months} Months, ${totalGctaYearsMonthsDays.days} Days`
                : "N/A"}
            </p>
          </CardContent>
        ) : (
          <CardContent>
            <div className="">
              <p className="text-sm mb-10 font-bold">
                Total Gcta Earned with existing Gcta points
              </p>
              <p className="text-sm pb-5">
                Total GCTA points:
                {hiddenComponentTotalValue !== null
                  ? hiddenComponentTotalValue
                  : "N/A"}
              </p>

              <p className="text-sm">
                <span>Or: </span>
                {yearsMonthsDays.years !== null &&
                yearsMonthsDays.months !== null &&
                yearsMonthsDays.days !== null
                  ? `${yearsMonthsDays.years} Years, ${yearsMonthsDays.months} Months, ${yearsMonthsDays.days} Days`
                  : "N/A"}
              </p>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default CpiAndGctaDetails;
