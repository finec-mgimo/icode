export default {
    title: 'Цифровая кафедра МГИМО',
    description: 'Экспериментальный сайт',
    base: '/icode/',    
    themeConfig: {
      socialLinks: [
        { icon: 'github', link: 'https://finec.mgimo.ru/icode/' }
      ],
      outlineTitle: 'На этой странице',
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