import styled from 'styled-components';

export const Container = styled.div`
  text-align: left;
`;

export const Title = styled.h1`
  border-bottom: 0.1em solid ${({theme}) => theme.primary};
  text-align: left;
`;

export const Spacer = styled.div`
  margin-bottom: 1em;
`;

export const SectionTitle = styled.h2`
  border-bottom: 0.1em solid ${({theme}) => theme.primary};
  text-align: left;
`;

export const Content = styled.div`
  text-align: justify;
`;

export const Blue = styled.span`
  color: ${({theme}) => theme.highlight};
  margin: ${({spacing}) => spacing ? '0 0.15em' : '0'};
`;

export const List = styled.ul`
  list-style-type: circle;
  font-size: 0.9em;
  line-height: 1.3em;
  padding-left: 0;
`;
