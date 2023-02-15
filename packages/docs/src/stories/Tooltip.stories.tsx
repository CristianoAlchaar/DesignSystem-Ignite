import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps, Text } from '@alchaar-ignite-ui/react'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    children: (
      <Text size="sm" weight="semi-bold">
        26 de Outubro - Disponível
      </Text>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
