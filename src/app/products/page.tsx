import MeowArticle from "@/components/MeowArticle";
import { getProducts } from "@/service/product";
import Link from "next/link";

export default async function Products() {
    const products = await getProducts();
    const res = await fetch('https://meowfacts.herokuapp.com', {
        next: { revalidate: 3},
    });
    const data = await res.json();
    const factText = data.data[0];
    return (
        <>
            <h1>제품 소개 페이지</h1>
            <ul>
                {products.map(({ id, name }, index) => (
                    <li key={index}>
                        <Link href={`products/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
            <MeowArticle />
        </>
    )
}