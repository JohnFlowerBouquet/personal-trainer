import styled from 'styled-components';
import React from 'react';
import { Button, Text } from 'rebass';

const Input = styled.input`
  background: ${props => props.theme.colors.primaryLight};
  color: #fff;
  border-radius: 25px;
  padding: 16px 32px;
  border: none;
  font-size: 20px;
  display: block;
  ::placeholder {
    color: #fff;
    opacity: 0.7;
  }
  :focus {
    outline: none;
  }
  @media screen and (max-width: 40em) {
    padding: 12px 24px;
    font-size: 16px;
  }
`;

const GetStarted = () => (
  <form action="#" method="post">
    <Input type="email" placeholder="your@email.com" />
    <Button
      type="submit"
      bg="secondary"
      ml={[0, 3, 3]}
      mt={[2, 0, 0]}
      px={[2, 4, 4]}
      py={[2, 2, 3]}
      borderRadius="25px"
    >
      <Text fontSize={[1, 2, 3]}>Get Started!</Text>
    </Button>
  </form>
);

export default GetStarted;
