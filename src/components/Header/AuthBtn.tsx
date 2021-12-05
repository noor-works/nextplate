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
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button>
            <Button
              variant={'outline'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              href={'#'}>
              Sign Up
            </Button>
          </Stack>
      </>
    );
  };
  
  export default AuthBtn;