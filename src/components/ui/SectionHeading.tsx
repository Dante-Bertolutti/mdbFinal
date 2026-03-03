interface SectionHeadingProps {
  label: string;
  heading: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  heading,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="text-base font-semibold text-mdb-orange">{label}</p>
      <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
        {heading}
      </h2>
      {description && (
        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
