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
          _hover={{ color: 'gray.800' }}
          href={'#'}>
          Sign In
        </Button>
        <Button
          rounded={'full'}
          display={{ base: 'none', md: 'inline-flex' }}
          fontSize={'sm'}
          fontWeight={600}
          px={6}
          color={'gray.50'}
          bg={'gray.500'}
          _hover={{ bg: 'gray.600', color: 'gray.50' }}
          href={'#'}>
          Sign Up
        </Button>
      </Stack>
    </>
  );
};

export default AuthBtn;