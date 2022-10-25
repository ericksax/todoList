import { styled } from "../../styles"

export const Container = styled('main', {
    width: '100%',
    maxWidth: '46rem',
    margin: '-27px auto',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
})

export const Form = styled('form', {
    display: 'flex',
    width: '100%',
    height: '3.375rem',
    gap: '0.5rem',
    
    input: {
        flex: 1,
        height: '100%',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '$gray-500',
        padding: '0 2rem',
    },

    button: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',


        height: '100%',
        fontSize: '14px',
        fontWeight: 700,
        width: '90px',
        backgroundColor: '$blue-dark',
        border: 'none',
        borderRadius: '8px'
    }
})