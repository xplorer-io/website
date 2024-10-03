import React from "react";
import { HeroSection, CareerSuccessGuide } from "@/modules/pathway-to-success";
import InfoCardTemplate from "@/components/ui/InfoCardTemplate";

const PathwayToSuccess = () => {
  return (
    <div>
      <InfoCardTemplate
        description="lorenasdfjas sadlf lasfas flasf laksf lskflksajflask alskf lflkas flLorem ipsum dolor, sit amet consectetur adipisicing elit. Velit mollitia enim amet, maiores dicta eum ut cum quaerat iste facilis sunt, quidem deserunt neque iure. Corrupti debitis molestias temporibus hic!"
        initialTitle="something"
        highlightTitle="Summary Good"
        number="5"
        passingImage
        link="https://wwww.facebook.com"
      />
      <HeroSection />
      <CareerSuccessGuide />
    </div>
  );
};

export default PathwayToSuccess;
