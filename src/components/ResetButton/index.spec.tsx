import { render, screen, fireEvent } from "@testing-library/react";
import ResetButton from "./index";

describe("ResetButton", () => {
  it("renders with default text", () => {
    render(<ResetButton onClick={() => {}} />);
    const button = screen.getByText("Reset");
    expect(button).toBeInTheDocument();
  });

  it("renders with custom style when isCustomStyle is true", () => {
    render(<ResetButton onClick={() => {}} isCustomStyle={true} />);
    const button = screen.getByText("Reset");
    expect(button).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<ResetButton onClick={handleClick} />);
    fireEvent.click(screen.getByText("Reset"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
