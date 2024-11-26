interface InputLabelProps {
  name: string;
  required: boolean;
  htmlFor: string;
}
const InputLabel = ({ name, required, htmlFor }: InputLabelProps) => {
  return (
    <label
      className="mb-2 block text-sm font-bold text-gray-700"
      htmlFor={htmlFor}
    >
      {name}
      {required && <span className="text-red-500"> *</span>}
    </label>
  );
};

export default InputLabel;
