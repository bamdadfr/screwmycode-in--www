import React from 'react'
import { StyledForm, StyledInput, StyledSubmit } from './form-component-styles'
import { useFormComponent } from './hooks'

/**
 * @function
 * @name FormComponent
 * @description home: form component
 * @returns {React.ReactElement} - react component
 */
export function FormComponent () {

    const { input, handleSubmit } = useFormComponent ()

    return (
        <>
            <StyledForm onSubmit={handleSubmit}>
                <StyledInput
                    placeholder="paste link here (youtube, soundcloud)"
                    type="text"
                    ref={input.ref}
                    value={input.value}
                    onChange={input.onChange}
                />
                <StyledSubmit
                    type="submit"
                    value="submit"
                />
            </StyledForm>
        </>
    )

}