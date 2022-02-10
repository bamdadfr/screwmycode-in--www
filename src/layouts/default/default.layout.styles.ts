import styled from 'styled-components';
import {down, up} from 'styled-breakpoints';
import {widths} from '../../app/styles/widths';

export const Container = styled.div`
  position: fixed;

  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: repeat(2, 1fr);

  width: 100vw;
  height: 100vh;

  color: ${(props) => props.theme.primary};
  background: ${(props) => props.theme.background.primary};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  height: 100%;

  text-align: center;
  font-size: 1.1em;

  ${down('md')} {
    width: ${widths.sm};
  }

  ${up('md')} {
    width: ${widths.md};
  }

  ${up('lg')} {
    width: ${widths.lg};
  }

  ${up('xl')} {
    width: ${widths.xl};
  }

  ${up('xxl')} {
    width: ${widths.xxl};
  }
`;
