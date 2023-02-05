import React from 'react';
import { HStack, Heading } from '@chakra-ui/react';
import HeadButton from './HeadButton';
import SideDrawer from './SideDrawer';

const Header = () => {
  return (
    <HStack justifyContent={'space-between'}>
      <Heading fontWeight={800} size={'2xl'}>
        W.
      </Heading>
      <HStack
        display={'flex'}
        justifyContent={'flex-end'}
        width={'100%'}
        className={'Header'}
      >
        <HeadButton value={'Home'} link={'/home'}></HeadButton>
        <HeadButton value={'New'} link={'/new'}></HeadButton>
        <HeadButton value={'Popular'} link={'/popular'}></HeadButton>
        <HeadButton value={'Trending'} link={'/trending'}></HeadButton>
        <HeadButton value={'Categories'} link={'/categories'}></HeadButton>
      </HStack>
      <SideDrawer />
    </HStack>
  );
};

export default Header;
