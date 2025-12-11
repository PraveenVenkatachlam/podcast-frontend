export default function CreatePublish() {
  return (
    <section className="w-full py-20 bg-white flex flex-col items-center px-6">
      <h2 className="text-4xl font-bold text-center max-w-2xl">
        Create & Publish Podcasts with Ease
      </h2>

      <p className="mt-4 text-gray-500 max-w-2xl text-center">
        Record, edit, and publish your podcast episodes using our simple tools.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14 max-w-6xl">
        {/* Step 1 */}
        <div className="text-center">
          <img src="/images/create/create-1.png" className="mx-auto" />
          <h3 className="mt-4 text-xl font-semibold">Record</h3>
          <p className="text-gray-500 mt-2">
            Record high-quality audio or video directly from your browser.
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-center">
          <img src="/images/create/create-2.png" className="mx-auto" />
          <h3 className="mt-4 text-xl font-semibold">Edit</h3>
          <p className="text-gray-500 mt-2">
            Use built-in AI tools to clean, enhance, and edit your episode.
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-center">
          <img src="/images/create/create-3.png" className="mx-auto" />
          <h3 className="mt-4 text-xl font-semibold">Publish</h3>
          <p className="text-gray-500 mt-2">
            Distribute to Spotify, Apple Podcasts, and all major platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
