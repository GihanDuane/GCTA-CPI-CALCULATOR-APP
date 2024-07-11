import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
}) => {
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

          <p className="text-sm">
            <span>
              Total: <span>{cpiResult !== null ? cpiResult : "N/A"} Days</span>
            </span>
          </p>
          <p className="text-sm">
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

        <CardContent>
          <p className="text-sm">
            Total Gcta Earned From Date of Arrest to Present
          </p>
          <p className="text-sm">1-2 years total GCTA points: {gctaPoints20}</p>
          <p className="text-sm">3-5 years total GCTA points: {gctaPoints23}</p>
          <p className="text-sm">
            6-10 years total GCTA points: {gctaPoints25}
          </p>
          <p className="text-sm">
            11 years above total GCTA points: {gctaPoints30}
          </p>

          <p className="text-sm">Total GCTA points: {totalGctaPoints}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CpiAndGctaDetails;
