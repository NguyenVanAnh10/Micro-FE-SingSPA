import React from "react";
import { useNavigate } from "react-router";
import { Button, SHButton } from "@euroland/shadcn-ui-styleguide";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/slices";

export default function Mf1Helloworld() {
  let navigate = useNavigate();

  const value = useSelector((state: any) => state.mf1.value);
  const dispatch = useDispatch();
  return (
    <div className="bg-red-100 h-[calc(100vh-100px)]">
      <SHButton
        onClick={() => {
          navigate("/mf2");
        }}
      >
        mf1-helloworld
      </SHButton>
      <Button onClick={() => dispatch(increment())}>increment {value}</Button>
    </div>
  );
}
