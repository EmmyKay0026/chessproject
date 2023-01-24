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
  password,
  checked,
}) => {
  if (type === "textarea") {
    return <textarea className={className} name={name} />;
  }

  if (type === "checkbox") {
    return (
      <>
        <label>{label}</label>
        <input
          className={className}
          type="checkbox"
          name={name}
          id={id}
          placeholder={placeholder}
        />
      </>
    );
  }

  if (type === "radio") {
    return (
      <>
        <label>{label}</label>
        <input
          className={className}
          type="radio"
          name={name}
          placeholder={placeholder}
          checked={checked}
          id={id}
          onChange={onChange}
        />
      </>
    );
  }
  if (type === "password") {
    return (
      <input
        className={className}
        id={id}
        type={password}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
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
        autoComplete="off"
        required
      />
    );
  }
  if (type === "username") {
    return (
      <input
        className={className}
        id={id}
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
        required
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
