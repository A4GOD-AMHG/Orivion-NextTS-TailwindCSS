import { useTranslations } from 'next-intl';

export default function AboutPage() {
    const t = useTranslations('About');

    return (
        <>
            <h1 className="text-4xl font-heading font-bold mb-8">{t('title')}</h1>
            <p className="text-lightGray max-w-2xl">{t('description')}</p>
        </>
    );
}