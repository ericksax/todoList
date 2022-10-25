
import { styled } from "../../styles";


export const Container = styled('div', {
    width: '100%',
    height: '1rem',
    marginTop: '4rem',
    gap: '1.5rem',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '14px',
        fontWeight: 700,

        div: {
            color: '$blue'
        },

        ':nth-child(2)': {
            color: '$purple'
        },

        span: {
            color: '$gray-200',
            padding: '2px 8px',
            marginLeft: '0.5rem',
            
            borderRadius: '10px',
            backgroundColor: '$gray-400'
        }
    
    },
})

