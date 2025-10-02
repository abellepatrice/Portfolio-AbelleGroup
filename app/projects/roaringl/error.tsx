"use client"
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-red-600">Something went wrong</h1>
      <p className="mt-2 text-gray-600">{error.message}</p>
      
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Try Again
      </button>
    </div>
  )
}
