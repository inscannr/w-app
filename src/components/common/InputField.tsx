type Props = {
  id: string;
  label: string;
  type: string;
  onChange: (e: any) => void;
};

const InputField = (props: Props) => {
  const { id, label, type, onChange } = props;
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium capitalize text-gray-700 dark:text-slate-200"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={id}
          type={type}
          placeholder={`Type your ${id}`}
          onChange={onChange}
          required
          autoComplete="off"
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default InputField;
