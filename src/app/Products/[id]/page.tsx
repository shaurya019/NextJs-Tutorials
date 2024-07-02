import Image from "next/image";
import { notFound } from "next/navigation";

export default function PageId({ params }: any) {
    if (parseInt(params.id) > 100) {
        notFound();
    }
    return (
        <h1>Page - {params.id}</h1>
    );
}