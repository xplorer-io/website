"use client";
import PagesWrapper from "@/components/layout/PagesWrapper";
import ButtonLink from "@/components/ui/buttons/ButtonLink";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import TitleHeader from "@/components/ui/TitleHeader";
import { useCreateAccolades } from "@/hooks/useCreateAccolades";
import * as texts from "@/localisation/accolades";

const AccoladesFormPage = () => {
  const {
    fullName,
    setFullName,
    message,
    setMessage,
    isAnonymous,
    handleSubmit,
    handleCheckboxChange,
  } = useCreateAccolades();

  return (
    <div className="flex flex-col">
      <PagesWrapper>
        <TitleHeader
          title={texts.accoladesTitle}
          description={texts.accoladesDescription}
        />

        <div className="bg-card text-card-foreground mx-auto mt-8 rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">{texts.formTitle}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                {texts.fullNameLabel}
              </label>
              <Input
                id="fullName"
                placeholder={texts.fullNamePlaceholder}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={isAnonymous}
                required={!isAnonymous}
                aria-label={texts.fullNameLabel}
              />
            </div>
            <div className="mb-4">
              <div className="flex items-center">
                <Checkbox
                  id="anonymous"
                  className="mr-2"
                  aria-label={texts.anonymousLabel}
                />
                <label
                  htmlFor="anonymous"
                  className="block text-sm font-medium text-gray-700"
                >
                  {texts.anonymousLabel}
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                {texts.messageLabel}
              </label>
              <Textarea
                id="message"
                rows={5}
                placeholder={texts.messagePlaceholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                aria-label={texts.messageLabel}
              />
            </div>
            <ButtonLink href="#">{texts.submitButtonLabel}</ButtonLink>
          </form>
        </div>
      </PagesWrapper>
    </div>
  );
};

export default AccoladesFormPage;
