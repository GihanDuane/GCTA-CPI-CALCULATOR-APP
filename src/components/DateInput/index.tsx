import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

interface DateInputProps {
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
  error?: boolean;
}

const DateInput: React.FC<DateInputProps> = ({ value, onChange, error }) => {
  const adaptedValue = value ? dayjs(value) : null;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="pt-2">
        <DatePicker
          label={error ? "This field is required!" : "Select date"}
          value={adaptedValue}
          onChange={onChange}
          slotProps={{
            textField: {
              error: error,
              // helperText: error ? "This field is required" : "",
            },
          }}
        />
      </div>
    </LocalizationProvider>
  );
};

export default DateInput;
