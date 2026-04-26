export default function AppFooter() {
  return (
    <footer className="mt-auto border-t bg-white py-6">
      <div className="mx-auto max-w-7xl px-4 flex justify-between items-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Universal Fleet OS. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Documentation
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
