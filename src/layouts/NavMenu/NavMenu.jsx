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
  } from '@chakra-ui/react'
const NavMenu = ({children}) => {
  return (
    <Menu>
  <MenuButton as={Box} >
    {children}
  </MenuButton>
  <MenuList>
    <MenuItem>Our Flavours</MenuItem>
    <MenuItem> Our News</MenuItem>
    <MenuItem>About Us </MenuItem>
    <MenuItem>Download</MenuItem>
  </MenuList>
</Menu>
  )
}

export default NavMenu