import { render, screen } from "@testing-library/react";
import DateInput from "./index";

describe("DateInput", () => {
  it("renders with label", () => {
    render(<DateInput value={null} onChange={() => {}} />);
    expect(screen.getByLabelText("Select date")).toBeInTheDocument();
  });

  it("displays error state", () => {
    render(<DateInput value={null} onChange={() => {}} error={true} />);
    const errorMessages = screen.getAllByText("This field is required!");
    expect(errorMessages.length).toBeGreaterThan(0);
  });
});
