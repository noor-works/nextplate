import {
    Text,
    useColorModeValue,
    useBreakpointValue,
  } from '@chakra-ui/react';

const Logo = () => {
    return (
      <>
        <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              Logo
        </Text>
      </>
    );
  };
  
  export default Logo;