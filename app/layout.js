import "./globals.css";

export const metadata = {
  title: "Linktree - The Only Link in Bio You Need",
  description: "Create, share, and grow your audience with a single link for all your content, products, and social profiles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
