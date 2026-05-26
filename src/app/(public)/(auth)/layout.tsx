import AuthPreview from "@/features/auth/components/auth-preview";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border bg-card shadow-xl md:grid-cols-2">
        {/* Left Side */}
        <AuthPreview />

        {/* Right Side — Auth form */}
        <div className="flex flex-col justify-center p-10">
          {/* children for login/signup, forgot password */}
          <div className="mx-auto w-full max-w-sm space-y-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
