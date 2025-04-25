"use client"

import { useTranslations } from 'next-intl'
// import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

// type Props = {
//     params: { locale: string };
// };

interface PrivacySection {
    title: string;
    content: string | string[];
    services?: string[];
    disclaimer?: string;
}

export default function PrivacyPage(
    // { params }: Props
) {
    // const { locale } = params;

    // setRequestLocale(locale);

    const t = useTranslations('PrivacyPage')

    const companyInfo = {
        companyName: "Orivion",
        website: "https://orivionhq.com/",
        email: "team@orivion.com",
        address: "1209 Mountain Road Pl NE, Ste R, Albuquerque, NM 87110, Estados Unidos"
    };

    const sections = t.raw('sections') as Record<string, PrivacySection>;

    return (
        <main className="bg-gray-50 py-20 px-4 sm:px-16">
            <section className="container mx-auto">
                <h1 className="text-5xl font-semibold font-space-grotesk text-gray-800 mb-8">
                    {t('title')}
                </h1>

                <article className="space-y-10 text-space-gray dark:text-space-gray/90">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            {t.rich('introduction.companyInfo', {
                                Link: (chunks) => (
                                    <Link href={companyInfo.website} className="text-blue-600 hover:text-purple-600">
                                        {chunks}
                                    </Link>
                                )
                            })}
                        </h3>
                        <p className="text-lg mt-3">
                            {t('introduction.purpose', { companyName: companyInfo.companyName })}
                        </p>
                        <p className="text-lg mt-3">
                            {t('introduction.agreement')}
                        </p>
                        <p className="text-lg mt-3">
                            {t.rich('introduction.termsLink', {
                                Link: (chunks) => (
                                    <Link href={companyInfo.website} className="text-blue-600 hover:text-purple-600">
                                        {chunks}
                                    </Link>
                                )
                            })}
                        </p>
                    </div>

                    {Object.entries(sections).map(([sectionKey, sectionData]) => {
                        const content = sectionData.content;
                        const isArray = Array.isArray(content);

                        return (
                            <div key={sectionKey}>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    {sectionData.title}
                                </h3>

                                {isArray ? (
                                    (content as string[]).map((text: string, index: number) => (
                                        <p key={index} className="text-lg mt-3">
                                            {text}
                                        </p>
                                    ))
                                ) : (
                                    <p className="text-lg mt-3">
                                        {content as string}
                                    </p>
                                )}

                                {sectionKey === 'serviceProviders' && (
                                    <>
                                        <ul className="list-disc pl-6 mt-4 space-y-2">
                                            {(sectionData.services ?? []).map((service: string, index: number) => (
                                                <li key={index} className="text-lg">
                                                    {service}
                                                </li>
                                            ))}
                                        </ul>
                                        {sectionData.disclaimer && (
                                            <p className="text-lg mt-4">
                                                {sectionData.disclaimer}
                                            </p>
                                        )}
                                    </>
                                )}
                            </div>
                        );
                    })}

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            {t('sections.contact.title')}
                        </h2>
                        <p className="text-lg mt-3">
                            {t('sections.contact.content')}
                        </p>
                        <p className="text-lg mt-3">{t('sections.contact.email')}
                            <Link href="mailto:${companyInfo.email}" className="text-blue-600 hover:text-purple-600">{' ' + companyInfo.email}</Link>
                        </p>
                        <p className="text-lg mt-3">
                            {t('sections.contact.address')} {companyInfo.address}
                        </p>
                    </div>
                </article>
            </section>
        </main>
    )
}