import { getComponents } from '@/lib/components'

export default async function Page(): Promise<JSX.Element> {
  const componentsData = await getComponents()

  return (
    <div>
      {componentsData.map((component) => (
        <div key={component}>{component}</div>
      ))}
    </div>
  )
}
