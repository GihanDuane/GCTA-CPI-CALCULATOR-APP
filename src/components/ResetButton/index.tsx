import Button from "@mui/material/Button";
import React from "react";

interface ResetButtonProps {
  isCustomStyle?: boolean;
}

const ResetButton: React.FC<ResetButtonProps> = ({ isCustomStyle = false }) => {
  const buttonStyle = isCustomStyle
    ? { width: "98.97px", marginTop: "20px" }
    : {};

  return (
    <Button variant="outlined" size="small" style={buttonStyle}>
      Reset
    </Button>
  );
};

export default ResetButton;
