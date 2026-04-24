import Link from "next/link";
import ImageCarousel from "../../components/ImageCarousel";

interface ShoppingCentrePageProps {
  params: {
    id: string;
  };
}

export default async function Page(props: ShoppingCentrePageProps) {
  const { id } = await props.params;

  // Sample images - replace with actual shopping centre images
  const images = [
    "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Centre: {id}</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <ImageCarousel images={images} />
      </div>

      <Link href="/shopping-centres" className="text-blue-500 hover:underline">
        ← Back to Shopping Centres
      </Link>
    </div>
  );
}