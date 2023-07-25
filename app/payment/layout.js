import Link from "next/link";
import BackButton from "./BackButton";

export default function RootLayout({ children }) {
    return <section id="payment" className="w-full relative h-full">{children}
        <footer className="payment_footer w-full max-w-md p-2 py-3 text-center bottom-0 fixed bg-gray-200">
            <button className="w-full font-semibold p-1 bg-primary-pink text-white rounded-md">Click here to pay &#8377;1400</button>
            <Link className="underline text-center w-full" href='https://api.whatsapp.com/send?phone=8825099279&text=Hello%20there!'>If you have any query? chat with us</Link>
        </footer>
        <div className="absolute top-3 left-3 w-10 flex items-center
         justify-center rounded-md shadow-base bg-white">
            <BackButton />
            </div>
    </section>;
}
