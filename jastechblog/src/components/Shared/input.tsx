const Input = ({
  type,
  label,
  placeholder,
  style,
  required,
}: {
  type: string;
  label: string;
  placeholder?: string;
  style: string;
  required?: boolean;
}) => {
  return (
    <label>
      {label}
      <input
        placeholder={placeholder}
        type={type}
        className={style}
        required={required}
      />
    </label>
  );
};
export default Input;
