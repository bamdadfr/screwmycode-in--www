import React from 'react';
import {DefaultLayout} from '../layouts/default/default.layout';
import {TextLinkComponent} from '../components/text-link/text-link.component';
import {
  Blue,
  Container,
  Content,
  List,
  SectionTitle,
  Spacer,
  Title,
} from '../pages-lib/about.styles';

/**
 * About page
 * Path: /about
 *
 * @returns {React.ReactElement} - About page component
 */
export default function AboutPage() {
  const Prefix = ({spacing}) => <Blue spacing={spacing}>iscrew</Blue>;
  return (
    <>
      <DefaultLayout>
        <Container>
          <Content>
            Pitch control for YouTube and Soundcloud.
          </Content>

          <Spacer />

          <Title>
            About
          </Title>

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

          <SectionTitle>
            How to use
          </SectionTitle>

          <Content>
            <p>
              Beside using the homepage, you can also add
              the <Prefix /> prefix in
              the URL of the YouTube video or Soundcloud track.
            </p>

            <p>
              Examples
            </p>

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
        </Container>
      </DefaultLayout>
    </>
  );
}
