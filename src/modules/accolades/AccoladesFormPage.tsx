'use client'

import PagesWrapper from "@/components/layout/PagesWrapper";
import TitleHeader from "@/components/ui/TitleHeader";
import * as texts from "@/localisation/accolades";
import React from "react";
import {useCreateAccolades} from "@/hooks/useCreateAccolades";
import ButtonLink from "@/components/ui/ButtonLink";

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
        <PagesWrapper>
            <TitleHeader
                title={texts.accoladesTitle}
                description={texts.accoladesDescription}
            />

            <div className="mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">{texts.formTitle}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                            {texts.fullNameLabel}
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                            <input
                                type="checkbox"
                                id="anonymous"
                                className="form-checkbox h-5 w-5 text-indigo-600 mr-2"
                                checked={isAnonymous}
                                onChange={handleCheckboxChange}
                                aria-label={texts.anonymousLabel}
                            />
                            <label htmlFor="anonymous" className="block text-sm font-medium text-gray-700">
                                {texts.anonymousLabel}
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            {texts.messageLabel}
                        </label>
                        <textarea
                            id="message"
                            className="form-textarea mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            rows={5}
                            placeholder={texts.messagePlaceholder}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            aria-label={texts.messageLabel}
                        />
                    </div>
                    <ButtonLink href="#">
                        {texts.submitButtonLabel}
                    </ButtonLink>
                </form>
            </div>
        </PagesWrapper>
    )
}
export default AccoladesFormPage;
