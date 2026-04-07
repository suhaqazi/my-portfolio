import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Background orbs */}
        <div className="background-orbs">
          <div className="orb-1" />
          <div className="orb-2" />
          <div className="orb-3" />
          <div className="orb-4" />
        </div>
        {children}
      </body>
    </html>
  );
}
