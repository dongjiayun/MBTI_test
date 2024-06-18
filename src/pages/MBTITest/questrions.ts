interface question {
    id: number,
    title: string
    optionA: string
    optionB: string
    optionACharacter: string,
    optionBCharacter: string
}

interface questionSection {
    title: string
    questions: question[]
}


const sectionA:questionSection = {
    title: '哪一个答案最能贴切的描绘你一般的感受或行为？',
    questions: [
        {
            id:1,
            title: '当你要外出一整天，你会?',
            optionA: '计划你要做什么和在什么时候做',
            optionB: '说去就去',
            optionACharacter: 'J',
            optionBCharacter: 'P'
        },
        {
            id:2,
            title: '你认为自己是一个?',
            optionA: '较为有条理的人',
            optionB: '较为随兴所至的人',
            optionACharacter: 'J',
            optionBCharacter: 'P'
        },
        {
            id:3,
            title: '假如你是一位老师，你会选?',
            optionA: '以事实为主的课程',
            optionB: '涉及理论的课程',
            optionACharacter: 'S',
            optionBCharacter: 'N'
        },
        {
            id:4,
            title: '你通常?',
            optionA: '与人容易混熟',
            optionB: '比较沉静或矜持',
            optionACharacter: 'E',
            optionBCharacter: 'I'
        },
        {
            id:5,
            title: '一般来说，你和哪些人比较合得来?',
            optionA: '现实的人',
            optionB: '富于想象力的人',
            optionACharacter: 'S',
            optionBCharacter: 'N'
        },
        {
            id:6,
            title: '你是否经常让?',
            optionA: '你的情感支配你的理智',
            optionB: '你的理智主宰你的情感',
            optionACharacter: 'F',
            optionBCharacter: 'T'
        },
        {
            id:7,
            title: '处理许多事情上，你会喜欢?',
            optionA: '以事实为主的课程',
            optionB: '涉及理论的课程',
            optionACharacter: 'P',
            optionBCharacter: 'J'
        },
        {
            id:8,
            title: '你是否?',
            optionA: '容易让人了解',
            optionB: '难于让人了解',
            optionACharacter: 'E',
            optionBCharacter: 'I'
        },
        {
            id:9,
            title: '按照程序表做事?',
            optionA: '合你心意',
            optionB: '令你感到束缚',
            optionACharacter: 'J',
            optionBCharacter: 'P'
        },
        {
            id:10,
            title: '当你有一份特别的任务，你会喜欢?',
            optionA: '开始前小心组织计划',
            optionB: '边做边找须做什么',
            optionACharacter: 'J',
            optionBCharacter: 'P'
        },
        {
            id:11,
            title: '在大多数情况下，你会选择?',
            optionA: '顺其自然',
            optionB: '按程序表做事',
            optionACharacter: 'J',
            optionBCharacter: 'P'
        },
        {
            id:12,
            title: '大多数人会说你是一个?',
            optionA: '重视自我隐私的人',
            optionB: '非常坦率开放的人',
            optionACharacter: 'E',
            optionBCharacter: 'I'
        },
        {
            id:13,
            title: '你宁愿被人认为是一个?',
            optionA: '实事求是的人',
            optionB: '机灵',
            optionACharacter: 'S',
            optionBCharacter: 'N'
        },
        {
            id:14,
            title: '在一大群人当中，通常是?',
            optionA: '你介绍大家认识',
            optionB: '别人介绍你',
            optionACharacter: 'E',
            optionBCharacter: 'I'
        },
        {
            id:15,
            title: '你会跟哪些人做朋友?',
            optionA: '常提出新注意的',
            optionB: '脚踏实地的',
            optionACharacter: 'N',
            optionBCharacter: 'S'
        },
        {
            id:16,
            title: '你倾向?',
            optionA: '重视感情多于逻辑',
            optionB: '重视逻辑多于感情',
            optionACharacter: 'F',
            optionBCharacter: 'T'
        },
        {
            id:17,
            title: '你比较喜欢?',
            optionA: '坐观事情发展才作计划',
            optionB: '很早就作计划',
            optionACharacter: 'P',
            optionBCharacter: 'J'
        },
        {
            id:18,
            title: '你喜欢花很多的时间?',
            optionA: '一个人独处',
            optionB: '合别人在一起',
            optionACharacter: 'I',
            optionBCharacter: 'E'
        },
        {
            id:19,
            title: '与很多人一起会?',
            optionA: '令你活力培增',
            optionB: '常常令你心力憔悴',
            optionACharacter: 'E',
            optionBCharacter: 'I'
        },
        {
            id:20,
            title: '你比较喜欢?',
            optionA: '很早便把约会、社交聚集等事情安排妥当',
            optionB: '无拘无束，看当时有什么好玩就做什么',
            optionACharacter: 'J',
            optionBCharacter: 'P'
        },
        {
            id:21,
            title: '计划一个旅程时，你较喜欢?',
            optionA: '大部分的时间都是跟当天的感觉行事',
            optionB: '事先知道大部分的日子会做什么',
            optionACharacter: 'P',
            optionBCharacter: 'J'
        },
        {
            id:22,
            title: '在社交聚会中，你?',
            optionA: '有时感到郁闷',
            optionB: '常常乐在其中',
            optionACharacter: 'I',
            optionBCharacter: 'E'
        },
        {
            id:23,
            title: '你通常?',
            optionA: '和别人容易混熟',
            optionB: '趋向自处一隅',
            optionACharacter: 'E',
            optionBCharacter: 'I'
        },
        {
            id:24,
            title: '哪些人会更吸引你?',
            optionA: '一个思想敏捷及非常聪颖的人',
            optionB: '实事求是，具丰富常识的人',
            optionACharacter: 'N',
            optionBCharacter: 'S'
        },
        {
            id:25,
            title: '在日常工作中，你会?',
            optionA: '颇为喜欢处理迫使你分秒必争的突发',
            optionB: '通常预先计划，以免要在压力下工作',
            optionACharacter: 'P',
            optionBCharacter: 'J'
        },
        {
            id:26,
            title: '你认为别人一般?',
            optionA: '要花很长时间才认识',
            optionB: '用很短的时间便认识你',
            optionACharacter: 'I',
            optionBCharacter: 'E'
        },
    ]
}

const sectionB: questionSection = {
    title: '在下列每一对词语中，哪一个词语更合你心意？请仔细想想这些词语的意义，而不要理会他们的字形或读音。',
    questions: [
        {
            id: 27,
            title: '',
            optionA: '注重隐私',
            optionB: '坦率开放',
            optionACharacter: 'I',
            optionBCharacter: 'E'
        },
        {
            id: 28,
            title: '',
            optionA: '预先安排的',
            optionB: '无计划的',
            optionACharacter: 'J',
            optionBCharacter: 'P'
        },
        {
            id: 29,
            title: '',
            optionA: '抽象',
            optionB: '具体',
            optionACharacter: 'N',
            optionBCharacter: 'S'
        },
        {
            id: 30,
            title: '',
            optionA: '温柔',
            optionB: '坚定',
            optionACharacter: 'F',
            optionBCharacter: 'T'
        },
        {
            id: 31,
            title: '',
            optionA: '思考',
            optionB: '感受',
            optionACharacter: 'T',
            optionBCharacter: 'F'
        },
        {
            id: 32,
            title: '',
            optionA: '事实',
            optionB: '意念',
            optionACharacter: 'S',
            optionBCharacter: 'N'
        },
        {
            id: 33,
            title: '',
            optionA: '冲动',
            optionB: '决定',
            optionACharacter: 'P',
            optionBCharacter: 'J'
        },
        {
            id: 34,
            title: '',
            optionA: '热衷',
            optionB: '文静',
            optionACharacter: 'E',
            optionBCharacter: 'I'
        },
        {
            id: 35,
            title: '',
            optionA: '文静',
            optionB: '外向',
            optionACharacter: 'I',
            optionBCharacter: 'E'
        },
        {
            id: 36,
            title: '',
            optionA: '有系统',
            optionB: '随意',
            optionACharacter: 'J',
            optionBCharacter: 'P'
        },
        {
            id: 37,
            title: '',
            optionA: '理论',
            optionB: '肯定',
            optionACharacter: 'N',
            optionBCharacter: 'S'
        },
        {
            id: 38,
            title: '',
            optionA: '敏感',
            optionB: '公正',
            optionACharacter: 'F',
            optionBCharacter: 'T'
        },
        {
            id: 39,
            title: '',
            optionA: '令人信服',
            optionB: '感人的',
            optionACharacter: 'T',
            optionBCharacter: 'F'
        },
        {
            id: 40,
            title: '',
            optionA: '声明',
            optionB: '概念',
            optionACharacter: 'S',
            optionBCharacter: 'N'
        },
        {
            id: 41,
            title: '',
            optionA: '不受约束',
            optionB: '预先安排',
            optionACharacter: 'P',
            optionBCharacter: 'J'
        },
        {
            id: 42,
            title: '',
            optionA: '矜持',
            optionB: '健谈',
            optionACharacter: 'I',
            optionBCharacter: 'E'
        },
        {
            id: 43,
            title: '',
            optionA: '有条不紊',
            optionB: '不拘小节',
            optionACharacter: 'J',
            optionBCharacter: 'P'
        },
        {
            id: 44,
            title: '',
            optionA: '意念',
            optionB: '实况',
            optionACharacter: 'N',
            optionBCharacter: 'S'
        },
        {
            id: 45,
            title: '',
            optionA: '同情怜悯',
            optionB: '远见',
            optionACharacter: 'F',
            optionBCharacter: 'T'
        },
        {
            id: 46,
            title: '',
            optionA: '利益',
            optionB: '祝福',
            optionACharacter: 'T',
            optionBCharacter: 'F'
        },
        {
            id: 47,
            title: '',
            optionA: '务实的',
            optionB: '理论的',
            optionACharacter: 'S',
            optionBCharacter: 'N'
        },
        {
            id: 48,
            title: '',
            optionA: '朋友不多',
            optionB: '朋友众多',
            optionACharacter: 'I',
            optionBCharacter: 'E'
        },
        {
            id: 49,
            title: '',
            optionA: '有系统',
            optionB: '即兴',
            optionACharacter: 'J',
            optionBCharacter: 'P'
        },
        {
            id: 50,
            title: '',
            optionA: '富想象的',
            optionB: '以事论事',
            optionACharacter: 'N',
            optionBCharacter: 'S'
        },
        {
            id: 51,
            title: '',
            optionA: '亲切的',
            optionB: '客观的',
            optionACharacter: 'F',
            optionBCharacter: 'T'
        },
        {
            id: 52,
            title: '',
            optionA: '客观的',
            optionB: '热情的',
            optionACharacter: 'T',
            optionBCharacter: 'F'
        },
        {
            id: 53,
            title: '',
            optionA: '建造',
            optionB: '发明',
            optionACharacter: 'S',
            optionBCharacter: 'N'
        },
        {
            id: 54,
            title: '',
            optionA: '文静',
            optionB: '爱合群',
            optionACharacter: 'I',
            optionBCharacter: 'E'
        },
        {
            id: 55,
            title: '',
            optionA: '理论',
            optionB: '事实',
            optionACharacter: 'N',
            optionBCharacter: 'S'
        },
        {
            id: 56,
            title: '',
            optionA: '富同情',
            optionB: '合逻辑',
            optionACharacter: 'F',
            optionBCharacter: 'T'
        },
        {
            id: 57,
            title: '',
            optionA: '具分析力',
            optionB: '多愁善感',
            optionACharacter: 'T',
            optionBCharacter: 'F'
        },
        {
            id: 58,
            title: '',
            optionA: '合情合理',
            optionB: '令人着迷',
            optionACharacter: 'S',
            optionBCharacter: 'N'
        },
    ]
}

const sectionC: questionSection = {
    title: '哪一个答案最能贴切地描绘你一般的感受或行为',
    questions: [
        {
            id: 59,
            title: '当你要在一个星期内完成一个大项目，你在开始的时候会',
            optionA: '把要做的不同工作依次列出',
            optionB: '马上动工',
            optionACharacter: 'J',
            optionBCharacter: 'P'
        },
        {
            id: 60,
            title: '在社交场合中，你经常会感到',
            optionA: '与某些人很难打开话匣儿和保持对话',
            optionB: '与多数人都能从容地长谈',
            optionACharacter: 'I',
            optionBCharacter: 'E'
        },
        {
            id: 61,
            title: '要做许多人也做的事，你比较喜欢',
            optionA: '按照一般认可的方法去做',
            optionB: '构想一个自己的想法',
            optionACharacter: 'S',
            optionBCharacter: 'N'
        },
        {
            id: 62,
            title: '你刚认识的朋友能否说出你的兴趣？',
            optionA: '马上可以',
            optionB: '要待他们真正了解你之后才可以',
            optionACharacter: 'E',
            optionBCharacter: 'I'
        },
        {
            id: 63,
            title: '你通常较喜欢的科目是',
            optionA: '讲授概念和原则的',
            optionB: '讲授事实和数据的',
            optionACharacter: 'N',
            optionBCharacter: 'S'
        },
        {
            id: 64,
            title: '哪个是较高的赞誉，或称许为？',
            optionA: '一贯感性的人',
            optionB: '一贯理性的人',
            optionACharacter: 'F',
            optionBCharacter: 'T'
        },
        {
            id: 65,
            title: '你认为按照程序表做事',
            optionA: '有时是需要的，但一般来说你不大喜欢这样做',
            optionB: '大多数情况下是有帮助而且是你喜欢做的',
            optionACharacter: 'P',
            optionBCharacter: 'J'
        },
        {
            id: 66,
            title: '和一群人在一起，你通常会选',
            optionA: '跟你很熟悉的个别人谈话',
            optionB: '参与大伙的谈话',
            optionACharacter: 'I',
            optionBCharacter: 'E'
        },
        {
            id: 67,
            title: '在社交聚会上，你会',
            optionA: '是说话很多的一个',
            optionB: '让别人多说话',
            optionACharacter: 'E',
            optionBCharacter: 'I'
        },
        {
            id: 68,
            title: '把周末期间要完成的事列成清单，这个主意会',
            optionA: '合你意',
            optionB: '使你提不起劲',
            optionACharacter: 'J',
            optionBCharacter: 'P'
        },
        {
            id: 69,
            title: '哪个是较高的赞誉，或称许为',
            optionA: '能干的',
            optionB: '富有同情心',
            optionACharacter: 'T',
            optionBCharacter: 'F'
        },
        {
            id: 70,
            title: '你通常喜欢',
            optionA: '把要做的不同工作依次列出',
            optionB: '马上动工',
            optionACharacter: 'J',
            optionBCharacter: 'P'
        },
        {
            id: 71,
            title: '总的说来，要做一个大型作业时，你会选',
            optionA: '边做边想该做什么',
            optionB: '首先把工作按步细分',
            optionACharacter: 'P',
            optionBCharacter: 'J'
        },
        {
            id: 72,
            title: '你能否滔滔不绝地与人聊天',
            optionA: '只限于跟你有共同兴趣的人',
            optionB: '几乎跟任何人都可以',
            optionACharacter: 'I',
            optionBCharacter: 'E'
        },
        {
            id: 73,
            title: '你会',
            optionA: '跟随一些证明有效的方法',
            optionB: '分析还有什么毛病，及针对尚未解决的难题',
            optionACharacter: 'S',
            optionBCharacter: 'N'
        },
        {
            id: 74,
            title: '为乐趣而阅读时，你会',
            optionA: '喜欢奇特或创新的表达方式',
            optionB: '喜欢作者直话直说',
            optionACharacter: 'N',
            optionBCharacter: 'S'
        },
        {
            id: 75,
            title: '你宁愿替哪一类上司（或者老师）工作？',
            optionA: '天性淳良，但常常前后不一的',
            optionB: '言词尖锐但永远合乎逻辑的',
            optionACharacter: 'F',
            optionBCharacter: 'T'
        },
        {
            id: 76,
            title: '你做事多数是',
            optionA: '按当天心情去做',
            optionB: '照拟好的程序表去做',
            optionACharacter: 'P',
            optionBCharacter: 'J'
        },
        {
            id: 77,
            title: '你是否',
            optionA: '可以和任何人按需求从容地交谈',
            optionB: '只是对某些人或在某种情况下才可以畅所欲言',
            optionACharacter: 'E',
            optionBCharacter: 'I'
        },
        {
            id: 78,
            title: '要作决定时，你认为比较重要的是',
            optionA: '据事实衡量',
            optionB: '照拟好的程序表去做',
            optionACharacter: 'T',
            optionBCharacter: 'F'
        },
    ]
}

const sectionD: questionSection = {
    title: '在下列每一对词语中，哪一个词语更合你心意？',
    questions: [
        {
            id: 79,
            title: '',
            optionA: '想象的',
            optionB: '真实的',
            optionACharacter: 'N',
            optionBCharacter: 'S'
        },
        {
            id: 80,
            title: '',
            optionA: '仁慈慷慨的',
            optionB: '意志坚定的',
            optionACharacter: 'F',
            optionBCharacter: 'T'
        },
        {
            id: 81,
            title: '',
            optionA: '公正的',
            optionB: '有关怀心',
            optionACharacter: 'T',
            optionBCharacter: 'F'
        },
        {
            id: 82,
            title: '',
            optionA: '制作',
            optionB: '设计',
            optionACharacter: 'S',
            optionBCharacter: 'N'
        },
        {
            id: 83,
            title: '',
            optionA: '可能性',
            optionB: '必然性',
            optionACharacter: 'N',
            optionBCharacter: 'S'
        },
        {
            id: 84,
            title: '',
            optionA: '温柔',
            optionB: '力量',
            optionACharacter: 'F',
            optionBCharacter: 'T'
        },
        {
            id: 85,
            title: '',
            optionA: '实际',
            optionB: '多愁善感',
            optionACharacter: 'T',
            optionBCharacter: 'F'
        },
        {
            id: 86,
            title: '',
            optionA: '制造',
            optionB: '创造',
            optionACharacter: 'N',
            optionBCharacter: 'S'
        },
        {
            id: 87,
            title: '',
            optionA: '新颖的',
            optionB: '已知的',
            optionACharacter: 'N',
            optionBCharacter: 'S'
        },
        {
            id: 88,
            title: '',
            optionA: '同情',
            optionB: '分析',
            optionACharacter: 'F',
            optionBCharacter: 'T'
        },
        {
            id: 89,
            title: '',
            optionA: '坚持己见',
            optionB: '温柔有爱心',
            optionACharacter: 'T',
            optionBCharacter: 'F'
        },
        {
            id: 90,
            title: '',
            optionA: '具体的',
            optionB: '抽象的',
            optionACharacter: 'S',
            optionBCharacter: 'N'
        },
        {
            id: 91,
            title: '',
            optionA: '全心投入',
            optionB: '有决心的',
            optionACharacter: 'F',
            optionBCharacter: 'T'
        },
        {
            id: 92,
            title: '',
            optionA: '能干',
            optionB: '仁慈',
            optionACharacter: 'T',
            optionBCharacter: 'F'
        },
        {
            id: 93,
            title: '',
            optionA: '实际',
            optionB: '创新',
            optionACharacter: 'S',
            optionBCharacter: 'N'
        }
    ]
}

export { sectionA, sectionB, sectionC, sectionD }
