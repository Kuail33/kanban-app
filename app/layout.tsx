import "./globals.css";
import styles from "./styles/title.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles["title-box"]}>KANBAN BOARD</div>
        {children}
      </body>
    </html>
  );
}
