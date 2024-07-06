import React, {ReactElement} from 'react';
import {LinkComponent} from 'src/components/link.component';
import {Title} from './title.component.styles';

/**
 * Component for the title of the page
 */
export function TitleComponent(): ReactElement {
  return (
    <Title>
      <LinkComponent href="/">screwmycode.in</LinkComponent>
    </Title>
  );
}
