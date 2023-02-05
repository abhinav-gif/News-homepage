import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  VStack,
  Link,
} from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi';

const SideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} className={'DrawerBtn'} display={'none'}>
        <BiMenu size={20} />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button variant={'none'} _hover={{ color: ' hsl(5, 85%, 63%)' }}>
                <Link href="/home" _hover={{ textDecoration: 'none' }}>
                  Home
                </Link>
              </Button>
              <Button variant={'none'} _hover={{ color: ' hsl(5, 85%, 63%)' }}>
                <Link href="/new" _hover={{ textDecoration: 'none' }}>
                  New
                </Link>
              </Button>
              <Button variant={'none'} _hover={{ color: ' hsl(5, 85%, 63%)' }}>
                <Link href="/popular" _hover={{ textDecoration: 'none' }}>
                  Popular
                </Link>
              </Button>
              <Button variant={'none'} _hover={{ color: ' hsl(5, 85%, 63%)' }}>
                <Link href="/trending" _hover={{ textDecoration: 'none' }}>
                  Trending
                </Link>
              </Button>
              <Button variant={'none'} _hover={{ color: ' hsl(5, 85%, 63%)' }}>
                <Link href="/categories" _hover={{ textDecoration: 'none' }}>
                  Categories
                </Link>
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
