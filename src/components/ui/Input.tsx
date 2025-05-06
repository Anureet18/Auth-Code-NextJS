'use client';

interface InputProps {
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
  name?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, value, onChange, type, name, required }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-semibold text-gray-700">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        required={required}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
    </div>
  );
};

export default Input;
