"use client";

import { launchingYourCareerContents } from "@/constants/pageContents/pathwayToSuccess";
import React, { useState } from "react";
import { map } from "lodash-es";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DOMPurify from "isomorphic-dompurify";

const LaunchingYourCareer = () => {
  const [value, setValue] = useState(launchingYourCareerContents.content);

  return (
    <div>
      {/* uncomment this to update the contents */}
      {/* <TextEditor initialValue={value} onEditorChange={setValue} /> */}

      <div className="p-5">
        <section>
          <div className="text-2xl font-semibold">
            {launchingYourCareerContents.title}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(value),
            }}
          />
        </section>
        <hr className="my-5" />
        <section>
          <div className="text-2xl font-semibold">
            Frequently Asked Questions (FAQs)
          </div>
          <div>
            {map(launchingYourCareerContents.faqs, (content) => (
              <Accordion type="single" collapsible key={content.title}>
                <AccordionItem value={content.title}>
                  <AccordionTrigger className="text-xl font-normal">
                    {content.title}
                  </AccordionTrigger>
                  <AccordionContent>{content.description}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LaunchingYourCareer;
