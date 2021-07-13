import React from 'react'
import { fireEvent, screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormComponent from './form.component'
import { JestRender } from '../../../jest/jest-render'

const render = () => {

    const handleForm = jest.fn ()

    JestRender (
        <FormComponent
            handleForm={handleForm}
        />,
    )

    const link = screen.getByPlaceholderText ('insert youtube link here')

    const submit = screen.getByRole ('button', {
        'name': 'submit',
    })

    return {
        link,
        submit,
        handleForm,
    }

}

test ('link: should render', async () => {

    const { link } = render ()

    expect (link).toBeInTheDocument ()

    expect (link).toBeVisible ()

    expect (link).toHaveValue ('')

    await waitFor (() => {

        expect (link).toHaveFocus ()

    })

})

test ('submit: should render', () => {

    const { submit, handleForm } = render ()

    expect (submit).toBeInTheDocument ()

    expect (submit).toBeVisible ()

    expect (handleForm).not.toHaveBeenCalled ()

})

test ('link: should reset on wrong value', () => {

    const { link, handleForm } = render ()

    userEvent.type (link, 'wrong value')

    expect (link).toHaveValue ('wrong value')

    fireEvent.submit (link)

    expect (link).toHaveValue ('')

    expect (handleForm).not.toHaveBeenCalled ()

})

test ('link: should trigger handleSubmit on correct value', () => {

    const { link, handleForm } = render ()
    const value = 'https://www.youtube.com/watch?v=QtUoBDJA7p0'

    userEvent.type (link, value)

    expect (link).toHaveValue (value)

    fireEvent.submit (link)

    expect (link).toHaveValue (value)

    expect (handleForm).toHaveBeenCalledTimes (1)

})

test ('link: should refocus on blur', async () => {

    const { link } = render ()

    await waitFor (() => {

        expect (link).toHaveFocus ()

    })

    act (() => link.blur ())

    await waitFor (() => {

        expect (link).toHaveFocus ()

    })

})
