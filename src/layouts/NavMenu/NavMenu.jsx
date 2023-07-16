import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  Button,
  Box,
  MenuDivider,
} from "@chakra-ui/react";
const NavMenu = ({ children }) => {
  return (
    <Menu>
      <MenuButton as={Box}>{children}</MenuButton>Product
      <MenuList>
        <MenuItem>OUR FEATURES</MenuItem>
        <MenuItem> OUR PRODUCT</MenuItem>
        <MenuItem>ABOUT US </MenuItem>
        <MenuItem>PROVACY POLICY</MenuItem>
        <MenuItem>TERMS AND CONDITION</MenuItem>
        <MenuItem>Download</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
