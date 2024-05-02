import { greetingsData } from "@/lib/presentation/greetings";
import PageTitle from "@/components/shared/pageTitle";

export function WelcomeMessage() {
  const language =
    Object.keys(greetingsData)[
      Math.floor(Math.random() * Object.keys(greetingsData).length)
    ];
  const greetings = greetingsData[language] + " 👋";

  return <PageTitle title={greetings} subtitle={`( ${language} )`} />;
}
