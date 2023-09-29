type Props = {
  name: string;
  label?: string;
  options: string[];
  error?: string;
  required?: boolean;
  onChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
};

export const Select: React.FC<Props> = ({
  name,
  label,
  options,
  error,
  required = false,
  onChangeSelect,
  onBlur,
}) => {
  return (
    <label htmlFor={name}>
      {label || name} {required && <span>*</span>}
      <select
        id={name}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={onChangeSelect}
        onBlur={onBlur}
      >
        <option value=""></option>
        {options.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <span className="text-red-400">{error}</span>}
    </label>
  );
};
