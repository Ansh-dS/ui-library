import type { StoryFnReact, StoryContext } from '@storybook/react-vite'

export type TypeOfComponentInstance = StoryFnReact

export default interface Decorator {
  storyInstance: StoryFnReact
  storyOfComponent: StoryContext
}
