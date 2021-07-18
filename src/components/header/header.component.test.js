import React from 'react'
import { act, render, screen } from '@testing-library/react'
import { HeaderComponent } from './header.component'
import * as useHeaderComponent from './hooks/use-header-component'

describe ('HeaderComponent', () => {

    describe ('container', () => {

        it ('should be in the document', () => {

            const { container } = render (<HeaderComponent/>)

            expect (container).toBeInTheDocument ()
        
        })
    
        it ('should be visible', () => {

            const { container } = render (<HeaderComponent/>)

            expect (container).toBeVisible ()

        })

        it ('should be enabled', () => {

            const { container } = render (<HeaderComponent/>)

            expect (container).toBeEnabled ()

        })

        it ('should not be empty', () => {

            const { container } = render (<HeaderComponent/>)

            expect (container).not.toBeEmptyDOMElement ()

        })

    })

    describe ('home icon', () => {

        it ('should be in the document', () => {

            render (<HeaderComponent/>)

            const home = screen.getByRole ('button', { 'name': 'home' })

            expect (home).toBeInTheDocument ()
        
        })

        it ('should be visible', () => {

            render (<HeaderComponent/>)

            const home = screen.getByRole ('button', { 'name': 'home' })

            expect (home).toBeVisible ()

        })

        it ('should be enabled', () => {

            render (<HeaderComponent/>)

            const home = screen.getByRole ('button', { 'name': 'home' })

            expect (home).toBeEnabled ()

        })
    
    })

    describe ('repeat icon', () => {

        it ('should be in the document', () => {

            render (<HeaderComponent/>)

            const repeat = screen.getByRole ('button', { 'name': 'repeat' })

            expect (repeat).toBeInTheDocument ()
        
        })

        it ('should be visible', () => {

            render (<HeaderComponent/>)

            const repeat = screen.getByRole ('button', { 'name': 'repeat' })

            expect (repeat).toBeVisible ()
        
        })

        it ('should be enabled', () => {

            render (<HeaderComponent/>)

            const repeat = screen.getByRole ('button', { 'name': 'repeat' })

            expect (repeat).toBeEnabled ()
        
        })

        it ('should have a value of on when state.repeat is true', () => {

            const STATE_SPY = jest.spyOn (useHeaderComponent, 'useHeaderComponent')

            STATE_SPY.mockReturnValue ({
                'repeat': true,
            })

            render (<HeaderComponent/>)

            const repeat = screen.getByRole ('button', {
                'name': 'repeat',
            })

            expect (repeat).toHaveValue ('on')

        })

        it ('should have a value of off when state.repeat is false', () => {

            const STATE_SPY = jest.spyOn (useHeaderComponent, 'useHeaderComponent')

            STATE_SPY.mockReturnValue ({
                'repeat': false,
            })

            render (<HeaderComponent/>)

            const repeat = screen.getByRole ('button', {
                'name': 'repeat',
            })

            expect (repeat).toHaveValue ('off')

        })

        it ('should fire state.toggleRepeat when clicked', () => {

            const STATE_SPY = jest.spyOn (useHeaderComponent, 'useHeaderComponent')
            const TOGGLE_REPEAT = jest.fn ()

            STATE_SPY.mockReturnValue ({
                'toggleRepeat': TOGGLE_REPEAT,
            })

            render (<HeaderComponent/>)

            const repeat = screen.getByRole ('button', { 'name': 'repeat' })

            expect (TOGGLE_REPEAT).toHaveBeenCalledTimes (0)

            act (() => {

                repeat.click ()

            })

            expect (TOGGLE_REPEAT).toHaveBeenCalledTimes (1)

        })

    })

})

