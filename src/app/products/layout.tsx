import styles from '@/app/layout.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '멋진 제품 쇼핑몰 | 전체 상품',
    description: '전체 상품 리스트',
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.products}>
        <nav>
            <Link href="/products/women">여성옷</Link>
            <Link href="/products/man">남성옷</Link>
        </nav>
        <section>
            {children}
        </section>
    </div>
  )
}
