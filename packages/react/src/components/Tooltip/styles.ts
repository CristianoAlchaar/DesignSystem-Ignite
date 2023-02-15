import { ArrowFatDown } from 'phosphor-react'
import { styled } from '../../styles'
import { Box } from '../Box'

export const TooltipBox = styled(Box, {
  backgroundColor: '$gray900',
  width: 'fit-content',
  padding: '$3 $4',
  borderRadius: '5px',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
})

export const TooltipDownArrow = styled(ArrowFatDown, {
  width: '100%',
  color: '$gray900',
  position: 'absolute',
  bottom: -8,
})
