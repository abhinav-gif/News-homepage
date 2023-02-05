import {
  HStack,
  VStack,
  Image,
  Heading,
  Text,
  Button,
  Card,
  CardHeader,
  Stack,
  StackDivider,
  CardBody,
  Box,
} from '@chakra-ui/react';
import React from 'react';

const ContentBox = () => {
  return (
    <HStack
      py={10}
      alignItems={'flex-start'}
      className={'mobile-cont'}
      marginBottom={10}
    >
      <VStack width={'65%'} marginRight={5} className={'expand'}>
        <Image
          src="/Assets/image-web-3-desktop.jpg"
          className="mobile-img"
        ></Image>
        <HStack py={5} className={'mobile-cont'} alignItems={'flex-start'}>
          <Heading
            size="2xl"
            width={'50%'}
            paddingRight={8}
            className={'expand width90'}
          >
            The Bright Future of Web 3.0?
          </Heading>
          <VStack
            width={'50%'}
            paddingRight={10}
            paddingLeft={4}
            alignItems={'flex-start'}
            className={'expand pad0 margin50 width90'}
          >
            <Text
              color={'hsl(236, 13%, 42%)'}
              fontWeight={400}
              fontSize={'sm'}
              py={5}
              lineHeight={'2'}
            >
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </Text>
            <Button
              colorScheme="red"
              borderRadius={'none'}
              px={10}
              textTransform={'uppercase'}
              bgColor={' hsl(5, 85%, 63%)'}
              fontFamily={'Ubuntu'}
              _hover={{ bgColor: ' hsl(240, 100%, 5%)' }}
            >
              Read more
            </Button>
          </VStack>
        </HStack>
      </VStack>
      <VStack width={'35%'} className={'col-cards'}>
        <Card
          backgroundColor={'hsl(240, 100%, 5%)'}
          borderRadius={'none'}
          className={'col-card'}
          padding={2}
          width={'100%'}
        >
          <CardHeader>
            <Heading size="xl" color={'hsl(35, 77%, 62%)'}>
              New
            </Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="8">
              <Box>
                <Heading
                  size="sm"
                  textTransform="uppercase"
                  color={'hsl(36, 100%, 99%)'}
                  _hover={{ color: 'hsl(35, 77%, 62%)' }}
                  cursor={'pointer'}
                >
                  Hydrogen VS Electric Cars
                </Heading>
                <Text pt="2" fontSize="md" color={'hsl(233, 8%, 79%)'}>
                  Will hydrogen-fueled cars ever catch up to EVs?
                </Text>
              </Box>
              <Box>
                <Heading
                  size="sm"
                  textTransform="uppercase"
                  color={'hsl(36, 100%, 99%)'}
                  _hover={{ color: 'hsl(35, 77%, 62%)' }}
                  cursor={'pointer'}
                >
                  The Downsides of AI Artistry
                </Heading>
                <Text pt="2" fontSize="md" color={'hsl(233, 8%, 79%)'}>
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </Text>
              </Box>
              <Box>
                <Heading
                  size="sm"
                  textTransform="uppercase"
                  color={'hsl(36, 100%, 99%)'}
                  _hover={{ color: 'hsl(35, 77%, 62%)' }}
                  cursor={'pointer'}
                >
                  Is VC Funding Drying Up?
                </Heading>
                <Text pt="2" fontSize="md" color={'hsl(233, 8%, 79%)'}>
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </VStack>
    </HStack>
  );
};

export default ContentBox;
