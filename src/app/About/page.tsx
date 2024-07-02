import Image from "next/image";
import Link from "next/link";

const navLinks = [
    { name: "Link1", href: "/"},
    {name: "Link2" , href: "/Products/1"}
]
export default function About() {
    return (
        <>
            <h1>About</h1>
            {navLinks.map((x) => {
                return (
                    <Link href={x.href} key={x.name}>
                        {x.name}
                    </Link>
                )
            })}
        </>
    );
}