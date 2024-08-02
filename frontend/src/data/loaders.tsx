import AxiosInstance from "@/axios/AxiosInstance";
import FeaturesSection from "@/components/custom/FeaturesSection";
import { HeroSection } from "@/components/custom/HeroSection";
import { flattenAttributes, getStrapiURL } from "@/lib/utils";

import qs from "qs";

export const revalidate = 3600; // revalidate the data at most every hour

const baseUrl = getStrapiURL();

export function blockRenderer(block: any) {
  switch (block.__component) {
    case "layout.hero-section":
      return <HeroSection key={block.id} data={block} />;
    case "layout.features":
      return <FeaturesSection key={block.id} data={block} />;
    default:
      return null;
  }
}

async function fetchData(url: string) {
  const authToken = null; // we will implement this later getAuthToken() later
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await AxiosInstance(url, authToken ? headers : {});
    return flattenAttributes(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}

export async function getHomePageData() {
  const url = new URL("/api/home-page", baseUrl);

  url.search = qs.stringify({
    populate: {
      blocks: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
          link: {
            populate: true,
          },
          feature: {
            populate: true,
          },
        },
      },
    },
  });

  return await fetchData(url.href);
}

export async function getGlobalPage() {
  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    populate: [
      "header.logoText",
      "header.ctaButton",
      "footer.logoText",
      "footer.SociaLink",
    ],
  });

  return await fetchData(url.href);
}

export async function getHomeMetadata() {
  const url = new URL("/api/home-page", baseUrl);

  url.search = qs.stringify({
    fields: ["title", "description"],
  });

  return await fetchData(url.href);
}
