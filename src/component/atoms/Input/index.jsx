import React from "react";

export const Input = ({
  type,
  placeholder,
  label,
  id,
  name,
  className,
  value,
  onChange,
}) => {
  if (type === "textarea") {
    return <textarea className={className} name={name} />;
  }

  if (type === "checkbox") {
    return (
      <input
        className={className}
        type="checkbox"
        name={name}
        placeholder={placeholder}
      />
    );
  }

  if (type === "radio") {
    return (
      <input
        className={className}
        type="radio"
        name={name}
        placeholder={placeholder}
      />
    );
  }
  if (type === "password") {
    return (
      <input
        className={className}
        id={id}
        type="pasword"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }
  if (type === "email") {
    return (
      <input
        className={className}
        id={id}
        type="email"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }

  return (
    <input
      className={className}
      id={id}
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
