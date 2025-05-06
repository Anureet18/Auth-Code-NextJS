'use client';

interface SelectProps {
  options: string[];
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  label: string;
  name: string;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange, label, name }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-semibold text-gray-700">
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
