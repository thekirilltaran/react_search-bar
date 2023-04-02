import React from 'react'

export const Button = React.forwardRef(function(props, ref) {
    return <button ref={ref} onClick={props.onHandleClick()}>
                Test
            </button>;
});