import { render } from '@testing-library/react'
import { JestWrapper } from './jest-wrapper'

export const JestRender = (Component) => render (JestWrapper (Component))