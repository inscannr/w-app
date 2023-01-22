const InputField = (props) => {
  const { id, label, type } = props;
  return (
    <div className="mt-2" id={id}>
      <div>
        <label className="text-sm font-semibold">{label}</label>
      </div>
      <div>
        <input
          className="border-b-2 px-2 placeholder:text-gray-400 h-8 text-sm"
          placeholder={`Type your ${id}`}
          type={type}
        />
      </div>
    </div>
  );
};

export default InputField;
