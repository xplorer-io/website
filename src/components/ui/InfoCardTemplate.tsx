import React from "react";
import ImagePass from "./ImagePass";

interface InfoCardTemplateProps {
  titleNumber: string;
  initialTitle: string;
  highlightedTitle: string;
  description: string;
  passingImage: boolean;
  src?: string;
  alt?: string;
  Imagelink?: string;
}
/**
 * InfoCardTemplate is a reusable React component designed to display a card with a number,
 * two titles, a description, and an optional image. The card is structured for use in a CV template layout
 * with customizable content and style based on TailwindCSS.
 *
 * Props:
 * @param {string} number - The number to display inside the card.
 * @param {string} initialTitle - The primary title to display at the top of the card.
 * @param {string} highlightTitle - The highlighted title to emphasize in the card, styled with a custom yellow color.
 * @param {string} description - The description text for the card content.
 * @param {boolean} passingImage - A boolean flag to determine whether an image should be displayed using the ImagePass component.
 * @param {string} [src] - The source URL of the image to be passed to ImagePass (optional).
 * @param {string} [alt] - Alternative text for the image (optional).
 * @param {string} [Imagelink] - A hyperlink for the image, providing a clickable link if an image is passed (optional).
 */

const InfoCardTemplate: React.FC<InfoCardTemplateProps> = ({
  titleNumber,
  initialTitle,
  highlightedTitle,
  description,
  passingImage,
  src,
  alt,
  Imagelink,
}) => {
  return (
    <div className="flex min-h-[80vh] w-[80%] flex-col items-center justify-center bg-cv-template-background text-white sm:w-[45%] lg:w-[33%] xl:w-[33%]">
      <article aria-label={`Info card: ${initialTitle} ${highlightedTitle}`}>
        <div className="p-12">
          <div
            className="flex h-[53px] w-[50px] items-center justify-center rounded-full bg-custom-yellow p-2 font-extrabold text-black"
            aria-label={`Section number ${titleNumber}`}
          >
            {titleNumber}.
          </div>
          <div className="flex w-2/3 justify-between">
            <div className="flex-1 text-5xl">{initialTitle}</div>
            <div className="ml-4 min-w-[45px] flex-shrink-0 text-5xl">
              <ImagePass
                shouldHideImage={passingImage}
                alt={alt ?? "imageDesc"}
                src={src ?? "/icons/right_pointing_arrow.svg"}
                link={Imagelink}
              />
            </div>
          </div>
          <div
            className="text-5xl font-bold text-custom-yellow"
            aria-label="Highlight title"
          >
            {highlightedTitle}
          </div>
          <div className="mt-5" aria-label="Description">
            {description}
          </div>
        </div>
      </article>
    </div>
  );
};

export default InfoCardTemplate;
