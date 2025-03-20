// The structure of layout: 
// export default function RootLayout() { // That's what will appear in all navigation
//   return <html lang="en">
//     <body>
//
//     </body>
//   </html>
// }

import "@/app/_styles/globals.css"

// * Way to add font
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
const josefin = Josefin_Sans({
  subsets: ["latin"], // set of characters
  display: "swap"
}) // *swap means that the text will appear in default font while our font is downloading
//  *Add the classname of obj above in body class
// console.log(josefin);


export const metadata = { // *like metadata in head
  // title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis"
  },
  description: "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surronded by beautiful mountins and dark forsets",
};
export default function RootLayout({ children }) { // The content of layout will not be rendered as we navigate through the application
  return <html lang="en">
    <body className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased`}>
      <Header />
      <div className="flex-1 px-8 py-12 grid">
        <main className="max-w-7xl mx-auto w-full">
          <ReservationProvider>
            {children} {/* it's server component btw, but when we passed it as a prop then it's not a problem*/}
          </ReservationProvider>
        </main>
      </div>
    </body>
  </html >
}