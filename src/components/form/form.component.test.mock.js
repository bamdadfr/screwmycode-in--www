import * as useFormComponent from './hooks/use-form-component'
import { validateForm } from './utils'

export const MOCK_STATE = () => {

    const state = {
        'link': {
            'ref': null,
            'value': '',
            'onChange': jest.fn (),
            'resetValue': jest.fn (),
        },
        'handleSubmit': jest.fn ((value) => {

            validateForm (value)
        
        }),
    }

    jest
        .spyOn (useFormComponent, 'useFormComponent')
        .mockReturnValue (state)

    return state

}