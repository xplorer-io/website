"use client";
import PagesWrapper from "@/components/layout/PagesWrapper";
import TextEditor from "@/components/ui/textEditor";
import TitleHeader from "@/components/ui/TitleHeader";
import useCreateEventPage from "@/hooks/useCreateEventPage";

export const ADD_EVENT_TITLE = {
  title: "Add New Event",
  description: "",
};

const AddEventPage = () => {
  const {
    selectedOption,
    handleSubmit,
    handleInputChange,
    handleSelectChange,
    handleDescriptionChange,
  } = useCreateEventPage();

  return (
    <div className="flex flex-col">
      <PagesWrapper>
        <TitleHeader {...ADD_EVENT_TITLE} />
        <div className="mx-auto w-full">
          <form className="bg-white" action={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="title"
                >
                  Event Title
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Please Enter Event Title"
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="organizer_name"
                >
                  Organizer Name
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="organizer_name"
                  id="organizer_name"
                  placeholder="Please Enter Organizer Name"
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="options">Event Type:</label>
                <select
                  id="options"
                  value={selectedOption}
                  onChange={handleSelectChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                >
                  <option value="">--Select an option--</option>
                  <option value="virtual">Virtual</option>
                  <option value="on_site">On Site</option>
                  <option value="both">Both </option>
                </select>
              </div>
              {(selectedOption === "on_site" || selectedOption === "both") && (
                <div className="mb-4">
                  <label
                    className="mb-2 block text-sm font-bold text-gray-700"
                    htmlFor="location"
                  >
                    Location
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="location"
                    id="location_physical"
                    placeholder="Please Enter Location"
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  />
                </div>
              )}
              {(selectedOption === "virtual" || selectedOption === "both") && (
                <div className="mb-4">
                  <label
                    className="mb-2 block text-sm font-bold text-gray-700"
                    htmlFor="online_link"
                  >
                    Online Link
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="url"
                    name="online_link"
                    id="online_link"
                    placeholder="Please provide online Link"
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  />
                </div>
              )}
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="date"
                >
                  Event Date
                </label>
                <input
                  onChange={handleInputChange}
                  type="date"
                  name="date"
                  id="date"
                  placeholder="Please Select"
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="time"
                >
                  Event Time
                </label>
                <input
                  onChange={handleInputChange}
                  type="time"
                  name="time"
                  id="time"
                  placeholder="Please Select Time"
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="image"
                >
                  Upload Image
                </label>
                <input
                  onChange={handleInputChange}
                  type="file"
                  name="image"
                  id="image"
                  placeholder="Please Upload Image"
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="description"
              >
                Description
              </label>
              <TextEditor onEditorChange={handleDescriptionChange} />
            </div>
            <button
              type="submit"
              className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </PagesWrapper>
    </div>
  );
};

export default AddEventPage;
