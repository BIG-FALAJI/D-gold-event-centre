import AuthLayout from "@/components/auth/AuthLayout";
import SignInForm from "@/components/auth/SignInForm";

export const metadata = {
  title: "Sign In | D Gold Event Centre",
  description: "Sign in to manage your D Gold Event Centre bookings.",
};

export default function SignInPage() {
  return (
    <AuthLayout
      title="Welcome back"
      description="Sign in to manage your bookings and plan your next event."
    >
      <SignInForm />
    </AuthLayout>
  );
}
