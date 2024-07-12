import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";

interface HiddenComponentProps {
  onTotalValueChange: (totalValue: number) => void;
}

const HiddenComponent: React.FC<HiddenComponentProps> = ({
  onTotalValueChange,
}) => {
  const [inputValue, setInputValue] = React.useState("");
  const [selectedRadioValue, setSelectedRadioValue] = React.useState("");
  const [totalValue, setTotalValue] = React.useState<number | null>(null);

  const handleCalculate = () => {
    const numericValue = parseInt(inputValue, 10);
    const radioValue = parseInt(selectedRadioValue, 10);

    if (!isNaN(numericValue) && !isNaN(radioValue)) {
      const calculatedValue = numericValue + radioValue;
      setTotalValue(calculatedValue);
      setInputValue(calculatedValue.toString()); // Update input value to show total
      onTotalValueChange(calculatedValue); // Pass totalValue to parent component
      console.log(`Hidden Component Total Value: ${calculatedValue}`);
    } else {
      console.error("Invalid input or radio value.");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setTotalValue(null); // Reset total value if input value changes manually
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadioValue(event.target.value);
    setTotalValue(null); // Reset total value if radio value changes
  };

  return (
    <>
      <div className="mt-7 pb-[60.5px]">
        <div>
          <TextField
            id="outlined-basic"
            label="Type Existing Gcta"
            variant="outlined"
            sx={{ width: "216px" }}
            value={inputValue}
            onChange={handleInputChange}
            placeholder={totalValue !== null ? totalValue.toString() : ""}
          />
        </div>

        <div className="flex justify-evenly mt-4">
          <div className="flex items-center flex-col">
            <label className="text-[12px]">20</label>
            <input
              type="radio"
              id="existingGcta20"
              name="existingGcta"
              value="20"
              checked={selectedRadioValue === "20"}
              onChange={handleRadioChange}
            />
          </div>
          <div className="flex items-center flex-col">
            <label className="text-[12px]">23</label>
            <input
              type="radio"
              id="existingGcta23"
              name="existingGcta"
              value="23"
              checked={selectedRadioValue === "23"}
              onChange={handleRadioChange}
            />
          </div>
          <div className="flex items-center flex-col">
            <label className="text-[12px]">25</label>
            <input
              type="radio"
              id="existingGcta25"
              name="existingGcta"
              value="25"
              checked={selectedRadioValue === "25"}
              onChange={handleRadioChange}
            />
          </div>
          <div className="flex items-center flex-col">
            <label className="text-[12px]">30</label>
            <input
              type="radio"
              id="existingGcta30"
              name="existingGcta"
              value="30"
              checked={selectedRadioValue === "30"}
              onChange={handleRadioChange}
            />
          </div>
        </div>
      </div>
      <Button
        variant="outlined"
        size="small"
        style={{ marginTop: "20px" }}
        onClick={handleCalculate}
      >
        Calculate
      </Button>
    </>
  );
};

export default HiddenComponent;
