import React from "react";
import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealSlug);
  return {
    title: meal.title,
    description: meal.summary,
  };
}
const MealDetails = ({ params }) => {
  const mealData = getMeal(params.mealSlug);
  if (!mealData) {
    notFound();
  }
  mealData.instructions = mealData.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={mealData.image} alt={mealData.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{mealData.title}</h1>
          <p className={classes.creator}>
            by{" "}
            <a href={`mailto:${mealData.creator_email}`}>{mealData.creator}</a>
          </p>
          <p className={classes.summary}>{mealData.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: mealData.instructions }}
        ></p>
      </main>
    </>
  );
};

export default MealDetails;
