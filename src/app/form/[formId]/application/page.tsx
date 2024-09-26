'use client'

import AnnouncementInfo from '@/components/FormDetails/AnnouncementInfo/AnnouncementInfo'
import ApplicationStatus from '@/components/FormDetails/ApplicationStatus/ApplicationStatus'
import ImageSlider from '@/components/FormDetails/ImageSlider/ImageSlider'
import { useFormDetailsQuery } from '@/lib/queries/formDetailsQuery'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import styles from './page.module.scss'

// 지원내역 상세보기 페이지

export default function MyApplicationsPage({
  params,
}: {
  params: { formId: string }
}) {
  const { formId } = params
  const { data: formDetails } = useFormDetailsQuery(Number(formId))
  const [scrapCount, setScrapCount] = useState(0)
  const [applicationCount, setApplicationCount] = useState(0)

  useEffect(() => {
    if (formDetails) {
      setScrapCount(formDetails.scrapCount)
      setApplicationCount(formDetails.applyCount)
    }
  }, [formDetails])

  return (
    <div className={styles['application-details']}>
      <section className={styles['application-details-image']}>
        <ImageSlider formDetails={formDetails} />
      </section>

      <div className={styles['application-details-info']}>
        <h1 className={styles['application-details-title']}>
          {formDetails?.title}
        </h1>

        <section className={styles['application-details-info-form']}>
          <AnnouncementInfo formDetails={formDetails} />

          <div>
            <div className={styles['job-details-header-container']}>
              <div className={styles['job-details-header']}>
                <h2 className={styles['job-details-name']}>코드잇</h2>
                <div className={styles['job-details-summary']}>
                  <span>서울 종로구</span>
                  <span>경력 무관</span>
                </div>
              </div>

              <h1 className={styles['job-details-title']}>
                {formDetails?.title}
              </h1>
            </div>

            <div className={styles['job-details-status-container']}>
              <div className={styles['job-details-status-auth']}>
                <div className={styles['job-details-auth-item']}>
                  <Image
                    src="/icons/ic-bookmark.svg"
                    alt="스크랩"
                    width={36}
                    height={36}
                    className={styles['job-details-auth-item-img']}
                  />
                  <h3 className={styles['auth-title']}>스크랩</h3>
                </div>
                <p className={styles['auth-content']}>{scrapCount}회</p>
              </div>

              <div className={styles['job-details-status-auth']}>
                <div className={styles['job-details-auth-item']}>
                  <Image
                    src="/icons/ic-user2.svg"
                    alt="기본 이미지"
                    width={36}
                    height={36}
                    className={styles['job-details-auth-item-img']}
                  />
                  <h3 className={styles['auth-title']}>지원현황</h3>
                </div>
                <p className={styles['auth-content']}>
                  현재까지 {applicationCount}명이 알바폼에 지원했어요!
                </p>
              </div>
            </div>

            <p className={styles['job-details-description']}>
              {formDetails?.description}
            </p>
          </div>
        </section>

        <section className={styles['application-details-info-status']}>
          <ApplicationStatus />
        </section>
      </div>
    </div>
  )
}
