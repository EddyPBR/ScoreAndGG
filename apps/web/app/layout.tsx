export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
