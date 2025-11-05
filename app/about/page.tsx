export default function AboutPage() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">About This Project 🧩</h2>
      <p className="text-gray-700">
        This project demonstrates a full CI/CD setup using GitHub Actions for a Next.js app.
        Every change to the main branch will trigger a new build and deploy.
      </p>
    </div>
  );
}
