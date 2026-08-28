import AuthLayout from "@/components/Auth/AuthLayout";
import ForgotPasswordForm from "@/components/Auth/ForgotPasswordForm";

export const metadata = {
  title: "Forgot Password | D Gold Event Centre",
  description: "Reset your D Gold Event Centre account password.",
};

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Forgot your password?"
      description="Enter the email address associated with your account and we'll help you get back in."
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
