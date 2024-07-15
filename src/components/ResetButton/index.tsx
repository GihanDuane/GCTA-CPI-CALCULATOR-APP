import Button from "@mui/material/Button";
import React from "react";

interface ResetButtonProps {
  isCustomStyle?: boolean;
  onClick?: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({
  isCustomStyle = false,
  onClick,
}) => {
  const buttonStyle = isCustomStyle
    ? { width: "98.97px", marginTop: "20px" }
    : {};

  return (
    <Button
      variant="outlined"
      color="secondary"
      size="small"
      style={buttonStyle}
      onClick={onClick}
    >
      Reset
    </Button>
  );
};

export default ResetButton;
