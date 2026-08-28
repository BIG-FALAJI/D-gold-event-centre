import AuthLayout from "@/components/Auth/AuthLayout";
import SignUpForm from "@/components/Auth/SignUpForm";

export const metadata = {
  title: "Create Account | D Gold Event Centre",
  description:
    "Create your D Gold Event Centre account and manage your event bookings.",
};

export default function SignUpPage() {
  return (
    <AuthLayout
      title="Create your account"
      description="Create an account to manage your bookings and keep track of your events."
    >
      <SignUpForm />
    </AuthLayout>
  );
}
