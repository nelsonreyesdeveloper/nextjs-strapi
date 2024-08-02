import React from "react";

interface FeatureProps {
  id: number;
  Heading: string;
  Subheading: string;
  icon: string;
}

interface FeaturesSectionProps {
  data: {
    id: number;
    __component: string;
    title: string;
    description: string;
    feature: FeatureProps[];
  };
}

function GetIcon(icon: string) {
  switch (icon) {
    case "CLOCK_ICON":
      return <ClockIcon />;
    case "CHECK_ICON":
      return <CheckIcon />;

    case "CLOUD_ICON":
      return <CloudIcon />;
  }
}

const FeaturesSection = ({ data }: Readonly<FeaturesSectionProps>) => {
  return (
    <div className="pt-[530px] px-4 mx-auto">
      <h2 className="text-center font-bold text-2xl">{data.title}</h2>
      <p className="text-center">{data.description}</p>
      <div className="grid mt-5 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {data.feature.map((feature) => (
          <div
            className="flex  flex-col items-center rounded-sm p-5 bg-gray-50 hover:bg-gray-100 shadow-md"
            key={feature.id}
          >
            {GetIcon(feature.icon)}
            <h3 className="font-bold my-4 text-center">{feature.Heading}</h3>
            <p className="mt-5">{feature.Subheading}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      className="w-14 h-14"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      className="w-14 h-14"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CloudIcon(props: any) {
  return (
    <svg
      className="w-14 h-14"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

export default FeaturesSection;
