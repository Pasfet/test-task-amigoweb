import styled from 'styled-components';

export const SignUpWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02), 0px 32px 64px rgba(44, 39, 56, 0.04);
  border-radius: 24px;
  padding: 30px 40px;
  margin: 0 auto;
  max-width: 800px;
`;

export const SignUpHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignUpHeader = styled.h1`
  font-weight: 700;
  font-size: 34px;
  line-height: 44px;
  color: #2c2738;
  margin-bottom: 8px;
`;

export const SignUpHeaderDescription = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 22px;
`;

export const SignUpHeaderDescriptionText = styled.p`
  color: #2c2738;
  margin-right: 6px;
`;

export const SignUpHeaderDescriptionLink = styled.a`
  color: #0880ae;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
