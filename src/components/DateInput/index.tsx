import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DateInput = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="pt-2">
        <DatePicker label="Select date" />
      </div>
    </LocalizationProvider>
  );
};
export default DateInput;
