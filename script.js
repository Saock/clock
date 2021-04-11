var app = new Vue({
    el: '#clock',

    data: {
        date: new Date(),
// событий много, но что поделать
        events: {
            e1: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e2: {
              beginingYear: 862,
              endingYear: 882,
              ev: "Правление в Киеве князей Аскольда и Дира"
            },

            e3: {
              beginingYear: 882,
              endingYear: 912,
              ev: "Княжение Олега в Киеве"
            },

            e4: {
              beginingYear: 907,
              endingYear: "",
              ev: "Поход Олега на Константинополь. Первый договор Руси с Византией о дружественных отношениях, нормах международной торговли и мореплавания"
            },

            e5: {
              beginingYear: 911,
              endingYear: "",
              ev: "Второй договор Руси с Византией"
            },

            e6: {
              beginingYear: 912,
              endingYear: 945,
              ev: "Княжение Игоря в Киеве"
            },

            e7: {
              beginingYear: 941,
              endingYear: "",
              ev: "Первый поход князя Игоря на Константинополь, закончившийся провалом"
            },

            e8: {
              beginingYear: 944,
              endingYear: "",
              ev: "Второй поход князя Игоря на Константинополь. Договор Руси с Византией. (Русь теряла право беспошлинной торговли и обязывалась оказывать помощь в охране пограничных с нею владений Византии)."
            },

            e9: {
              beginingYear: 945,
              endingYear: 969,
              ev: "Ольги в Киеве (после убийства древлянами ее мужа князя Игоря)."
            },

            e10: {
              beginingYear: 945,
              endingYear: 972,
              ev: "Княжение Святослава Игоревича в Киеве"
            },

            e11: {
              around: "Около",
              beginingYear: 957,
              endingYear: "",
              ev: "Посольство княгини Ольги в Константинополь. Принятие ею христианства (под именем Елена)"
            },

            e12: {
              beginingYear: 965,
              endingYear: "",
              ev: "Разгром князем Святославом Хазарского каганата (на нижней Волге). Установление контроля над торговым путем Волга – Каспийское море."
            },

            e13: {
              beginingYear: 968,
              endingYear: 971,
              ev: "Походы князя Святослава в Дунайскую Болгарию. Войны с Византией и печенегами"
            },

            e14: {
              beginingYear: 968,
              endingYear: "",
              ev: "Разгром печенегов под Киевом"
            },

            e15: {
              beginingYear: 971,
              endingYear: "",
              ev: "Договор Руси с Византией"
            },

            e16: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e17: {
              beginingYear: 972,
              endingYear: 980,
              ev: "Междоусобицы в Киеве после убийства печенегами князя Святослава"
            },

            e18: {
              beginingYear: 980,
              endingYear: "",
              ev: "Создание единого пантеона языческих богов в Киеве"
            },

            e19: {
              beginingYear: 985,
              endingYear: "",
              ev: "Поход князя Владимира на волжских булгар"
            },

            e20: {
              beginingYear: 988,
              endingYear: 989,
              ev: "Крещение Руси"
            },

            e21: {
              beginingYear: 989,
              endingYear: 996,
              ev: "Сооружение в Киеве церкви Успения Богородицы (Десятинной церкви)"
            },

            e22: {
              beginingYear: 1015,
              endingYear: 1019,
              ev: "Междоусобные войны сыновей Владимира I за великокняжеский престол."
            },

            e23: {
              beginingYear: 1019,
              endingYear: 1054,
              ev: "Княжение Ярослава Владимировича Мудрого в Киеве. Составление свода законов «Правда Ярослава» — наиболее древней части «Русской правды»"
            },

            e24: {
              beginingYear: 1024,
              endingYear: "",
              ev: "Восстание в Ростово-Суздальской земле; подавлено князем Ярославом"
            },

            e25: {
              beginingYear: 1024,
              endingYear: "",
              ev: "Раздел Руси между Ярославом Мудрым и его братом Мстиславом по Днепру: Правобережье (с Киевом) отходило к Ярославу; Левобережье (с Черниговом) – к Мстиславу"
            },

            e26: {
              beginingYear: 1030,
              endingYear: 1035,
              ev: "Строительство Спасо-Преображенского собора в Чернигове"
            },

            e27: {
              beginingYear: 1036,
              endingYear: "",
              ev: "Победа князя Ярослава Мудрого над печенегами, обеспечившая Руси мир на четверть века (до прихода в Степь половцев)"
            },

            e28: {
              beginingYear: 1037,
              endingYear: 1041,
              ev: "Строительство Софийского Собора в Киеве",
            },

            e29: {
              beginingYear: 1043,
              endingYear: "",
              ev: "Последний поход Руси (во главе с сыном Ярослава Мудрого князем Владимиром Ярославичем Новгородским) на Константинополь; завершился неудачей"
            },

            e30: {
              beginingYear: 1045,
              endingYear: 1050,
              ev: "Строительство Софийского Собора в Новгороде"
            },

            e31: {
              beginingYear: 1051,
              endingYear: "",
              ev: "Поставление князем Ярославом Мудрым автора «Слова о Законе и Благодати» Иллариона (первого из русских) на митрополичью кафедру в Киеве. Основание отшельником Антонием Печорской обители в Киеве"
            },

            e32: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e33: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e34: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e35: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e36: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e37: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e38: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e39: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e40: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e41: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e42: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e43: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e44: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e45: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e46: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e47: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e48: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e49: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e50: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e51: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e52: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e53: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e54: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e55: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e56: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e57: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e58: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e59: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e60: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e61: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e62: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e63: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e64: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e65: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e66: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e67: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e68: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e69: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e70: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e71: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
            },

            e72: {
              beginingYear: 862,
              endingYear: 879,
              ev: "Княжение Рюрика в Новгороде"
      },

}
    },

    methods: {
      timeToDate() {
          // return (new Date(this.date)).getHours().toString() + (new Date(this.date)).getMinutes().toString()
          return 907
      }

    },

    computed: {
      // часы
        localeDate() {
            return (new Date(this.date)).toLocaleTimeString()
        },


// проверка на дату + вывод события, работает, но мне не нравится перспектива лишних 200+ строк, да и условие-выражение надо бы куда-то поместить
        timeToDate() {
            // return (new Date(this.date)).getHours().toString() + (new Date(this.date)).getMinutes().toString()
            return 907
        }
    },

        created: function() {
          this.intervalId = setInterval(() => this.date = Date.now(), 1000);
        },

});
