'use client';

import { CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  GraduationCapIcon,
  BriefcaseIcon,
  CodeIcon,
  SmileIcon,
} from 'lucide-react';
import Image from 'next/image';

export function StylishResumeFinal() {
  const skills = [
    'Go',
    'PHP',
    'Vue.js',
    'Nuxt.js',
    'React.js',
    '要件定義',
    '設計',
    '開発',
    '運用保守',
    'PM',
  ];

  // 画像URLを追加
  const profileImageUrl = '/my-image.png';

  return (
    <div className="min-h-screen bg-[#e8f3e8] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative h-40 sm:h-48 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 flex items-center justify-between px-4 sm:px-8">
          <div className="absolute inset-0 bg-blue-600 opacity-30 transform -skew-y-6"></div>

          <div className="relative z-10 flex-grow">
            <h1 className="text-lg sm:text-2xl font-bold leading-tight text-white">
              引山 裕貴
              <span className="text-sm sm:text-2xl ml-2">
                (ひきやま ゆうき)
              </span>
            </h1>
            <p className="text-sm sm:text-base text-white">エンジニア</p>
          </div>

          <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg flex-shrink-0 ml-4">
            <Image
              src={profileImageUrl}
              alt="プロフィール画像"
              width={112}
              height={112}
              className="object-cover"
            />
          </div>
        </div>
        <CardContent className="p-8">
          <header className="mt-8 mb-8">
            <p className="text-gray-600">
              〒270-0139 千葉県流山市おおたかの森南3丁目2-2-206
            </p>
            <p className="text-gray-600">hikkybass@gmail.com</p>
          </header>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <CodeIcon className="mr-2 h-6 w-6 text-blue-500" />
              スキル
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-3 py-1 bg-blue-100 text-blue-800"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          <section className="mb-8 bg-[#fafafa] rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
              <GraduationCapIcon className="mr-2 h-6 w-6 text-blue-500" />
              学歴
            </h3>
            <div>
              <p className="font-medium">北海道大学 大学院情報科学研究院</p>
              <p className="text-sm">2014年卒業</p>
            </div>
          </section>

          <section className="mb-8 bg-[#fafafa] rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
              <BriefcaseIcon className="mr-2 h-6 w-6 text-blue-500" />
              職歴
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-gray-800">
                  J-CAT株式会社 - PM、EM、Webエンジニア
                </p>
                <p className="text-sm text-gray-600">2022年9月 - 2024年7月</p>
                <ul className="list-disc text-xs md:text-sm mt-2 text-gray-700 font-medium pl-5">
                  <li>
                    伝統文化、飲食等の体験を可能とする、感動体験ECサイトの開発を担当
                  </li>
                  <li>Go, Nuxt.jsを用いたフルスタック開発に従事</li>
                  <li>
                    エンジニア社員が自分1名の初期フェーズから参画し、EM、PM、採用、開発など多岐にわたる業務を担当
                  </li>
                  <li>
                    ほぼすべての案件の進行を行ったことにより、Webサービスの運に必要な体系的な知識を一通り経験（フロントエンド開発、バックエンド開発、デザインシステム、SEO、GA4、GTMなど）
                  </li>
                  <li>
                    インバウンド向けサイト開発案件では、サイト全体の設計からリリースまでを担当し、受注率の大幅改善、GMV拡大に貢献
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-gray-800">
                  株式会社Gracia - Webエンジニア
                </p>
                <p className="text-sm text-gray-600">2021年2月 - 2022年9月</p>
                <ul className="list-disc text-xs text-gray-700 md:text-sm mt-2 pl-5">
                  <li>
                    ギフトECサイトの開発、自社向けの倉庫管理システム開発を担当
                  </li>
                  <li>PHP, jQuery, React.jsを使用したフルスタック開発に従事</li>
                  <li>スクラム開発をメンバとして体制立ち上げから経験</li>
                  <li>
                    自社倉庫に常駐することで現場業務を実際に行ったり倉庫メンバと対話を重ねながら、アジャイルで要件定義、設計、開発を行いリース。社内の運用コスト大幅削減に貢献
                  </li>
                  <li>
                    チーム内勉強会の立ち上げを行い、ームビルディング、ナレッジシェア体制の構築に貢献
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-gray-800">
                  株式会社NTTデータ - PM、ITディレクター
                </p>
                <p className="text-sm text-gray-600">2014年4月 - 2021年1月</p>
                <ul className="list-disc text-xs text-gray-700 md:text-sm mt-2 pl-5">
                  <li>
                    有料放送事業者向けの顧客管理、請求管理等を行う大規模基幹システム開発を担当
                  </li>
                  <li>
                    20名規模チームのPMとして、要件定義から保守運用まで一貫して対応
                  </li>
                  <li>
                    クライアントとの密接なコミュニケーションにより、要件の適切な把握と迅速な対応を実現
                  </li>
                  <li>
                    客先常駐にてディレクションも兼任し、プロジェクト全体の品質向上と効率化に貢献
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="bg-[#fafafa] rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
              <SmileIcon className="mr-2 h-6 w-6 text-blue-500" />
              自己PR
            </h3>
            <ul className="list-disc mb-4 text-xs md:text-sm text-gray-700 pl-5">
              <li>
                細やかな対応が得意です。細やかな仕様の詰め、タスク進行の中でこぼれ球になりそうなものを拾い続けます
              </li>
              <li>
                上流工程〜下流工程トータルで対応できる点に強みがあります。サービスグロースを主目的として開発を進めることを第一にしております
              </li>
              <li>
                自身が大切にしている価値観は、『周囲への感謝』、『歩み寄ること』、『やり遂げること』です
              </li>
            </ul>
          </section>
        </CardContent>
      </div>
    </div>
  );
}
