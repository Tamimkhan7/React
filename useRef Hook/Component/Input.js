import React from "react";

function Input({ type, placeholder }, ref) {
    return <input ref={ref} type={type} placeholder={placeholder} />;
}

const forwardedinput = React.forwardRef(Input); //forwardedinput ar modde reat forwardreferences value ta stroe  kore rekhe dilam

export default forwardedinput; //passing forwardedinput in the parent's component 