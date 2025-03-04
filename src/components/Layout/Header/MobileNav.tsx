import {
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

import NAV_ITEMS from './NavData';

import MobileNavItem from './MobileNavItem';

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      py={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNav;