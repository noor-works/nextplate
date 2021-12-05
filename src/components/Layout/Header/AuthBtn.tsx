import {
    Button,
    Stack
  } from '@chakra-ui/react';

const AuthBtn = () => {
    return (
      <>
        <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={600}
              variant={'link'}
              _hover={{color: 'gray.800'}}
              href={'#'}>
              Sign In
            </Button>
            <Button
              variant={'outline'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              _hover={{bg: 'gray.50', color: 'gray.800'}}
              href={'#'}>
              Sign Up
            </Button>
          </Stack>
      </>
    );
  };
  
  export default AuthBtn;