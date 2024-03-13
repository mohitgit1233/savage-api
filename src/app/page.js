import Image from "next/image";
import styles from "./page.css";
import ApiForm from "@/components/ApiForm/page"
import Link from "next/link";

export default function Home() {
  return (
    <main className="main">
      <div className="main-left">
         <p className="">Running out of savage replies,<br />excuses or jokes?</p>
         <p className="">We got you covered 💪</p>      
      </div>

      
      <br />
      <div className="main-right">
           <ApiForm/>
      </div>
      
    </main>
  );
}
