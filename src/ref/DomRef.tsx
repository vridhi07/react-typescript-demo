import React, { useEffect, useRef } from "react";

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);
  console.log(inputRef, "inputRef");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enter Useref Value" />
    </div>
  );
};
