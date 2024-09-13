
import Heading from "./heading.js";
import Link from "next/link";
export default function page(){
    let a = 5;
    let b = 10;

    return(
        <main>
            <Heading/>
            <Heading/>
            <Heading/>
            <p>week2</p>
            <p>The sum of a + b is {a + b}.</p>
            <Link href="/">go to homepage</Link>
        </main>
    );
}