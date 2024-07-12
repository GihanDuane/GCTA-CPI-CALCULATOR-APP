import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";

interface DropDownProps {
  onShowHiddenComponent: () => void;
  onHideHiddenComponent: () => void;
  showHiddenComponent: boolean;
}

const Dropdown: React.FC<DropDownProps> = ({
  onShowHiddenComponent,
  onHideHiddenComponent,
  showHiddenComponent,
}) => {
  const handleClickShow = () => {
    onShowHiddenComponent();
  };

  const handleClickHide = () => {
    onHideHiddenComponent();
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex">
          <MoreVertIcon />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {!showHiddenComponent ? (
            <MenuItem>
              <a
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 cursor-pointer"
                onClick={handleClickShow}
              >
                With Existing Gcta
              </a>
            </MenuItem>
          ) : (
            <MenuItem>
              <a
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 cursor-pointer"
                onClick={handleClickHide}
              >
                Without Existing Gcta
              </a>
            </MenuItem>
          )}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default Dropdown;
