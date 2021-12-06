import {
    Box,
    Stack,
    Link,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
  } from '@chakra-ui/react';

import {
    ChevronDownIcon,
  } from '@chakra-ui/icons';

import NextLink from 'next/link';

import NAV_ITEMS from './NavData';

import DesktopSubNav from './DesktopSubNav';

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'} gutter={0}>
              <PopoverTrigger>
                <Box>
                  <NextLink href={navItem.href ?? '#'} passHref={true}>
                    <Link
                      p={2}
                      fontSize={'sm'}
                      fontWeight={500}
                      color={linkColor}
                      _hover={{
                        textDecoration: 'none',
                        color: linkHoverColor,
                      }}>
                      {navItem.label}
                      {navItem.children && (
                        <Icon
                          as={ChevronDownIcon}
                          w={5}
                          h={5}
                          ml={1}
                        />
                      )}
                    </Link>
                  </NextLink>
                </Box>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };

export default DesktopNav;