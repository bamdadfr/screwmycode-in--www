import React from 'react';
import {render as defaultRender} from '@testing-library/react';
import {GetServerSidePropsContext} from 'next';
import OldYoutubePage, {getServerSideProps} from '../../pages/youtube/[id]';
import {ThemeWrapper} from '../../app/components/theme-wrapper/theme-wrapper';

const render = () => {
  const {container} = defaultRender(
    <ThemeWrapper>
      <OldYoutubePage />
    </ThemeWrapper>,
  );

  return {
    container,
  };
};

describe('NotFoundPage', () => {
  describe('container', () => {
    it('should be in the document, visible and empty', () => {
      const {container} = render();
      expect(container).toBeInTheDocument();
      expect(container).toBeVisible();
      expect(container).toBeEmptyDOMElement();
    });
  });

  describe('getServerSideProps', () => {
    const context = {
      params: {id: 'id'},
      query: {speed: 1},
    };

    const expected = {
      redirect: {
        destination: `/youtube/${context.params.id}/${context.query.speed.toString()}`,
        permanent: true,
      },
    };

    it('should match expected and context', () => {
      expect(getServerSideProps(context as unknown as GetServerSidePropsContext)).toEqual(expected);
    });
  });
});
