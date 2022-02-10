import React, {ReactElement} from 'react';
import Image from 'next/image';
import {Form, ImageContainer, Input, Submit} from './form.component.styles';
import {useFormComponent} from './hooks/use-form-component';

/**
 * Component for the form
 */
export function FormComponent(): ReactElement {
  const {link, handleSubmit} = useFormComponent();

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Paste link here (YouTube, Soundcloud)"
          type="text"
          ref={link.ref}
          value={link.value}
          onChange={link.onChange}
        />
        <Submit
          type="submit"
        >
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
      </Form>
    </>
  );
}
