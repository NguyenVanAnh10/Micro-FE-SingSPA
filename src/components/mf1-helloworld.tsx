import React from "react";
import { useNavigate } from "react-router";
import { Button, SHButton } from "@euroland/shadcn-ui-styleguide";

export default function Mf1Helloworld() {
  let navigate = useNavigate();
  return (
    <div>
      <SHButton>mf1-helloworld</SHButton>
      <Button
        onClick={() => {
          navigate("/component");
        }}
      >
        go to Component
      </Button>
    </div>
  );
}
