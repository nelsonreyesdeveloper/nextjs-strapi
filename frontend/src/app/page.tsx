import AxiosInstance from "@/axios/AxiosInstance";
import FullWidthLayout from "@/components/FullWidthLayout";

async function getStrapiData(path: string) {
  const baseurl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await AxiosInstance.get(`${path}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page");
  const { title, description, layout } = strapiData.data.attributes;

  return (
    <>
      {layout === "full_width" ? (
        <FullWidthLayout>
          <h1>{title}</h1>
          <p>{description}</p>
        </FullWidthLayout>
      ) : (
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      )}
    </>
  );
}
