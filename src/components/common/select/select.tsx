type Props = {
  name: string;
  options: string[];
  onChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  required?: boolean;
};

export const Select: React.FC<Props> = ({
  name,
  options,
  onChangeSelect,
  error,
  required = false,
}) => {
  return (
    <label htmlFor={name}>
      {name} {required && "*"}
      <select
        id={name}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={onChangeSelect}
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
