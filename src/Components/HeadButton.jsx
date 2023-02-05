import React from 'react';
import { Button, Link } from '@chakra-ui/react';

const HeadButton = ({ value, link }) => {
  return (
    <Button
      variant={'none'}
      _hover={{ color: ' hsl(5, 85%, 63%)' }}
      fontWeight={400}
    >
      <Link href={link} _hover={{ textDecoration: 'none' }}>
        {value}
      </Link>
    </Button>
  );
};

export default HeadButton;
