import styled, {css} from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  font-size: 1.1em;
`;

const formElement = css`
  color: ${(props) => props.theme.highlight};
  background: ${(props) => props.theme.background.highlight};
  text-transform: none;
  display: inline-block;
  line-height: 2em;
  border-radius: 3px;
  box-shadow: 0 1px 10px 1px ${(props) => props.theme.shadow.opacity};
  padding: 0 0.5em;
`;

export const Input = styled.input`
  ${formElement};
  width: 90%;
  font-size: 0.9em;
`;

export const Submit = styled.button`
  ${formElement};
  margin-top: 1em;
  font-weight: 600;

  transition: color 100ms ease-in-out, background 200ms ease-in-out;

  &:hover {
    background: ${(props) => props.theme.highlight};
    color: ${(props) => props.theme.background.highlight};
  }
`;

export const ImageContainer = styled.span`
  margin-left: 0.3em;

  & > div {
    transform: translate3d(0.1em, 0.15em, 0);
  }
`;
