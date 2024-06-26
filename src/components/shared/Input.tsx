interface IInput {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: any;
  required: any;
}

const Input = ({ name, type, placeholder, value, onChange, required }: IInput) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="text-gray-900 shadow-sm shadow-quaternary ring-1 ring-inset ring-gray-300 
      placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 border 
      w-full border-gray-200 p-2 py-1.5"
    />
  );
};

export default Input;
