export default function HomePage() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Welcome to My CI/CD Test App 🚀</h2>
      <p className="text-gray-700">
        This is the Home page. Once CI/CD is configured, every push to main will
        automatically build and deploy this app!
      </p>
      <div><img src="/logo.png" alt="image" /></div>
    </div>
  );
}
