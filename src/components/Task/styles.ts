import { styled } from "../../styles";
import * as Checkbox from "@radix-ui/react-checkbox";

export const CheckboxRoot = styled(Checkbox.Root, {
    background: "transparent",
    border: "2px solid $blue",
    width: '17px',
    height: '17px',
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  
    '&[data-state="checked"]': {
      background: "$purple",
      borderColor: "$purple",
    },
  });
  
  export const CheckboxIndicator = styled(Checkbox.Indicator, {
    color: "$gray-100",
  });
  
export const Container = styled('div', {
    width: '100%',
    padding: '1rem',
    height: '100%',
    minHeight: '4.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '0.75rem',
    background: '$gray-500',
    border: '1px solid $gray-400',
    borderRadius: '8px',
    overflow: 'hidden',

    ".done": {
      textDecoration: "line-through"
    },

    "div:nth-child(2)": {
      width: '100%',
      display: 'flex',
    }
})