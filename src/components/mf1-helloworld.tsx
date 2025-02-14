import React from "react";
import { useNavigate } from "react-router";

// import { Button, SHButton } from "@euroland/shadcn-ui-styleguide";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/slices";
import { Button } from "@/components/ui/button";

export default function Mf1Helloworld() {
  let navigate = useNavigate();

  const value = useSelector((state: any) => state.mf1.value);
  const dispatch = useDispatch();
  return (
    <div className="bg-red-100 h-[calc(100vh-100px)] flex gap-3">
      <Button
        onClick={() => {
          navigate("/mf2");
        }}
      >
        mf1-helloworld
      </Button>
      <Button onClick={() => dispatch(increment())}>increment {value}</Button>
    </div>
  );
}
