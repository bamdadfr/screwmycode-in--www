import React from 'react';
import Image from 'next/image';
import {Form, Input, Submit, ImageContainer} from './form.component.styles';
import {useFormComponent} from './hooks/use-form-component';

/**
 * Component for the form
 *
 * @returns {React.ReactElement} - Rendered component
 */
export function FormComponent() {
  const {link, handleSubmit} = useFormComponent();

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="paste link here (youtube, soundcloud)"
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
