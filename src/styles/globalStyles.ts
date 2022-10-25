import { FaceMask } from 'phosphor-react'
import {globalCss} from '.'

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },

    body: {
        background: '$gray-600',
        '-webkit-font-smoothing': 'antialiased'
    },
    
    'body, input, button': {
        color: '$gray-100',
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
      
    }
}) 