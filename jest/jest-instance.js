import renderer from 'react-test-renderer'
import { JestWrapper } from './jest-wrapper'

export const JestInstance = (Component) => renderer.create (JestWrapper (Component)).toJSON ()