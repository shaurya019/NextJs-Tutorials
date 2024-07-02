import Image from "next/image";

export default function PageId({ params }: any) {
    return (
        <h1>Page - {params.id}</h1>
    );
}