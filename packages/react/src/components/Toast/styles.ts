import { X } from 'phosphor-react'
import { styled } from '../../styles'
import { Box } from '../Box'
import { Heading } from '../Heading'
import { Text } from '../Text'

export const ToastContainer = styled(Box, {
  width: 360,
  borderRadius: '$sm',
  display: 'flex',
  alignItems: 'flex-start',
})

export const ToastContent = styled('div', {
  flex: 1,
})

export const Title = styled(Heading, {
  color: '$white',
  defaultVariants: {
    size: 'sm',
  },
})

export const CloseIcon = styled(X, {
  color: '$gray200',
  width: '$5',
  height: '$5',
  cursor: 'pointer',
})

export const Subtitle = styled(Text, {
  color: '$gray200',
  marginTop: '$1',
  defaultVariants: {
    size: 'sm',
  },
})
