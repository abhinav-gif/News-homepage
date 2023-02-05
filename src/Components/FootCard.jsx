import React from 'react';
import { Card, CardBody, Heading, Text, Stack, Image } from '@chakra-ui/react';
const FootCard = ({ head1, head2, text, img, alt }) => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      width={'33%'}
      height={'100%'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      border={'none'}
      paddingRight={'5px'}
      className={'card'}
    >
      <Image
        objectFit="cover"
        width={'100px'}
        height={'100%'}
        src={img}
        alt={alt}
        className={'card-img'}
      />

      <Stack className="card-text">
        <CardBody py={3}>
          <Heading size="lg" color={'hsl(233, 8%, 79%)'}>
            {head1}
          </Heading>
          <Heading
            fontSize="lg"
            color={'hsl(240, 100%, 5%)'}
            fontWeight={700}
            py={2}
            _hover={{ color: ' hsl(5, 85%, 63%)' }}
            cursor={'pointer'}
          >
            {head2}
          </Heading>
          <Text
            color={'hsl(236, 13%, 42%)'}
            fontSize="sm"
            fontWeight={400}
            lineHeight={'1.5rem'}
          >
            {text}
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default FootCard;
