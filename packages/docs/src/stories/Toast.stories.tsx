import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@ds-ignite-ui/react'

export default {
  title: 'Components/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    date: new Date(),
  },
  argTypes: {
    date: {
      control: 'date',
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
