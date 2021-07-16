import React from 'react'
import { StyledForm, StyledInput, StyledSubmit } from './form-component-styles'
import { useFormComponent } from './hooks'

/**
 * @returns {React.ReactElement} react component
 */
export function FormComponent () {

    const { link, handleSubmit } = useFormComponent ()

    return (
        <>
            <StyledForm onSubmit={handleSubmit}>
                <StyledInput
                    placeholder="paste link here (youtube, soundcloud)"
                    type="text"
                    ref={link.ref}
                    value={link.value}
                    onChange={link.onChange}
                />
                <StyledSubmit
                    type="submit"
                    value="submit"
                />
            </StyledForm>
        </>
    )

}