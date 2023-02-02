// https://storage.yandexcloud.net/docs-external/yagr/_images/docslogo.svg

export default {
    title: 'Цифровая кафедра МГИМО',
    description: 'Экспериментальный сайт',
    base: '/icode/',
    themeConfig: {
      logo: '/symbol_placeholder.svg',
      socialLinks: [
        { icon: 'github', link: 'https://github.com/finec-mgimo/icode/' }
      ],
      outlineTitle: 'На этой странице',
      docFooter: {
        prev: 'Предыдущая страница',
        next: 'Следующая страница'
      },
      sidebar: [
        {
          text: 'Кодим',
          items: [
            { text: 'Python', link: '/python' },
            { text: 'SQL', link: '/sql' },
            { text: 'Этот сайт', link: '/tools' },
          ]
        }
      ]
    }
  }