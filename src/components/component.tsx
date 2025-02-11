import React from "react";
import { useNavigate } from "react-router";

export default function Component() {
  let navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/settings");
        }}
      >
        component
      </button>
    </div>
  );
}
