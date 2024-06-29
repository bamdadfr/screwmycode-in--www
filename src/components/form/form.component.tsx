import React, {ReactElement} from 'react';
import Image from 'next/image';
import {Form, GoogleContainer, ImageContainer, Input, Submit} from './form.component.styles';
import {useFormComponent} from './hooks/use-form-component';

/**
 * Component for the form
 */
export function FormComponent(): ReactElement {
  const {link, handleSubmit} = useFormComponent();

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Paste link here (YouTube, Soundcloud, Bandcamp)"
        type="text"
        ref={link.ref}
        value={link.value}
        onChange={link.onChange}
      />

      <Submit type="submit">
        submit
        <ImageContainer>
          <Image
            src="/icons/SCRW_KSET.svg"
            alt="cassette tape"
            width={20}
            height={20}
          />
        </ImageContainer>
      </Submit>

      <GoogleContainer>
        This site is protected by reCAPTCHA and the Google&nbsp;
        <a href="https://policies.google.com/privacy">Privacy Policy</a>
        &nbsp;and&nbsp;
        <a href="https://policies.google.com/terms">Terms of Service</a>
        &nbsp;apply.
      </GoogleContainer>
    </Form>
  );
}
