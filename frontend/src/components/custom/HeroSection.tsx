import Link from "next/link";
import { StrapiImage } from "./StrapiImage";

interface ImageProps {
  id: number;
  url: string;
  alternativeText: null;
}

interface LinkProps {
  id: number;
  url: string;
  text: string;
  isExternal: boolean;
}

export interface HeroSectionProps {
  data: {
    id: number;
    __component: string;
    Heading: string;
    SubHeading: string;
    image: ImageProps;
    link: LinkProps;
  };
}

export function HeroSection({ data }: Readonly<HeroSectionProps>) {

  return (
    <header className="absolute w-full left-0 h-[500px] overflow-hidden">
      <div className="h-full w-full">
        <div
          className="absolute bg-gradient-to-r from-orange-500 to-black z-10 inset-0 object-cover w-full h-full"
          // src="https://images.pexels.com/photos/4050314/pexels-photo-4050314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover",
            background: "linear-gradient(90deg, #d53369 0%, #f5ed7a 100%)",
            padding: "50px 0", // Añade un padding en el hero si es necesario
          }}
        ></div>
        <div className="relative px-5 z-50 h-full grid sm:grid-cols-2 sm:gap-4   bg-black bg-opacity-20 ">
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white ">
            {data.Heading && (
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                {data.Heading}
              </h1>
            )}

            {data.SubHeading && (
              <p className="mt-4 text-lg md:text-xl lg:text-2xl">
                {data.SubHeading}
              </p>
            )}

            {data.link.url && (
              <Link
                className="mt-8 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white rounded-md shadow hover:bg-gray-100"
                href={data.link.url}
                target={data.link.isExternal ? "_blank" : undefined}
              >
                {data.link.text}
              </Link>
            )}
          </div>
          <div className="relative jus z-10 hidden sm:block ">
            <div className="flex justify-center items-center h-full">
              <StrapiImage
                src={data.image.url}
                alt={data.image.alternativeText ?? ""}
                height={400}
                width={400}
              ></StrapiImage>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
