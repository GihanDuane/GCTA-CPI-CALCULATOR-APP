import { render, screen, fireEvent } from "@testing-library/react";
import CpiCard from "./index";

describe("CpiCard", () => {
  const mockSetCpiResult = jest.fn();
  const mockSetCpiYears = jest.fn();
  const mockSetCpiMonths = jest.fn();
  const mockSetCpiDays = jest.fn();

  beforeEach(() => {
    render(
      <CpiCard
        setCpiResult={mockSetCpiResult}
        setCpiYears={mockSetCpiYears}
        setCpiMonths={mockSetCpiMonths}
        setCpiDays={mockSetCpiDays}
      />
    );
  });

  it("renders CPI title", () => {
    expect(screen.getByText("CPI")).toBeInTheDocument();
  });

  it("renders Date of Arrest input", () => {
    const dateOfArrestLabel = screen.getByText("Date of Arrest");
    const dateOfArrestInput =
      dateOfArrestLabel.nextElementSibling?.querySelector("input");
    expect(dateOfArrestInput).toBeInTheDocument();
  });

  it("renders End Date input", () => {
    const endDateInput = screen.getAllByPlaceholderText("MM/DD/YYYY")[1];
    expect(endDateInput).toBeInTheDocument();
  });

  it("renders Calculate button", () => {
    expect(screen.getByText("Calculate")).toBeInTheDocument();
  });

  it("shows error when Calculate is clicked without dates", () => {
    fireEvent.click(screen.getByText("Calculate"));
    const errorLabels = screen.getAllByLabelText("This field is required!");
    expect(errorLabels).toHaveLength(2);
  });
});
