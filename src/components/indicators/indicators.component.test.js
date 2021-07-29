import React from 'react'
import { render, screen } from '@testing-library/react'
import { IndicatorsComponent } from './indicators.component'
import { JestWithStyledComponents } from '../../../jest'

describe ('IndicatorsComponent', () => {

    describe ('container', () => {

        it ('should be in the document', () => {

            const { container } = render (JestWithStyledComponents (<IndicatorsComponent/>))

            expect (container).toBeInTheDocument ()
        
        })

        it ('should be visible', () => {

            const { container } = render (JestWithStyledComponents (<IndicatorsComponent/>))

            expect (container).toBeVisible ()

        })

        it ('should not be empty', () => {

            const { container } = render (JestWithStyledComponents (<IndicatorsComponent/>))

            expect (container).not.toBeEmptyDOMElement ()

        })
    
    })

    describe ('percentage', () => {

        describe ('title', () => {

            it ('should be visible', () => {

                render (JestWithStyledComponents (<IndicatorsComponent/>))

                const title = screen.getByRole ('heading', { 'name': 'percentage' })

                expect (title).toBeVisible ()

            })

            it ('should display percent', () => {

                render (JestWithStyledComponents (<IndicatorsComponent/>))

                const title = screen.getByRole ('heading', { 'name': 'percentage' })

                expect (title).toHaveTextContent ('percent')

            })

        })

        describe ('value', () => {

            it ('should be disabled', () => {

                render (JestWithStyledComponents (<IndicatorsComponent/>))

                const value = screen.getByRole ('textbox', { 'name': 'percentage' })

                expect (value).toBeDisabled ()
            
            })

            it ('should display 0.0 %', () => {

                render (JestWithStyledComponents (<IndicatorsComponent/>))

                const value = screen.getByRole ('textbox', { 'name': 'percentage' })

                expect (value).toHaveValue ('0.0 %')

            })

        })

    })

    describe ('semitones', () => {

        describe ('title', () => {

            it ('should be visible', () => {

                render (JestWithStyledComponents (<IndicatorsComponent/>))

                const title = screen.getByRole ('heading', { 'name': 'semitones' })

                expect (title).toBeVisible ()

            })

            it ('should display percent', () => {

                render (JestWithStyledComponents (<IndicatorsComponent/>))

                const title = screen.getByRole ('heading', { 'name': 'semitones' })

                expect (title).toHaveTextContent ('semitone')

            })

        })

        describe ('value', () => {

            it ('should be disabled', () => {

                render (JestWithStyledComponents (<IndicatorsComponent/>))

                const value = screen.getByRole ('textbox', { 'name': 'semitones' })

                expect (value).toBeDisabled ()

            })

            it ('should display 0.0 st', () => {

                render (JestWithStyledComponents (<IndicatorsComponent/>))

                const value = screen.getByRole ('textbox', { 'name': 'semitones' })

                expect (value).toHaveValue ('0.0 st')
            
            })

        })

    })

})