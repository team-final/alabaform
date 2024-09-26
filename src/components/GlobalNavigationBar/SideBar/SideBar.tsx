'use client'

import SignInOutButton from '@/components/SignInOutButton/SignInOutButton'
import XButton from '@/components/XButton/XButton'
import QueryProvider from '@/lib/queries/QueryProvider'
import Link from 'next/link'

import styles from './SideBar.module.scss'
import IconMypage from '/public/icons/ic-mypage.svg'

interface SideBarProps {
  closeAction?: () => void
}

export default function SideBar({ closeAction }: SideBarProps) {
  return (
    <article className={styles.gnb}>
      <div className={styles.inner}>
        <section className={styles.head}>
          <XButton onClick={closeAction} />
        </section>
        <section className={styles.body}>
          <ul onClick={closeAction}>
            <li>
              <Link href="/" className={styles.button}>
                <IconMypage />
                마이페이지
              </Link>
            </li>
            <li>
              <QueryProvider>
                <SignInOutButton className={styles.button} />
              </QueryProvider>
            </li>
          </ul>
        </section>
      </div>
    </article>
  )
}