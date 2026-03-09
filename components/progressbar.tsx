export default function ProgressBar({ progress }: { progress: number }) {

  return (
    <div className="w-full mb-8">

      <p className="mb-2 text-sm text-gray-600">
        Course Progress: {progress}%
      </p>

      <div className="w-full bg-gray-200 rounded-full h-4">

        <div
          className="bg-linear-to-r from-red-600 to-indigo-700 h-4 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />

      </div>

    </div>
  )
}