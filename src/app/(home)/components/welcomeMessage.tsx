"use client";

import PageTitle from "@/components/shared/pageTitle";
import useGreetings from "@/app/(home)/hooks";

export function WelcomeMessage() {
  const [language, greetings] = useGreetings();

  return (
    language && <PageTitle title={greetings} subtitle={`( ${language} )`} />
  );
}
