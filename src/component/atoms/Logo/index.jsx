import React from "react";
import { Link } from "react-router-dom";
import { Text } from "..";

export const Logo = () => {
  return (
    <div>
      <Link to="/">
        <Text type="h2" className="compy-logo">
          Company logo
        </Text>
      </Link>
    </div>
  );
};
