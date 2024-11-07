import { ChangeEvent, useState } from "react";
interface CreateEventFormData {
  title: string;
  organizer_name: string;
  eventType: string;
  location: string;
  online_link: string;
  date: string;
  time: string;
  image: null;
  description: string;
}
const useCreateEventPage = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [formData, setFormData] = useState<CreateEventFormData>({
    title: "",
    organizer_name: "",
    eventType: "",
    location: "",
    online_link: "",
    date: "",
    time: "",
    image: null,
    description: "",
  });
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedOption(event.target.value);
    setFormData({ ...formData, eventType: value });
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDescriptionChange = (description: any) => {
    setFormData({ ...formData, description: description });
  };

  const handleSubmit = (event: FormData) => {
    console.log(formData);
  };

  return {
    formData,

    setFormData,
    selectedOption,
    setSelectedOption,
    handleSelectChange,
    handleInputChange,
    handleDescriptionChange,
    handleSubmit,
  };
};
export default useCreateEventPage;
