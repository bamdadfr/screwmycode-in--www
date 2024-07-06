import styled, {css} from 'styled-components';

export const Container = styled.div`
  text-align: left;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 80%;
  width: 100%;
  padding: 0 0.5em;
`;

export const Spacer = styled.div`
  margin-bottom: 1em;
`;

const Title = css`
  text-align: center;
  color: ${(props) => props.theme.highlight};
  background: ${(props) => props.theme.background.highlight};
  text-transform: none;
  line-height: 2em;
  border-radius: 3px;
  box-shadow: 0 1px 10px 1px ${(props) => props.theme.shadow.opacity};
`;

export const TitleH1 = styled.h1`
  ${Title}
`;

export const TitleH2 = styled.h2`
  ${Title}
`;

export const TitleH3 = styled.h3`
  border-bottom: 0.1em solid ${({theme}) => theme.primary};
  margin-bottom: 1em;
`;

export const Content = styled.div`
  text-align: justify;
`;

export const Blue = styled.span<{spacing: number;}>`
  color: ${({theme}) => theme.highlight};
  margin: ${({spacing}) => (spacing ? '0 0.15em' : '0')};
`;

export const List = styled.ul`
  list-style-type: circle;
  font-size: 0.9em;
  line-height: 1.3em;
  padding-left: 1em;
`;
