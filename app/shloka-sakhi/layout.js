import CustomHeader from "@/ui/CustomHeader";
import BackButton from "./BackButton";
import ActivityCompleted from "@/ui/ActivityCompleted";

export default function ShlokaSakhiLayout({ children }) {

    return (
        <section id="sholka-sakhi" className="h-full">
      <CustomHeader
        wrapperClass="border-b-2 shadow-dark"
        containerClass="flex items-center w-full h-full justify-start px-3"
      >
        <BackButton />
        <h1 className="font-bold text-xl flex-1 text-center">Shloka-Sakhi</h1>
            </CustomHeader>
        {children}
          <ActivityCompleted />
            </section>
    );
 }