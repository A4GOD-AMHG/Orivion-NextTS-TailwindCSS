import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ['en', 'es'] as const;

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
    "/": "/",
    "/about-us": "/about-us",
    "/contact-us": "/contact-us",
    "/privacy-policy": "/privacy-policy",
    "/services": "/services"
}

export const localePrefix: LocalePrefix<Locales> = "always";