import { styled } from "../../styles";

export const Main = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '2rem 1rem',
    borderTop: '1px solid $gray-500',
    borderRadius: '8px',
    color: '$gray-300',


    
    
    strong: {
        textAlign: 'center',
        marginTop: '1.5rem',
        fontSize: "clamp(.8rem, 1.5vw, 2rem)"
    },

    p: {
        fontSize: "clamp(.6rem, 1.2vw, 1.5rem)",
        textAlign: 'center',
    }
})