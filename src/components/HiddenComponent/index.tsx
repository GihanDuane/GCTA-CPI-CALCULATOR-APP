import TextField from "@mui/material/TextField";
import * as React from "react";

const HiddenComponent: React.FC = () => {
  return (
    <div className="mt-7 pb-[60.5px]">
      <div>
        <TextField
          id="outlined-basic"
          label="Type Existing Gcta"
          variant="outlined"
          sx={{ width: "216px" }}
        />
      </div>

      <div className="flex justify-evenly mt-4">
        <div className="flex items-center flex-col">
          <label className="text-[12px]">20</label>
          <input
            type="radio"
            id="existingGcta"
            name="existingGcta"
            value="yes"
          />
        </div>
        <div className="flex items-center flex-col">
          <label className="text-[12px]">23</label>
          <input
            type="radio"
            id="existingGcta"
            name="existingGcta"
            value="yes"
          />
        </div>
        <div className="flex items-center flex-col">
          <label className="text-[12px]">25</label>
          <input
            type="radio"
            id="existingGcta"
            name="existingGcta"
            value="yes"
          />
        </div>
        <div className="flex items-center flex-col">
          <label className="text-[12px]">30</label>
          <input
            type="radio"
            id="existingGcta"
            name="existingGcta"
            value="yes"
          />
        </div>
      </div>
    </div>
  );
};

export default HiddenComponent;
