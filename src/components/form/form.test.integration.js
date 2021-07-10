import React from 'react'
import { fireEvent, screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormComponent from './form.component'
import { JestRender } from '../../../jest/jest-render'

const handleForm = jest.fn ()
const render = () => JestRender (<FormComponent handleForm={handleForm}/>)

const elements = {
    'link': () => screen.getByPlaceholderText ('insert youtube link here'),
    'submit': () => screen.getByRole ('button', {
        'name': 'submit',
    }),
}

test ('link: should render', async () => {

    render ()

    const link = elements.link ()

    expect (link).toBeInTheDocument ()

    expect (link).toBeVisible ()

    expect (link).toHaveValue ('')

    await waitFor (() => {

        expect (link).toHaveFocus ()

    })

})

test ('submit: should render', () => {

    render ()

    const submit = elements.submit ()

    expect (submit).toBeInTheDocument ()

    expect (submit).toBeVisible ()

    expect (handleForm).not.toHaveBeenCalled ()

})

test ('link: should reset on wrong value', () => {

    render ()

    const link = elements.link ()

    userEvent.type (link, 'wrong value')

    expect (link).toHaveValue ('wrong value')

    fireEvent.submit (link)

    expect (link).toHaveValue ('')

    expect (handleForm).not.toHaveBeenCalled ()

})

test ('link: should trigger handleSubmit on correct value', () => {

    render ()

    const link = elements.link ()
    const value = 'https://www.youtube.com/watch?v=QtUoBDJA7p0'

    userEvent.type (link, value)

    expect (link).toHaveValue (value)

    fireEvent.submit (link)

    expect (link).toHaveValue (value)

    expect (handleForm).toHaveBeenCalledTimes (1)

})

test ('link: should refocus on blur', async () => {

    render ()

    const link = elements.link ()

    await waitFor (() => {

        expect (link).toHaveFocus ()

    })

    act (() => link.blur ())

    await waitFor (() => {

        expect (link).toHaveFocus ()

    })

})
