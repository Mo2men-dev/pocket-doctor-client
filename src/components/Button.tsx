import React from "react";

const Button = ({ text, props, style }: { text: string, props: any, style: string }) => (
    <button
        className={style}
        {...props}
    >
        {text}
    </button>
);

export default Button;