import Image from 'next/image'
import styles from './page.module.css'
import { notFound } from 'next/navigation'

export default function Home() {
  notFound();
  return <h1>홈페이지</h1>
}
