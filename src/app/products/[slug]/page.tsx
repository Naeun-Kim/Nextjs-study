import GoProductsButton from '@/components/GoProducts';
import { getProduct, getProducts } from '@/service/product';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation'

type Props = {
    params: {
        slug: string;
    }
}

export function generateMetadata({params}: Props) {
    return {
        title: params.slug
    }
}

export default async function ProductPage({params: {slug}}: Props) {
    const product = await getProduct(slug);
    if (!product) {
        // notFound();
        redirect('/products')
    }
    return  (
        <>
        <h1>{product.name} 설명 페이지</h1>
        <Image src={product.thumb} alt={product.name} width={300} height={300} />
        <GoProductsButton />
        </>
    )
}

export async function generateStaticParams() {
    //모든 제품의 페이지들을 미리 만들어 두기(SSG)
    const products = await getProducts();
    return products.map(product => ({
        slug: product.id,
    }));
}