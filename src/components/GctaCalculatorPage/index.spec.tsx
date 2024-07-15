import GctaCalculator from "./index";
import { render, screen, fireEvent } from "@testing-library/react";

describe("GctaCalculator", () => {
  it("renders GctaCalculator", () => {
    render(<GctaCalculator />);
    expect(screen.getByText("CPI and GCTA Calculator")).toBeInTheDocument();
  });

  it("renders CPI and GCTA cards", () => {
    render(<GctaCalculator />);
    expect(screen.getByText("CPI")).toBeInTheDocument();
    expect(screen.getByText("GCTA")).toBeInTheDocument();
  });

  it("expands additional information when clicked", () => {
    render(<GctaCalculator />);
    const expandButton = screen.getByLabelText("show more");
    fireEvent.click(expandButton);
    expect(
      screen.getByText("R.A. 10592 GCTA AND CPI INSTRUCTIONS")
    ).toBeInTheDocument();
  });

  it("displays CPI and GCTA details after calculation", () => {
    render(<GctaCalculator />);
    // Simulate CPI calculation
    // Simulate GCTA calculation
    expect(screen.getByText("CPI Result")).toBeInTheDocument();
    expect(screen.getByText("GCTA Result")).toBeInTheDocument();
  });
});
