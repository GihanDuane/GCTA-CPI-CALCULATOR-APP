import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface CpiAndGctaDetailsProps {
  cpiResult: number | null;
  cpiYears: number | null;
  cpiMonths: number | null;
  cpiDays: number | null;
}

const CpiAndGctaDetails: React.FC<CpiAndGctaDetailsProps> = ({
  cpiResult,
  cpiYears,
  cpiMonths,
  cpiDays,
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
            Total Days Earned From Date of Arrest to Present
          </p>
          <p className="text-sm">
            Total: <span>Years/Months/Days</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CpiAndGctaDetails;
