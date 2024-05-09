import { useEffect, useState } from "react";
import { greetingsData } from "@/app/(home)/_lib/data/greetings";

export default function useGreetings() {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    setLanguage(
      Object.keys(greetingsData)[
        Math.floor(Math.random() * Object.keys(greetingsData).length)
      ],
    );
  }, [language]);

  const greetings = greetingsData[language] + " 👋";

  return [language, greetings];
}
