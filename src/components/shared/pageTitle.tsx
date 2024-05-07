type PageTitleProps = {
  title: string;
  subtitle?: string;
};

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="space-y-3 my-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-200 font-medium">
        {title}
      </h1>

      <h2 className="italic font-thin text-slate-200 text-xs md:text-sm lg:text-base">
        {subtitle}
      </h2>
    </div>
  );
}
