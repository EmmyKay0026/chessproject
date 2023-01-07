import React from "react";
import { KnightBoard } from "../../molecules/KnightBoard";
import { PageTemplate } from "../../templates/Pagetemplates";

export const LandingPage = () => {
  return (
    <>
      <PageTemplate>
        <div className="landing-bg">
          <KnightBoard />
        </div>
      </PageTemplate>
    </>
  );
};
