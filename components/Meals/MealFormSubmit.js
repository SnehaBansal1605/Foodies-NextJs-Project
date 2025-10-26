"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const MealFormSubmit = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? "Sharing Meal..." : "Share Meal"}
    </button>
  );
};

export default MealFormSubmit;
