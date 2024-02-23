import Link from 'next/link'

import { getComponents } from '@/lib/components'
import { Resources } from '@/components/Resources'

export default async function Page(): Promise<JSX.Element> {
  const componentsData = await getComponents()

  return (
    <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2">
      {componentsData.map((component) => (
        <div
          key={component}
          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-gray-300 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div className="min-w-0 flex-1">
            <Link
              href={`/playground/${component}`}
              className="focus:outline-none"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">{component}</p>
            </Link>
          </div>
        </div>
      ))}
      <Resources />
    </div>
  )
}
