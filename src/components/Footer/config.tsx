import { Language } from '../LangSelector/types';
import { FooterLinkType } from './types';
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from '../Svg';

export const footerLinks: FooterLinkType[] = [
  {
    label: 'About',
    items: [
      {
        label: 'Contact',
        href: 'https://metapouch.app/contact-us'
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@metapouch'
      },
      {
        label: 'Community',
        href: 'https://discord.gg/xAqUeqxYqH'
      },
      {
        label: 'POUCH'
        // href: 'https://docs.metapouch.app/tokenomics/pouch'
      },
      {
        label: '—'
      }
    ]
  },
  {
    label: 'Help',
    items: [
      {
        label: 'Customer',
        href: 'Support https://docs.metapouch.app/contact-us/customer-support'
      },
      {
        label: 'Troubleshooting',
        href: 'https://docs.metapouch.app/help/troubleshooting'
      },
      {
        label: 'Guides',
        href: 'https://docs.metapouch.app/get-started'
      }
    ]
  },
  {
    label: 'Developers',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/metapouch'
      },
      {
        label: 'Documentation',
        href: 'https://docs.metapouch.app'
      },
      {
        label: 'Bug Bounty'
        // href: 'https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty'
      },
      {
        label: 'Audits'
        // href: 'https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited'
      },
      {
        label: 'Careers',
        href: 'https://www.linkedin.com/company/metapouch/'
      }
    ]
  }
];

export const socials = [
  {
    label: 'Twitter',
    icon: TwitterIcon,
    href: 'https://twitter.com/metapouch'
  },
  // {
  //   label: "Telegram",
  //   icon: TelegramIcon,
  //   items: [
  //     {
  //       label: "English",
  //       href: "https://t.me/pancakeswap",
  //     },
  //     {
  //       label: "Bahasa Indonesia",
  //       href: "https://t.me/PancakeSwapIndonesia",
  //     },
  //     {
  //       label: "中文",
  //       href: "https://t.me/PancakeSwap_CN",
  //     },
  //     {
  //       label: "Tiếng Việt",
  //       href: "https://t.me/PancakeSwapVN",
  //     },
  //     {
  //       label: "Italiano",
  //       href: "https://t.me/pancakeswap_ita",
  //     },
  //     {
  //       label: "русский",
  //       href: "https://t.me/pancakeswap_ru",
  //     },
  //     {
  //       label: "Türkiye",
  //       href: "https://t.me/pancakeswapturkiye",
  //     },
  //     {
  //       label: "Português",
  //       href: "https://t.me/PancakeSwapPortuguese",
  //     },
  //     {
  //       label: "Español",
  //       href: "https://t.me/PancakeswapEs",
  //     },
  //     {
  //       label: "日本語",
  //       href: "https://t.me/pancakeswapjp",
  //     },
  //     {
  //       label: "Français",
  //       href: "https://t.me/pancakeswapfr",
  //     },
  //     {
  //       label: "Deutsch",
  //       href: "https://t.me/PancakeSwap_DE",
  //     },
  //     {
  //       label: "Filipino",
  //       href: "https://t.me/Pancakeswap_Ph",
  //     },
  //     {
  //       label: "ქართული ენა",
  //       href: "https://t.me/PancakeSwapGeorgia",
  //     },
  //     {
  //       label: "Announcements",
  //       href: "https://t.me/PancakeSwapAnn",
  //     },
  //   ],
  // },
  // {
  //   label: "Reddit",
  //   icon: RedditIcon,
  //   href: "https://reddit.com/r/pancakeswap",
  // },
  // {
  //   label: "Instagram",
  //   icon: InstagramIcon,
  //   href: "https://instagram.com/pancakeswap_official",
  // },
  {
    label: 'Github',
    icon: GithubIcon,
    href: 'https://github.com/metapouch/'
  }
  // {
  //   label: "Discord",
  //   icon: DiscordIcon,
  //   href: "https://discord.gg/pancakeswap",
  // },
  // {
  //   label: "Medium",
  //   icon: MediumIcon,
  //   href: "https://metapouch.medium.com/",
  // },
];

export const langs: Language[] = [...Array(1)].map((_, i) => ({
  code: `en${i}`,
  language: `English`,
  locale: `Locale`
}));
