import React from "react";
import { PageTemplate } from "../../templates/Pagetemplates";
import { KnightBoard, PlayGame } from "../../molecules";

export const LandingPage = () => {
  return (
    <>
      <PageTemplate>
        <div className="landing-bg">
          <KnightBoard />
          <PlayGame />
        </div>
      </PageTemplate>
    </>
  );
};
