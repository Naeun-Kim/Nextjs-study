import styles from '@/app/layout.module.css'

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.products}>
        <nav>
            <a href="">여성옷</a>
            <a href="">남성옷</a>
        </nav>
        <section>
            {children}
        </section>
    </div>
  )
}
