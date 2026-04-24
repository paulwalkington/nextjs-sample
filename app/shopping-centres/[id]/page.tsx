import Link from "next/link";

interface ShoppingCentrePageProps {
  params: {
    id: string;
  };
}

export default async function Page(props: ShoppingCentrePageProps) {
  const { id } = await props.params
  return <h1>shopping centre: {id}</h1>
}