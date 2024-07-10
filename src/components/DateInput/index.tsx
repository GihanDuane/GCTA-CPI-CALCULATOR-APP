import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

interface DateInputProps {
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
}

const DateInput: React.FC<DateInputProps> = ({ value, onChange }) => {
  const adaptedValue = value ? dayjs(value) : null;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="pt-2">
        <DatePicker
          label="Select date"
          value={adaptedValue}
          onChange={onChange}
        />
      </div>
    </LocalizationProvider>
  );
};

export default DateInput;
