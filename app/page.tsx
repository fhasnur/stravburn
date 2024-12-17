import InputForm from "@/components/input-form";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-md shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">StravBurn🔥</h1>
        <InputForm />
      </div>
    </main>
  );
}
