import Image from 'next/image'

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <Image 
          src="/globe.svg" 
          alt="Globe" 
          width={120} 
          height={120}
          className="mx-auto mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">Welcome Home</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover shopping centres near you with our interactive platform. 
          Find everything you need in one place.
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="/shopping-centres" 
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Browse Centres
          </a>
          <a 
            href="#" 
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </main>
  )
}