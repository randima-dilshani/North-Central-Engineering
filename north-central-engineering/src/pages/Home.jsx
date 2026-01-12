import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-100 py-20 text-center">
        <h1 className="text-4xl font-bold text-blue-900">
          Engineering Reliable Solutions
        </h1>
        <p className="mt-4 text-gray-600">
          Electrical • Mechanical • IT Solutions • Tools Supply
        </p>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-8">
        {[
          "Electrical Engineering",
          "Mechanical Services",
          "IT Solutions",
        ].map((service) => (
          <div key={service} className="p-6 shadow rounded text-center">
            <h3 className="font-semibold text-lg">{service}</h3>
            <p className="text-gray-600 mt-2">
              Professional and reliable solutions.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
