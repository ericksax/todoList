import { createStitches } from '@stitches/react'

export const { globalCss, styled} = createStitches({
    theme: {
        colors: {
            'gray-700': '#0D0D0D',
            'gray-600': '#1A1A1A',
            'gray-500': '#262626',
            'gray-400': '#333333',
            'gray-300': '#808080',
            'gray-200': '#D9D9D9',
            'gray-100': '#F2F2F2',

            purple: '#8284FA',
            'purple-dark': '#5E60CE',
            blue: '#4EA8DE',
            'blue-dark': '#1E6F9F',
            danger: '#E25858'
        }
    }
})