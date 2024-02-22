import Link from 'next/link'

import { getComponents } from '@/lib/components'

export default async function Page(): Promise<JSX.Element> {
  const componentsData = await getComponents()

  return (
    <div>
      {componentsData.map((component) => (
        <div key={component}>
          <Link href={`/playground/${component}`}>{component}</Link>
        </div>
      ))}
    </div>
  )
}
