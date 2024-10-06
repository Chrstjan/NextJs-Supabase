export const metadata = {
  title: "NextJs Supabase",
  description: "Fetching",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
