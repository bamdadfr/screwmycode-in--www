import {addMargins, centerFlex} from 'src/app/shared.styles';
import styled, {css} from 'styled-components';

export const Form = styled.form`
  ${centerFlex};
  ${addMargins};
  flex-direction: column;
  gap: 14px;
`;

const formElement = css`
  color: ${({theme}) => theme.highlight};
  background: ${({theme}) => theme.background.highlight};
  text-transform: none;
  display: inline-block;
  line-height: 2em;
  border-radius: 3px;
  box-shadow: 0 1px 10px 1px ${({theme}) => theme.shadow.opacity};
  padding: 0 0.5em;
`;

export const Input = styled.input`
  ${formElement};
  width: 90%;
  font-size: 0.9em;

  &::-webkit-input-placeholder {
    color ${({theme}) => theme.highlight};
    opacity: 0.5;
  }
`;

export const Submit = styled.button`
  ${formElement};
  font-weight: 600;

  transition:
    color 100ms ease-in-out,
    background 200ms ease-in-out;

  &:hover {
    background: ${({theme}) => theme.highlight};
    color: ${({theme}) => theme.background.highlight};
  }
`;

export const ImageContainer = styled.span`
  margin-left: 0.3em;

  & > span {
    transform: translate3d(2px, 3px, 0);
  }
`;

export const GoogleContainer = styled.div`
  font-size: 0.6em;

  display: inline-block;
  text-align: center;
`;
