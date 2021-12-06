import {
    Text,
    useColorModeValue,
    useBreakpointValue,
  } from '@chakra-ui/react';

import NextLink from 'next/link';

const Logo = () => {
    return (
      <>
        <NextLink href='/' passHref={true}>
          <Text
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                fontFamily={'heading'}
                fontWeight={600}
                cursor={'pointer'}
                color={useColorModeValue('gray.800', 'white')}>
                Logo
          </Text>
        </NextLink>
      </>
    );
  };
  
  export default Logo;