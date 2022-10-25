import { styled } from "../../styles";

export const Main = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '50px',
    borderTop: '1px solid $gray-500',
    borderRadius: '8px',
    color: '$gray-300',
    padding: '4rem',
    
    strong: {
        marginTop: '1.5rem',
    }
})