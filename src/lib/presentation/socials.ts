type Social = {
  name: string;
  url: string;
  iconClasses: string;
};
export const Socials: Social[] = [
  {
    name: "Mail",
    url: "mailto:%6d%61%72%65%6b%2e%6b%2e%70%61%6e%6b%6f%77%73%6b%69%40%67%6d%61%69%6c%2e%63%6f%6d",
    iconClasses: "fa-solid fa-envelope",
  },
  {
    name: "GitHub",
    url: "https://github.com/mkpanq",
    iconClasses: "fa-brands fa-github",
  },
  {
    name: "X",
    url: "https://x.com/mkpanq",
    iconClasses: "fa-brands fa-x-twitter",
  },
  // LinkedIn account is hibernated for now
  // {
  //   name: "LinkedIn",
  //   url: "https://linkedin.com/in/mkpanq/",
  //   iconClasses: "fa-brands fa-linkedin"
  // },
];
