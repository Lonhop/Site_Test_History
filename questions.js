const QUESTIONS = [
    {
        id: "q1",
        prompt: "Февральская революция 1917 года началась в феврале по современному календарю",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "В 1917 году Россия жила по юлианскому календарю. 23 февраля старого стиля соответствует 8 марта по современному календарю, поэтому по новому стилю революция началась в марте.",
        sources: [
            {title: "Britannica: The February Revolution", url: "https://www.britannica.com/event/Russian-Revolution/The-February-Revolution"},
            {title: "Wikipedia: February Revolution", url: "https://en.wikipedia.org/wiki/February_Revolution"}
        ]
    },
    {
        id: "q2",
        prompt: "Октябрьская революция произошла в октябре по современному календарю",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "Октябрьское восстание датируется 24–25 октября по старому стилю, что соответствует 6–7 ноября по современному календарю.",
        sources: [
            {title: "Britannica: October Revolution", url: "https://www.britannica.com/topic/October-Revolution-Russian-history"},
            {title: "Википедия: Октябрьская революция", url: "https://ru.wikipedia.org/wiki/%D0%9E%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8C%D1%81%D0%BA%D0%B0%D1%8F_%D1%80%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D1%8F"}
        ]
    },
    {
        id: "q3",
        prompt: "Февральская революция была заранее спланирована и организована одной конкретной партией",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "Начало революции было во многом стихийным и было организовано множеством различных партий и организаций, существовавших еще на момент революции 1905 года, а современники не сразу поняли, что началась именно революция.",
        sources: [
            {title: "Britannica: The February Revolution", url: "https://www.britannica.com/event/Russian-Revolution/The-February-Revolution"}
        ]
    },
    {
        id: "q4",
        prompt: "Женские выступления 23 февраля 1917 года были одним из ключевых пусковых механизмов Февральской революции",
        a: "Правда",
        b: "Ложь",
        correct: "A",
        explanation: "Выступления женщин в Международный женский день и стачка работниц-текстильщиц стали одним из важнейших толчков к массовой забастовке в столице.",
        sources: [
            {title: "Britannica: Why is March 8 International Women’s Day?", url: "https://www.britannica.com/question/Why-is-March-8-International-Womens-Day"},
            {title: "Wikipedia: International Women's Day", url: "https://en.wikipedia.org/wiki/International_Women%27s_Day"}
        ]
    },
    {
        id: "q5",
        prompt: "Февральскую революцию вызвала нехватка хлеба",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "Нехватка хлеба, вызванная завалами снега на железных дорогах, имела место только лишь на первый день революции, уже на второй день дефицит был практически ликвидирован",
        sources: [
            {title: "Britannica: The February Revolution", url: "https://www.britannica.com/event/Russian-Revolution/The-February-Revolution"},
            {title: "DOAJ: Продовольственный кризис в Петрограде накануне Февральской революции", url: "https://doaj.org/article/7658d2329ad448e3bd127e05f1dedf23"}
        ]
    },
    {
        id: "q6",
        prompt: "Петроградский гарнизон в феврале 1917 года в целом остался верен царю и помог подавить выступления",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "Один из переломных моментов Февраля состоял как раз в том, что значительная часть гарнизона отказалась стрелять в демонстрантов и присоединилась к ним.",
        sources: [
            {title: "Wikipedia: February Revolution", url: "https://en.wikipedia.org/wiki/February_Revolution"},
            {title: "ТАСС: Февральская революция. Начало", url: "https://1917.tass.ru/article/8-marta"}
        ]
    },
    {
        id: "q7",
        prompt: "После Февральской революции Временное правительство контролировало страну",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "После падения монархии возникло двоевластие: формальная власть была у Временного правительства, но наибольшим влиянием обладали Советы, особенно в столице. Советы использовали временное правительство как прикрытие, для того чтобы ответственность за их решения ложилась на временное правительство, а не на советы",
        sources: [
            {title: "Википедия: Двоевластие в России 1917 года", url: "https://ru.wikipedia.org/wiki/%D0%94%D0%B2%D0%BE%D0%B5%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D0%B8%D0%B5_%D0%B2_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8_1917_%D0%B3%D0%BE%D0%B4%D0%B0"},
            {title: "Britannica: Russian Provisional Government", url: "https://www.britannica.com/topic/Russian-Provisional-Government"}
        ]
    },
    {
        id: "q8",
        prompt: "Временное правительство сразу после Февраля начало мирные переговоры и вывело Россию из войны",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "Временное правительство не прекратило войну. Оно подтверждало союзнические обязательства и пыталось продолжать боевые действия.",
        sources: [
            {title: "Britannica: Russian Provisional Government", url: "https://www.britannica.com/topic/Russian-Provisional-Government"},
            {title: "Britannica: June Offensive (Kerensky Offensive)", url: "https://www.britannica.com/event/June-Offensive"}
        ]
    },
    {
        id: "q9",
        prompt: "Брестский мир подписали только потому, что к этому моменту Россия уже проиграла войну",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "Именно Брестский мир позволил Германии еще какое-то время продолжать войну. Германия, страдающая от острой нехватки продовольствия, смогла пополнить свои запасы за счет богатых черноземных украинских земель.",
        sources: [
            {title: "Wikipedia: Treaty of Brest-Litovsk", url: "https://en.wikipedia.org/wiki/Treaty_of_Brest-Litovsk"},
            {title: "Википедия: Брестский мир с УНР (\"хлебный мир\")", url: "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B5%D1%81%D1%82%D1%81%D0%BA%D0%B8%D0%B9_%D0%BC%D0%B8%D1%80_%D1%81_%D0%A3%D0%9D%D0%A0"}
        ]
    },
    {
        id: "q10",
        prompt: "Острый снарядный голод в русской армии одинаково продолжался с 1915 года до самого конца участия России в войне",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "Самый тяжёлый кризис боеприпасов пришёлся прежде всего на 1915 год. К 1916 военная промышленность нарастила выпуск, и снабжение улучшилось. К январю 1917 года в русской армии не было никаких проблем со снабжением снарядами, а выпущенной военной продукции в будующем хватило и на гражданскую войну.",
        sources: [
            {title: "1914-1918-online: Organization of War Economies (Russian Empire)", url: "https://encyclopedia.1914-1918-online.net/article/organization_of_war_economies_russian_empire/2014-12-18"},
            {title: "WarHistory.org: The Imperial Russian Army’s Recovery (1915–1917)", url: "https://warhistory.org/article/the-imperial-russian-armys-recovery-september-1915-february-1917"}
        ]
    },
    {
        id: "q11",
        prompt: "Брусиловский прорыв был крупнейшим российским наступлением Первой мировой войны и тяжёлым ударом по Австро-Венгрии",
        a: "Правда",
        b: "Ложь",
        correct: "A",
        explanation: "Это верно. Наступление 1916 года стало крупнейшей российской операцией войны и нанесло Австро-Венгрии такой удар, после которого она уже не оправилась полностью.",
        sources: [
            {title: "Britannica: Brusilov Offensive", url: "https://www.britannica.com/event/Brusilov-Offensive-1916"}
        ]
    },
    {
        id: "q12",
        prompt: "Летом 1914 года Россия сразу была охвачена массовыми антивоенными забастовками",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "В первые недели войны массовых антивоенных стачек не наблюдалось. Для значительной части общества был характерен скорее патриотический подъём, который начал выдыхаться позже.",
        sources: [
            {title: "1914-1918-online: Labour Movements, Trade Unions and Strikes (Russian Empire)", url: "https://encyclopedia.1914-1918-online.net/article/labour-movements-trade-unions-and-strikes-russian-empire/"},
            {title: "1914-1918-online: Willingly to War (Public Response in Russia)", url: "https://encyclopedia.1914-1918-online.net/article/willingly-to-war-public-response-to-the-outbreak-of-war/"}
        ]
    },
    {
        id: "q13",
        prompt: "Ленин получилал деньги от германского генерального штаба, а Октябрьская революция была активно профинансирована германским командованием",
        a: "Правда",
        b: "Ложь",
        correct: "A",
        explanation: "Германия действительно позволила Ленину и многим другим революционерами проехать через свою территорию, а вопрос о немецкой помощи не выдуман. Германия получила огромную выгоду от выхода из войны своего крупнейшего противника.",
        sources: [
            {title: "Википедия: Финансирование большевиков Германией", url: "https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BD%D0%B0%D0%BD%D1%81%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B5%D0%B2%D0%B8%D0%BA%D0%BE%D0%B2_%D0%93%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B8%D0%B5%D0%B9"},
            {title: "Carl Beck Papers: The Bolsheviks' \"German Gold\" Revisited", url: "https://carlbeckpapers.pitt.edu/ojs/cbp/article/view/63"}
        ]
    },
    {
        id: "q14",
        prompt: "Большевики с весны 1917 года уже были большинством в Советах",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "Весной и летом 1917 года большевики оставались меньшинством. Их влияние резко выросло только к осени, после кризисов Временного правительства.",
        sources: [
            {title: "Wikipedia: Bolshevization of the soviets", url: "https://en.wikipedia.org/wiki/Bolshevization_of_the_soviets"}
        ]
    },
    {
        id: "q15",
        prompt: "Октябрьское восстание сразу установило власть большевиков по всей стране",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "В октябре большевики взяли власть прежде всего в Петрограде. По всей бывшей империи советская власть устанавливалась не одномоментно, а постепенно и нередко через гражданскую войну.",
        sources: [
            {title: "Wikipedia: October Revolution", url: "https://en.wikipedia.org/wiki/October_Revolution"},
            {title: "Britannica: Russian Revolution (overview)", url: "https://www.britannica.com/event/Russian-Revolution"}
        ]
    },
    {
        id: "q16",
        prompt: "Большевики победили на выборах в Учредительное собрание",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "На выборах сильнее выступили эсеры. Большевики получили заметно меньше голосов и мест, хотя были особенно сильны в столицах и части армии.",
        sources: [
            {title: "Britannica: Constituent Assembly (Russia)", url: "https://www.britannica.com/topic/Constituent-Assembly-Russian-government"},
            {title: "Wikipedia: 1917 Russian Constituent Assembly election", url: "https://en.wikipedia.org/wiki/1917_Russian_Constituent_Assembly_election"}
        ]
    },
    {
        id: "q17",
        prompt: "Учредительное собрание признало советскую власть, поэтому его разгон был чистой формальностью",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "Учредительное собрание не признало верховенство советской власти и отклонило ключевые требования большевиков, после чего было разогнано.",
        sources: [
            {title: "Britannica: Constituent Assembly (Russia)", url: "https://www.britannica.com/topic/Constituent-Assembly-Russian-government"}
        ]
    },
    {
        id: "q18",
        prompt: "Приказ № 1 изначально был единым приказом для всей действующей армии на фронтах",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "Изначально это был приказ Петросовета для гарнизона Петроградского округа. Позже его логика и практика солдатских комитетов распространились шире, но таков не был его первоначальный адресат.",
        sources: [
            {title: "Wikipedia: Petrograd Soviet Order No. 1", url: "https://en.wikipedia.org/wiki/Petrograd_Soviet_Order_No._1"},
            {title: "Britannica: Order No. 1", url: "https://www.britannica.com/topic/Order-No-1"}
        ]
    },
    {
        id: "q19",
        prompt: "Распутин фактически командовал русской армией и определял стратегию войны",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "Влияние Распутина на двор и кадровые назначения было реальным, но он не был верховным командующим и не руководил фронтами как военный стратег.",
        sources: [
            {title: "Britannica: Grigori Rasputin", url: "https://www.britannica.com/biography/Grigory-Yefimovich-Rasputin"},
            {title: "Britannica: Nicholas II", url: "https://www.britannica.com/biography/Nicholas-II-tsar-of-Russia"}
        ]
    },
    {
        id: "q20",
        prompt: "Николай II отрёкся не только за себя, но и за сына, а Михаил Александрович престол не принял",
        a: "Правда",
        b: "Ложь",
        correct: "A",
        explanation: "Именно так и произошло. Поэтому попытка сохранить монархию в династической форме фактически сорвалась сразу же.",
        sources: [
            {title: "Президентская библиотека: материалы об отречении Николая II", url: "https://www.prlib.ru/news/2029799"},
            {title: "Wikipedia: Abdication of Nicholas II", url: "https://en.wikipedia.org/wiki/Abdication_of_Nicholas_II"}
        ]
    }
];

const WORLD_HISTORY_QUESTIONS = [
    {
        id: "world-q1",
        prompt: "Великая хартия вольностей была подписана в Англии в 1215 году",
        a: "Правда",
        b: "Ложь",
        correct: "A",
        explanation: "Великая хартия вольностей была согласована королём Иоанном Безземельным в 1215 году и стала важным символом ограничения королевской власти.",
        sources: [
            {title: "Britannica: Magna Carta", url: "https://www.britannica.com/topic/Magna-Carta"},
            {title: "The National Archives (UK): Magna Carta, 1215 and beyond", url: "https://www.nationalarchives.gov.uk/education/resources/magna-carta/"}
        ]
    },
    {
        id: "world-q2",
        prompt: "Падение Константинополя произошло в 1453 году",
        a: "Правда",
        b: "Ложь",
        correct: "A",
        explanation: "Османская армия взяла Константинополь в 1453 году. Это событие часто считают концом Византийской империи.",
        sources: [
            {title: "Britannica: Fall of Constantinople (1453)", url: "https://www.britannica.com/event/Fall-of-Constantinople-1453"}
        ]
    },
    {
        id: "world-q3",
        prompt: "Американская Декларация независимости была принята после окончания войны за независимость",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "Декларацию приняли 4 июля 1776 года, когда война уже шла, но до её завершения оставалось несколько лет.",
        sources: [
            {title: "Wikipedia: United States Declaration of Independence", url: "https://en.wikipedia.org/wiki/United_States_Declaration_of_Independence"}
        ]
    },
    {
        id: "world-q4",
        prompt: "Французская революция началась в XVIII веке",
        a: "Правда",
        b: "Ложь",
        correct: "A",
        explanation: "Ключевые события революции начались в 1789 году, то есть в XVIII веке.",
        sources: [
            {title: "Britannica: French Revolution", url: "https://www.britannica.com/event/French-Revolution"}
        ]
    },
    {
        id: "world-q5",
        prompt: "Наполеон был провозглашён императором Франции до битвы при Ватерлоо",
        a: "Правда",
        b: "Ложь",
        correct: "A",
        explanation: "Наполеон стал императором в 1804 году, а битва при Ватерлоо произошла в 1815 году.",
        sources: [
            {title: "Britannica: First French Empire", url: "https://www.britannica.com/place/First-French-Empire"},
            {title: "Britannica: Battle of Waterloo", url: "https://www.britannica.com/event/Battle-of-Waterloo"}
        ]
    },
    {
        id: "world-q6",
        prompt: "Первая мировая война началась после Второй мировой войны",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "Первая мировая война началась в 1914 году, а Вторая мировая война началась в 1939 году.",
        sources: [
            {title: "Wikipedia: World War I", url: "https://en.wikipedia.org/wiki/World_War_I"},
            {title: "Britannica: World War II", url: "https://www.britannica.com/event/World-War-II"}
        ]
    },
    {
        id: "world-q7",
        prompt: "Лига Наций была создана после Первой мировой войны",
        a: "Правда",
        b: "Ложь",
        correct: "A",
        explanation: "Лигу Наций создали после Первой мировой войны как попытку поддерживать международную безопасность.",
        sources: [
            {title: "UN Geneva: The League of Nations (overview)", url: "https://www.ungeneva.org/en/about/league-of-nations/overview"},
            {title: "Britannica: League of Nations", url: "https://www.britannica.com/topic/League-of-Nations"}
        ]
    },
    {
        id: "world-q8",
        prompt: "Берлинская стена была построена после её падения",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "Берлинскую стену построили в 1961 году, а её падение произошло в 1989 году.",
        sources: [
            {title: "Britannica: Berlin Wall", url: "https://www.britannica.com/topic/Berlin-Wall"},
            {title: "Wikipedia: Berlin Wall", url: "https://en.wikipedia.org/wiki/Berlin_Wall"}
        ]
    }
];

const SCIENCE_GEOGRAPHY_QUESTIONS = [
    {
        id: "science-q1",
        prompt: "Земля вращается вокруг Солнца",
        a: "Правда",
        b: "Ложь",
        correct: "A",
        explanation: "Земля обращается вокруг Солнца примерно за один год, одновременно вращаясь вокруг своей оси.",
        sources: [
            {title: "NASA: Earth (Beginners Guide to Aeronautics)", url: "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/earth/"},
            {title: "NASA Space Place: What Is a Leap Year?", url: "https://spaceplace.nasa.gov/leap-year/en/"}
        ]
    },
    {
        id: "science-q2",
        prompt: "Самая большая планета Солнечной системы — Марс",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "Самая большая планета Солнечной системы — Юпитер.",
        sources: [
            {title: "NASA: Jupiter", url: "https://science.nasa.gov/jupiter"}
        ]
    },
    {
        id: "science-q3",
        prompt: "Вода при нормальном атмосферном давлении кипит примерно при 100 °C",
        a: "Правда",
        b: "Ложь",
        correct: "A",
        explanation: "При давлении около одной атмосферы чистая вода кипит примерно при 100 °C.",
        sources: [
            {title: "NIST: SI Units – Temperature (boiling point of water)", url: "https://www.nist.gov/pml/owm/si-units-temperature"}
        ]
    },
    {
        id: "science-q4",
        prompt: "Атлантический океан больше Тихого океана",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "Тихий океан является крупнейшим океаном Земли.",
        sources: [
            {title: "NOAA Ocean Exploration: How big is the Pacific Ocean?", url: "https://oceanexplorer.noaa.gov/ocean-fact/pacific-size/"},
            {title: "NOAA Ocean Service: What is the largest ocean basin on Earth?", url: "https://oceanservice.noaa.gov/facts/biggestocean.html?no_redirect=true"}
        ]
    },
    {
        id: "science-q5",
        prompt: "Эверест — самая высокая гора Земли над уровнем моря",
        a: "Правда",
        b: "Ложь",
        correct: "A",
        explanation: "Эверест обычно называют самой высокой горой Земли, если измерять высоту над уровнем моря.",
        sources: [
            {title: "Britannica: Is Mount Everest Really the Tallest Mountain in the World?", url: "https://www.britannica.com/story/is-mount-everest-really-the-tallest-mountain-in-the-world"},
            {title: "Britannica: Mount Everest", url: "https://www.britannica.com/place/Mount-Everest"}
        ]
    },
    {
        id: "science-q6",
        prompt: "Кислород — самый распространённый газ в атмосфере Земли",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "Самый распространённый газ в атмосфере Земли — азот, а кислород занимает второе место.",
        sources: [
            {title: "UCAR: What's in the Air?", url: "https://scied.ucar.edu/learning-zone/air-quality/whats-in-the-air"}
        ]
    },
    {
        id: "science-q7",
        prompt: "Свет распространяется быстрее звука",
        a: "Правда",
        b: "Ложь",
        correct: "A",
        explanation: "Скорость света намного выше скорости звука, поэтому вспышку молнии видно раньше, чем слышен гром.",
        sources: [
            {title: "Wikipedia: Speed of light", url: "https://en.wikipedia.org/wiki/Speed_of_light"},
            {title: "Wikipedia: Speed of sound", url: "https://en.wikipedia.org/wiki/Speed_of_sound"}
        ]
    },
    {
        id: "science-q8",
        prompt: "Антарктида находится в Северном полушарии",
        a: "Правда",
        b: "Ложь",
        correct: "B",
        explanation: "Антарктида расположена вокруг Южного полюса, то есть в Южном полушарии.",
        sources: [
            {title: "Britannica: Antarctica", url: "https://www.britannica.com/place/Antarctica"}
        ]
    }
];

const QUESTION_CATEGORIES = [
    {
        id: "revolution",
        title: "Революция и Первая мировая",
        description: "Россия 1914–1918 годов, революции, война и власть.",
        questions: QUESTIONS
    },
    {
        id: "world-history",
        title: "Всемирная история",
        description: "События и даты от Средневековья до XX века.",
        questions: WORLD_HISTORY_QUESTIONS
    },
    {
        id: "science-geography",
        title: "Наука и география",
        description: "Планеты, океаны, атмосфера и базовые научные факты.",
        questions: SCIENCE_GEOGRAPHY_QUESTIONS
    }
];

const ALL_QUESTIONS = QUESTION_CATEGORIES.flatMap((category) =>
    category.questions.map((question) => ({
        ...question,
        categoryId: category.id,
        categoryTitle: category.title
    }))
);

window.QUESTION_CATEGORIES = QUESTION_CATEGORIES;
window.QUESTIONS = ALL_QUESTIONS;
