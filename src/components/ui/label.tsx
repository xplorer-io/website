interface InputLabelProps {
  name: string;
  required: boolean;
  html_for: string;
}
const InputLabel = ({ name, required, html_for }: InputLabelProps) => {
  return (
    <label
      className="mb-2 block text-sm font-bold text-gray-700"
      htmlFor={html_for}
    >
      {name}
      {required && <span className="text-red-500"> *</span>}
    </label>
  );
};

export default InputLabel;
