"use client";
import PagesWrapper from "@/components/layout/PagesWrapper";
import InputLabel from "@/components/ui/label";
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
          <form className="bg-white" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
              <div className="mb-4">
                <InputLabel html_for="title" name="Title" required={true} />
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="title"
                  id="title"
                  required
                  placeholder="Please Enter Event Title"
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <InputLabel
                  html_for="organizer_name"
                  name="Organizer Name"
                  required={true}
                />

                <input
                  onChange={handleInputChange}
                  type="text"
                  name="organizer_name"
                  id="organizer_name"
                  required
                  placeholder="Please Enter Organizer Name"
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
              </div>

              <div className="mb-4">
                <InputLabel
                  html_for="event_type"
                  name="Event Type"
                  required={true}
                />
                <select
                  id="options"
                  value={selectedOption}
                  required
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
                  <InputLabel
                    html_for="location"
                    name="Location"
                    required={true}
                  />

                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="location"
                    required={true}
                    id="location_physical"
                    placeholder="Please Enter Location"
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  />
                </div>
              )}
              {(selectedOption === "virtual" || selectedOption === "both") && (
                <div className="mb-4">
                  <InputLabel
                    html_for="online_link"
                    name="Online Link"
                    required={true}
                  />

                  <input
                    onChange={handleInputChange}
                    type="url"
                    name="online_link"
                    id="online_link"
                    required={true}
                    pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)"
                    title="Please enter a valid URL starting with http:// or https://"
                    placeholder="Please provide online Link"
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  />
                </div>
              )}
              <div className="mb-4">
                <InputLabel html_for="date" name="Date" required={true} />

                <input
                  onChange={handleInputChange}
                  type="date"
                  name="date"
                  required={true}
                  id="date"
                  min={new Date().toISOString().split("T")[0]}
                  placeholder="Please Select"
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <InputLabel html_for="time" name="Time" required={true} />
                <input
                  onChange={handleInputChange}
                  type="time"
                  name="time"
                  id="time"
                  required={true}
                  placeholder="Please Select Time"
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <InputLabel html_for="image" name="Image" required={true} />
                <input
                  onChange={handleInputChange}
                  type="file"
                  name="image"
                  id="image"
                  accept="/image"
                  max-size="5242880"
                  required={true}
                  placeholder="Please Upload Image"
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
              </div>
            </div>
            <div className="mb-4">
              <InputLabel
                html_for="description"
                name="Description"
                required={true}
              />
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
