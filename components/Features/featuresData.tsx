import { Feature, Content, Language } from "@/types/content";

const LanguageData: Language[] = [
  { language: "English", rank: 1 },
  { language: "中文 (Chinese)", rank: 2 },
  { language: "Español (Spanish)", rank: 3 },
  { language: "Français (French)", rank: 4 },
  { language: "Deutsch (German)", rank: 5 },
  { language: "русский (Russian)", rank: 6 },
  { language: "العربية (Arabic)", rank: 7 },
  { language: "Português (Portuguese)", rank: 8 },
  { language: "Italiano (Italian)", rank: 9 },
  { language: "日本語 (Japanese)", rank: 10 },
  { language: "한국어 (Korean)", rank: 11 },
  { language: "Türkçe (Turkish)", rank: 12 },
  { language: "Nederlands (Dutch)", rank: 13 },
  { language: "Polski (Polish)", rank: 14 },
  { language: "Svenska (Swedish)", rank: 15 },
  { language: "Bahasa Indonesia (Indonesian)", rank: 16 },
  { language: "Suomi (Finnish)", rank: 17 },
  { language: "Norsk (Norwegian)", rank: 18 },
  { language: "Dansk (Danish)", rank: 19 },
  { language: "Čeština (Czech)", rank: 20 },
  { language: "Ελληνικά (Greek)", rank: 21 },
  { language: "Magyar (Hungarian)", rank: 22 },
  { language: "ภาษาไทย (Thai)", rank: 23 },
  { language: "Română (Romanian)", rank: 24 },
  { language: "Українська (Ukrainian)", rank: 25 },
];

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/icon-no-signal.svg",
    // Requires No Internet
    title: "Offline",
    description:
      "Minerva device creates it's own internet</br> removing the need for an internet connection",
  },
  {
    // - Requires No Power
    id: 2,
    icon: "/images/icon/icon-power-off.svg",
    title: "Off-Grid",
    description:
      "Minera can be powered by a solar panel roughly the size of a computer screen and includes a battery for 24/7 operation",
  },
  {
    id: 3,
    icon: "/images/icon/icon-03.svg",
    title: "Content",
    description:
      "Minerva comes preloaded with websites containing millions of resources - from video lectures to interactive courses",
  },
  {
    id: 4,
    icon: "/images/icon/icon-money-off.svg",
    title: "Low Cost",
    description:
      "Minerva product line contains low cost options ranging from network only to full fledged off-grid computer labs",
  },
  {
    id: 5,
    icon: "/images/icon/icon-05.svg",
    title: "Customizable",
    description:
      "Minerva can be customized with any content - custom curated for industry, school, military or community",
  },
  {
    id: 6,
    icon: "/images/icon/icon-06.svg",
    title: "Updates and Data Collection",
    description:
      "Through <i>Minerva Cloud</i>, you can remotely collect usage data, send surveys, and even update content on all devices",
  },
];

export { LanguageData, featuresData }
