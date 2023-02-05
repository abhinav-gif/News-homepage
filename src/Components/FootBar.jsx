import React from 'react';
import { HStack } from '@chakra-ui/react';
import FootCard from './FootCard';

const FootBar = () => {
  return (
    <HStack alignItems={'flex-start'} className={'mobile-cont center'}>
      <FootCard
        head1={'01'}
        head2={'Reviving Retro PCs'}
        text={'  What happens when old PCs are given modern upgrades? '}
        img={'/Assets/image-retro-pcs.jpg'}
        alt={'retro pcs'}
      />
      <FootCard
        head1={'02'}
        head2={'Top 10 Laptops of 2022'}
        text={'  Our best picks for various needs and budgets. '}
        img={'/Assets/image-top-laptops.jpg'}
        alt={'top laptops'}
      />
      <FootCard
        head1={'03'}
        head2={'The Growth of Gaming'}
        text={'How the pandemic has sparked fresh opportunities.'}
        img={'/Assets/image-gaming-growth.jpg'}
        alt={'gaming growth'}
      />
    </HStack>
  );
};

export default FootBar;
