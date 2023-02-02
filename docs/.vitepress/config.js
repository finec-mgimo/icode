export default {
    title: 'Цифровая кафедра МГИМО',
    description: 'Экспериментальный сайт',
    base: '/icode/',
    themeConfig: {
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
          text: 'Разработка сайта',
          items: [
            { text: 'Примеры кода', link: '/icode' },
            { text: 'Инструментарий', link: '/tools' },
          ]
        }
      ]
    }
  }