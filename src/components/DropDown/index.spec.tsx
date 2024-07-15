import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./index";

describe("Dropdown", () => {
  const mockShowHiddenComponent = jest.fn();
  const mockHideHiddenComponent = jest.fn();

  it("renders the dropdown button", () => {
    render(
      <Dropdown
        onShowHiddenComponent={mockShowHiddenComponent}
        onHideHiddenComponent={mockHideHiddenComponent}
        showHiddenComponent={false}
      />
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it('shows "With Existing Gcta" when showHiddenComponent is false', () => {
    render(
      <Dropdown
        onShowHiddenComponent={mockShowHiddenComponent}
        onHideHiddenComponent={mockHideHiddenComponent}
        showHiddenComponent={false}
      />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("With Existing Gcta")).toBeInTheDocument();
  });

  it('shows "Without Existing Gcta" when showHiddenComponent is true', () => {
    render(
      <Dropdown
        onShowHiddenComponent={mockShowHiddenComponent}
        onHideHiddenComponent={mockHideHiddenComponent}
        showHiddenComponent={true}
      />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Without Existing Gcta")).toBeInTheDocument();
  });

  it('calls onShowHiddenComponent when "With Existing Gcta" is clicked', () => {
    render(
      <Dropdown
        onShowHiddenComponent={mockShowHiddenComponent}
        onHideHiddenComponent={mockHideHiddenComponent}
        showHiddenComponent={false}
      />
    );
    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("With Existing Gcta"));
    expect(mockShowHiddenComponent).toHaveBeenCalled();
  });

  it('calls onHideHiddenComponent when "Without Existing Gcta" is clicked', () => {
    render(
      <Dropdown
        onShowHiddenComponent={mockShowHiddenComponent}
        onHideHiddenComponent={mockHideHiddenComponent}
        showHiddenComponent={true}
      />
    );
    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("Without Existing Gcta"));
    expect(mockHideHiddenComponent).toHaveBeenCalled();
  });
});
