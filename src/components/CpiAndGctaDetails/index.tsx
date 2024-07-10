import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CpiAndGctaDetails = () => {
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
            Total: <span>Years/Months/Days</span>
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
