import React, {ReactElement} from 'react';
import {DefaultLayout} from '../layouts/default/default.layout';
import {TextLinkComponent} from '../components/text-link/text-link.component';
import {
  Blue,
  Container,
  Content,
  List,
  Spacer,
  TitleH1,
  TitleH2,
  TitleH3,
} from '../pages-lib/about.styles';
import {MetaComponent} from '../components/meta/meta.component';

/**
 * About page
 * Path: /about
 */
export default function AboutPage(): ReactElement {
  const Prefix = ({spacing = false}) =>
    <Blue spacing={spacing ? 1 : 0}>iscrew</Blue>;

  return (
    <>
      <MetaComponent description="About" />
      <DefaultLayout customMeta>
        <Container>
          <Content>
            Pitch control for YouTube and Soundcloud.
          </Content>

          <Spacer />

          <TitleH1>
            About
          </TitleH1>

          <Content>
            <p>
              This project is a tribute to <TextLinkComponent
              href="https://en.wikipedia.org/wiki/DJ_Screw"
              target="_blank"
              underlineOnHover
            >DJ Screw</TextLinkComponent>, inventor of the <TextLinkComponent
              href="https://en.wikipedia.org/wiki/Chopped_and_screwed"
              target="_blank"
              underlineOnHover
            >chopped and screwed</TextLinkComponent> mixing style.
            </p>

            <p>
              May he rest in peace.
            </p>
          </Content>

          <TitleH2>
            How to use
          </TitleH2>

          <Content>
            <p>
              Beside using the homepage, you can also add
              the <Prefix /> prefix in
              the URL of the YouTube video or Soundcloud track.
            </p>

            <TitleH3>
              Examples
            </TitleH3>

            <List>
              <li>
                https://www.<Prefix spacing />youtube.com/watch?v=1234567890
              </li>
              <li>
                https://<Prefix spacing />youtu.be/1234567890
              </li>
              <li>
                https://<Prefix spacing />soundcloud.com/username/trackName
              </li>
            </List>
          </Content>

          <Spacer />

          <TitleH2>
            Browser Extension
          </TitleH2>

          <Content>
            <p>
              Slow down and speed up videos directly on YouTube through
              our <TextLinkComponent
              href="https://github.com/bamdadsabbagh/screwmycode-in--extension#-download"
              target="_blank"
              underlineOnHover
            >Browser Extension</TextLinkComponent>.
            </p>
          </Content>
        </Container>
      </DefaultLayout>
    </>
  );
}
