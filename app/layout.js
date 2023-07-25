import localfont from "next/font/local";
import "@/styles/globals.css";

const myfont = localfont({
  src: [
    {
      path: "./fonts/Gilroy-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/Gilroy-Bold.ttf",
      style: "normal",
      weight: "700",
    },
  ],
});
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={myfont.className}>
      <body>
        <main className="main_layout border shadow-none rounded-none w-screen bg-white relative max-w-md h-screen m-auto overflow-hidden md:shadow-base md:rounded-md  ">
        
      {children}
          </main>
      </body>
    </html>
  );
}
