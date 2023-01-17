import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="w-16 text-black px-1 border-1 rounded-md">
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} />
      </div>
      <button type="submit" className="w-6 h-6 bg-gray-900 text-white">
        +
      </button>
    </form>
  );
});

export default Input;
