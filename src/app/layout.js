import "./globals.css";

export const metadata = {
  title: "D Gold Event Centre",
  description:
    "D Gold Event Centre — a modern and versatile event venue in Egbeda, Lagos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
