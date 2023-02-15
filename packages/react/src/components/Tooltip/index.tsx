import { ReactNode } from 'react'
import { TooltipBox, TooltipDownArrow } from './styles'

export interface TooltipProps {
  children: ReactNode
}

export function Tooltip({ children }: TooltipProps) {
  return (
    <TooltipBox>
      {children}
      <TooltipDownArrow weight="fill" />
    </TooltipBox>
  )
}
