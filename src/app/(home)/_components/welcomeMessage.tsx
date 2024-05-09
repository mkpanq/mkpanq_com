"use client";

import PageTitle from "@/components/shared/pageTitle";
import useGreetings from "@/app/(home)/_lib/hooks";

// TODO: Try to add animation
export function WelcomeMessage() {
  const [language, greetings] = useGreetings();

  return (
    language && <PageTitle title={greetings} subtitle={`( ${language} )`} />
  );
}
