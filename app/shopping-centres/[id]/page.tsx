export default async function Page(props: PageProps<'/shopping-centres/[id]'>) {
  const { id } = await props.params
  return <h1>shopping centre: {id}</h1>
}