"use client";

import TextEditor from "@/components/ui/textEditor";
import {
  impressiveCVContents,
  persuasiveCoverLetterContents,
} from "@/constants/pageContents/pathwayToSuccess";
import React, { useState } from "react";
import { concat, map } from "lodash-es";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DOMPurify from "dompurify";

const CraftingCV = () => {
  const [value, setValue] = useState(persuasiveCoverLetterContents.content);

  return (
    <div>
      {/* uncomment this to update the contents */}
      {/* <TextEditor initialValue={value} onEditorChange={setValue} /> */}

      <div className="p-5">
        <section>
          <div className="text-2xl font-semibold">
            {impressiveCVContents.title}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(impressiveCVContents.content),
            }}
          />
        </section>
        <hr className="my-5" />
        <section>
          <div className="text-2xl font-semibold">
            {persuasiveCoverLetterContents.title}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(persuasiveCoverLetterContents.content),
            }}
          />
        </section>
        <hr className="my-5" />
        <section>
          <div className="text-2xl font-semibold">
            Frequently Asked Questions (FAQs)
          </div>
          <div>
            {map(
              concat(
                impressiveCVContents.faqs,
                persuasiveCoverLetterContents.faqs,
              ),
              (content) => (
                <Accordion type="single" collapsible key={content.title}>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl font-normal">
                      {content.title}
                    </AccordionTrigger>
                    <AccordionContent>{content.description}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ),
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CraftingCV;
