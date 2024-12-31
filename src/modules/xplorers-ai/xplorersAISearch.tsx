"use client";
import React from "react";
import Image from "next/image";
import attachmentIcon from "@public/icons/attachment.svg";
import searchIcon from "@public/icons/search.svg";
import spinnerIcon from "@public/icons/spinner.svg";
import { SearchProps } from "@/interface";
import { useXplorersAI } from "@/hooks/useXplorersAI";
import { Button } from "@/components/ui/buttons/button";
import Spinner from "@/components/ui/Spinner";

const XplorersAISearch: React.FC<SearchProps> = ({
  handleFileUpload,
  handleSubmit,
  handleInputChange,
  value,
  loading,
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
      />
      <Button
        size="sm"
        variant={loading ? "outline" : "default"}
        className="ml-2"
        onClick={handleSubmit}
        disabled={value.length === 0}
      >
        {loading ? <Spinner /> : "Submit"}
      </Button>
    </div>
  );
};

export default XplorersAISearch;
