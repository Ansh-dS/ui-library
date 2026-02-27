import type { Meta, StoryObj } from '@storybook/react-vite'
import { TextArea } from '@components'
const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: 'Components/TextArea',
  tags: ['autodocs'],
}
export default meta
export const Default: StoryObj<typeof TextArea> = {
  args: { placeholder: 'Type something...', rows: 4 },
}
