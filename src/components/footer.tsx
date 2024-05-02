export default function Footer() {
  return (
    <footer className="text-slate-200 text-xs italic text-center font-thin mx-auto">
      Marek Pankowski<span className="font-light"> &copy; </span>{" "}
      {new Date().getFullYear()} &#183; Created with{" "}
      <i className="fa-solid fa-heart text-california-900" /> using NextJS
    </footer>
  );
}
