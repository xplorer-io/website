"use client";

import React, { ChangeEvent, MouseEvent } from "react";
import Image from "next/image";
import attachmentIcon from "@public/icons/attachment.svg";
import searchIcon from "@public/icons/search.svg";
import { FileUploadEvent } from "@/hooks/useXplorersAI";
interface SearchProps {
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
  handleFileUpload: (e: FileUploadEvent) => void;
  value: string;
}
const XplorersAISearch: React.FC<SearchProps> = ({
  handleInputChange,
  handleSubmit,
  handleFileUpload,
  value,
}) => {
  return (
    <div className="relative m-3 flex items-end">
      <div className="mr-3 p-1">
        <label htmlFor="file-upload" className="cursor-pointer">
          <Image src={attachmentIcon} alt="Attach" width={24} height={24} />
        </label>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>

      <textarea
        onChange={handleInputChange}
        placeholder="Type your message..."
        rows={1}
        value={value}
        className="flex-grow resize-none overflow-hidden rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
        style={{ maxHeight: "40vh" }}
      />

      <button
        onClick={handleSubmit}
        className="ml-1 flex items-center justify-center rounded-lg p-1 text-white focus:outline-none"
      >
        <Image src={searchIcon} alt="Send" width={24} height={24} />
      </button>
    </div>
  );
};

export default XplorersAISearch;
