// ============================
// 序幕数据：6 个交互步骤
// ============================
const prologueData = {
  0: {
    title: "",
    bg: "none",
    lines: ["两百多年前，中国有一个很大的家族。", "——大到你走进它家的门，会迷路。"],
    btn: "开始",
    layout: "center"
  },
  1: {
    title: "这是哪本书？",
    bg: "assets/cg_main_gate.png",
    lines: [
      "这本书叫《红楼梦》，是中国最有名的小说。",
      "作者是曹雪芹，他写这本书，用了一辈子。",
      "书里有一个很大的家族，姓贾。故事讲这个家：怎么兴旺，又怎么败落。",
      "中国人读它，不只是读故事——也是在读「人怎么过日子」。"
    ],
    btn: "我懂了，继续",
    layout: "card"
  },
  2: {
    title: "你的身份卡",
    bg: "assets/cg_main_gate.png",
    lines: [
      "姓名：刘姥姥",
      "年龄：六十多岁",
      "家住：城外乡下",
      "家里情况：穷。冬天到了，连过冬的东西都没准备好。",
      "从现在起，你就是刘姥姥。"
    ],
    btn: "继续",
    layout: "card",
    extra: [
      { title: "刘姥姥", portrait: "assets/ch_liu_laolao_before.png", text: "六十多岁的乡下老太太。就是你。" }
    ]
  },
  3: {
    title: "你和贾家，是什么关系？",
    bg: "assets/cg_main_gate.png",
    lines: [
      "二十年前，你女婿家和王家「连过宗」——就是认了一门亲戚。",
      "可是后来两家不走动了，就慢慢远了。",
      "现在，你要拿这门「很远很远」的亲戚关系，去敲一个大户人家的门。"
    ],
    btn: "继续",
    layout: "card",
    extra: [
      { title: "王夫人", portrait: "assets/ch_lady_wang.png", text: "贾家的太太。很多年前，两家认过亲戚。" },
      { title: "王狗儿", portrait: "assets/ch_gouer.png", text: "刘姥姥的女婿。" },
      { title: "板儿", portrait: "assets/ch_liulaolao_baner.png", text: "刘姥姥带的外孙。" }
    ]
  },
  4: {
    title: "你会遇到谁？",
    bg: "assets/cg_main_gate.png",
    lines: ["这一路上，你会遇到这些人。"],
    btn: "我记住他们了",
    layout: "card",
    extra: [
      { title: "刘姥姥", portrait: "assets/ch_liu_laolao_before.png", text: "六十多岁的乡下老太太。就是你。" },
      { title: "板儿", portrait: "assets/ch_liulaolao_baner.png", text: "你的外孙，五六岁，跟你一起去。" },
      { title: "周瑞家的", portrait: "assets/ch_zhou_rui_wife.png", text: "贾家的女仆。她丈夫以前受过你女婿家的帮助，所以愿意帮你。" },
      { title: "平儿", portrait: "assets/ch_ping_er.png", text: "王熙凤身边的大丫头。年轻、漂亮、穿得很好。" },
      { title: "王熙凤", portrait: "assets/ch_wang_xifeng.png", text: "贾家现在管事的年轻女人，不到二十岁，特别能干。" }
    ]
  },
  5: {
    title: "你的任务",
    bg: "assets/cg_main_gate.png",
    lines: ["这一趟，你要做的事："],
    tasks: [
      "走进荣国府，见到管事的王熙凤。",
      "见到她的时候，认真说话，不要失去礼貌。",
      "看一看他们吃什么、穿什么、用什么——和你家有什么不一样。",
      "看到不懂的东西，点它一下，收进你的「文化手册」。"
    ],
    btn: "出发",
    layout: "card"
  }
};

// ============================
// 立绘映射
// ============================
const portraitMap = {
  '刘姥姥': 'assets/ch_liu_laolao_before.png',
  '狗儿': 'assets/ch_gouer.png',
  '刘氏': 'assets/ch_liu_shi.png',
  '周瑞家的': 'assets/ch_zhou_rui_wife.png',
  '平儿': 'assets/ch_ping_er.png',
  '王熙凤': 'assets/ch_wang_xifeng.png',
  '看门人': 'assets/ch_banger.png',
  '老年人': 'assets/ch_old_servant.png',
  '板儿': 'assets/ch_liulaolao_baner.png',
  '孩子': 'assets/ch_guiding_boy.png',
  '小丫头': 'assets/ch_maid_hired.png',
  '贾蓉': 'assets/ch_wang_cheng.png'
};

// ============================
// 人物谱数据
// ============================
const characters = [
  { id: 'liulaolao', name: '刘姥姥', portrait: 'assets/ch_liu_laolao_before.png', role: '六十多岁的乡下老太太。你就是她。' },
  { id: 'baner', name: '板儿', portrait: 'assets/ch_liulaolao_baner.png', role: '刘姥姥的外孙，五六岁，跟她一起去荣国府。' },
  { id: 'gouer', name: '狗儿', portrait: 'assets/ch_gouer.png', role: '刘姥姥的女婿。家里穷，爱生闷气。' },
  { id: 'zhou', name: '周瑞家的', portrait: 'assets/ch_zhou_rui_wife.png', role: '贾家的女仆。她丈夫受过狗儿父亲的帮助，所以愿意帮刘姥姥。' },
  { id: 'ping', name: '平儿', portrait: 'assets/ch_ping_er.png', role: '王熙凤身边的大丫头。年轻、漂亮、穿得很好。' },
  { id: 'xifeng', name: '王熙凤', portrait: 'assets/ch_wang_xifeng.png', role: '贾家现在管事的年轻女人，不到二十岁，特别能干。' }
];

// 节点标题
const nodeTitles = {
  'node_1': '冬夜生计',
  'node_2': '次日进城',
  'node_3': '角门外',
  'node_4': '后门寻人',
  'node_5': '周瑞家说凤姐',
  'node_6': '赶空子动身',
  'node_7': '倒厅等候',
  'node_8': '误认平儿',
  'node_9': '堂屋闻香',
  'node_10': '等凤姐吃饭',
  'node_11': '见凤姐',
  'node_12': '凤姐问话',
  'node_13': '贾蓉插曲',
  'node_13b': '收下银子',
  'node_14': '尾声·回望',
  'node_15': '文化结算',
  'failure_gate': '被拦在门外',
  'failure_zhou': '人情耗尽',
  'failure_zhou2': '周瑞家的不再接话',
  'failure_hall': '没见到凤姐',
  'failure_xifeng': '被客气送走'
};

// ============================
// 故事数据：16 个节点，7 个选择点，7 个文化热点
// ============================
const storyData = {
  "node_1": {
    "bg": "assets/bg_n01_liu_home_night.png",
    "camera": "medium",
    "transition": "fade",
    "pages": [
      { "speaker": "旁白", "text": "天快黑了，屋里还没点灯。" },
      { "speaker": "旁白", "text": "锅是冷的，灶里一点火也没有。" },
      { "speaker": "旁白", "text": "狗儿坐在炕沿上，低着头，一句话不说。" },
      { "speaker": "旁白", "text": "他白天喝了几杯闷酒，正在家里找气生。" },
      { "speaker": "旁白", "text": "他媳妇刘氏不敢顶他。" },
      { "speaker": "狗儿", "text": "你老人家只会在炕头上坐着说空话。难道让我去抢去？" }
    ],
    "convergeTo": "node_2",
    "options": [
      {
        "id": "a",
        "text": "「你一个大男人，成天在家生气，有用吗？」",
        "feedback": "狗儿脸一沉，把脸转向墙：「过日子不是抬杠。」——他更不肯动了。",
        "renqingCost": 20,
        "renqingReason": "说话太冲，家里人更难同心。"
      },
      {
        "id": "b",
        "text": "「咱们庄稼人，有多大的碗，吃多大的饭。如今是咱们自己不肯走动，才疏远了的。」",
        "feedback": "狗儿愣了一下，慢慢抬起头。他媳妇刘氏也接了一句：「你老人家说得好！」",
        "renqingCost": 0,
        "renqingReason": "话说得在理，家人愿意听你的。"
      },
      {
        "id": "c",
        "text": "「我去也行——只是这事若成了，是我一个人的功劳。」",
        "feedback": "狗儿冷笑：「还没去呢，就先分好了。」屋里的空气冷了下来。",
        "renqingCost": 30,
        "renqingReason": "还没成事就先分功，让人心寒。"
      }
    ],
    "hotspots": [
      {
        "id": "h1",
        "x": 0.42,
        "y": 0.74,
        "w": 0.12,
        "h": 0.12,
        "title": "粗陶酒碗",
        "surface": "农家用的粗陶碗，颜色不匀，边也磕了。",
        "usage": "平时喝酒、喝水都用它。",
        "culture": "一只粗碗，就是刘姥姥家「穷」最直接的样子。",
        "source": "第六回",
        "image": "assets/hotspot_01_winebowl.png"
      }
    ]
  },
  "node_2": {
    "bg": "assets/bg_n02_street_dawn.png",
    "camera": "wide",
    "transition": "page-flip",
    "pages": [
      { "speaker": "旁白", "text": "第二天天还没亮，刘姥姥就起来梳洗了，又教板儿几句话。" },
      { "speaker": "旁白", "text": "五六岁的孩子，听说要带他进城逛，高兴得什么都答应。" },
      { "speaker": "旁白", "text": "于是刘姥姥带着板儿进城，来到宁荣街。" },
      { "speaker": "旁白", "text": "到了荣府大门前，石狮子旁边，只见门口满是轿子和马。" },
      { "speaker": "旁白", "text": "刘姥姥不敢走正门，掸掸衣服，又教了板儿几句话，然后溜到角门前。" }
    ],
    "nextId": "node_3",
    "hotspots": []
  },
  "node_3": {
    "bg": "assets/bg_n03_corner_gate_haughty_servants.png",
    "camera": "medium",
    "transition": "page-flip",
    "pages": [
      { "speaker": "旁白", "text": "只见几个挺着胸、叉着腰的人，坐在大门上说东说西，不理你。" }
    ],
    "convergeTo": "node_3_branch",
    "options": [
      {
        "id": "a",
        "text": "「太爷们纳福！我找太太的陪房周大爷，麻烦哪位太爷替我请他出来。」",
        "feedback": "几个看门人打量了你一会儿。有个老年人看不过，从板凳上站起来，给你指了指后门的路。",
        "renqingCost": 0,
        "renqingReason": "称呼得体，看门人才愿意指路。"
      },
      {
        "id": "b",
        "text": "「我是你们太太的亲戚，我要见太太。」",
        "feedback": "「亲戚？」几个人对视一笑，又低下头去说自己的。你站在冷风里，只好自己绕着墙根往后门走。",
        "renqingCost": 30,
        "renqingReason": "自称太太亲戚，看门人觉得你在摆架子。"
      },
      {
        "id": "c",
        "text": "站着等，等他们自己来问。",
        "feedback": "站了半天，腿都冻麻了。最后还是那个老年人出来问了你一句，听你说找周瑞家的，才给你指了路。",
        "renqingCost": 20,
        "renqingReason": "干等着不主动，已经被人看轻。"
      }
    ],
    "hotspots": []
  },
  "node_3_branch": {
    "type": "branch",
    "condition": function() { return state.renqing <= 55; },
    "trueId": "failure_gate",
    "falseId": "node_4",
    "hotspots": []
  },
  "failure_gate": {
    "bg": "assets/bg_n03_corner_gate_outside.png",
    "camera": "wide",
    "transition": "page-flip",
    "type": "settlement",
    "pages": [
      { "speaker": "旁白", "text": "那几个看门的人听了你的话，互相看了看，又低下头去说自己的。" },
      { "speaker": "旁白", "text": "你又在寒风里站了一会儿，没人再理你。" },
      { "speaker": "旁白", "text": "板儿拉了拉你的袖子：「姥姥，我冷。」" },
      { "speaker": "旁白", "text": "你叹了口气，只能带着他回去了。" }
    ],
    "endingTitle": "被拦在门外",
    "endingRating": "你连门都没能进去。在贾府，说错一句话，门就不会为你打开。",
    "hotspots": []
  },
  "node_4": {
    "bg": "assets/bg_n04_backdoor_market.png",
    "camera": "medium",
    "transition": "page-flip",
    "pages": [
      { "speaker": "旁白", "text": "你绕到后门，只见门上停着些做生意的担子，有卖吃的，也有卖小玩意儿的。" },
      { "speaker": "旁白", "text": "二三十个孩子在那里闹吵吵。" },
      { "speaker": "旁白", "text": "刘姥姥拉住一个看起来机灵的孩子，问他周瑞家在哪里。" },
      { "speaker": "孩子", "text": "周大妈？你跟我来！" },
      { "speaker": "旁白", "text": "孩子引她进了后院，走到院子墙边，指着一扇小门说：" },
      { "speaker": "孩子", "text": "这就是周瑞家，你找周大妈是不是？" },
      { "speaker": "旁白", "text": "孩子朝门里喊了一声，一个妇人掀帘子出来。" },
      { "speaker": "孩子", "text": "周大妈，有个老奶奶子找你呢！" },
      { "speaker": "周瑞家的", "text": "是哪位？" }
    ],
    "convergeTo": "node_4_branch",
    "options": [
      {
        "id": "a",
        "text": "「好呀，周嫂子！多年不见，我特意来看看你。」",
        "feedback": "周瑞家的认了半日，笑起来：「刘姥姥，你好？你说说，这几年不见，我就忘了。请家里坐。」",
        "renqingCost": 0,
        "renqingReason": "叫得亲热，周瑞家的把你当熟人。"
      },
      {
        "id": "b",
        "text": "「我是太太的亲戚，来找你办件事。」",
        "feedback": "周瑞家的愣了一下，脸色有点不自然，才让了坐：「姥姥屋里说话。」",
        "renqingCost": 30,
        "renqingReason": "摆太太亲戚的架子，周瑞家的心里不自在。"
      },
      {
        "id": "c",
        "text": "「周嫂子，你还认得我吗？我是当年和姑太太去过荣国府的那个。」",
        "feedback": "周瑞家的想了想，才认出来，笑了笑，可是那笑不如刚才热：「快进来说话。」",
        "renqingCost": 20,
        "renqingReason": "绕圈子没直接说明来意，显得不够坦诚。"
      }
    ],
    "hotspots": []
  },
  "node_4_branch": {
    "type": "branch",
    "condition": function() { return state.renqing <= 40; },
    "trueId": "failure_zhou",
    "falseId": "node_5",
    "hotspots": []
  },
  "failure_zhou": {
    "bg": "assets/bg_n04_red_gate.png",
    "camera": "wide",
    "transition": "page-flip",
    "type": "settlement",
    "pages": [
      { "speaker": "旁白", "text": "周瑞家的听了几句，脸上的笑淡了下来。" },
      { "speaker": "周瑞家的", "text": "姥姥，今天不巧，改日再说吧。" }
    ],
    "endingTitle": "人情耗尽",
    "endingRating": "你还没摸清这家人说话的门道。周瑞家的客气地把你送了出来，连二奶奶的面都没见上。",
    "hotspots": []
  },
  "node_5": {
    "bg": "assets/bg_n05_zhou_rui_room.png",
    "camera": "medium",
    "transition": "page-flip",
    "pages": [
      { "speaker": "旁白", "text": "周瑞家的把你让进屋里，又叫小丫头倒茶。" },
      { "speaker": "小丫头", "text": "姥姥，请喝茶。" },
      { "speaker": "旁白", "text": "你捧着茶碗，把二十年前连宗的事、如今家里揭不开锅的事，慢慢说了一遍。" },
      { "speaker": "旁白", "text": "周瑞家的听了，心里已经猜到了几分来意。" },
      { "speaker": "旁白", "text": "因为她丈夫当年争买田地，多得狗儿父亲的帮助；今天见刘姥姥这样来，她不好意思推辞。" },
      { "speaker": "周瑞家的", "text": "姥姥，你放心。大老远诚心诚意来了，哪能叫你不去见个真佛儿去呢？" },
      { "speaker": "周瑞家的", "text": "按说，人来客往，都和我没关系。我们这里各人管各人的事。" },
      { "speaker": "周瑞家的", "text": "因为你是太太的亲戚，又拿我当个人，投奔了我来，我就破个例，给你通个信儿去。" },
      { "speaker": "周瑞家的", "text": "不过有一件，你还不知道：我们这里不比五年前了。如今太太不管事，都是琏二奶奶当家。" },
      { "speaker": "周瑞家的", "text": "你知道琏二奶奶是谁？就是太太的内侄女儿，大舅老爷的女儿，小名叫凤哥的。" },
      { "speaker": "刘姥姥", "text": "原来是他？怪不得呢！我当日就说他不错。这么说起来，我今儿还得见他了？" },
      { "speaker": "周瑞家的", "text": "这个自然。如今有客来，都是凤姑娘周旋接待。今儿宁可不见太太，倒得见他一面，才不枉来这一趟。" },
      { "speaker": "刘姥姥", "text": "阿弥陀佛！全仗嫂子方便了。" },
      { "speaker": "周瑞家的", "text": "姥姥说哪里话？俗语说得好：「与人方便，自己方便。」不过是我说一句话，又费不着我什么事。" },
      { "speaker": "旁白", "text": "说着，就叫小丫头到倒厅儿上，悄悄打听老太太屋里摆饭了没有。" }
    ],
    "nextId": "node_6",
    "hotspots": []
  },
  "node_6": {
    "bg": "assets/bg_n06_zhou_rui_room.png",
    "camera": "medium",
    "transition": "fade",
    "pages": [
      { "speaker": "旁白", "text": "这里两个人又说了些闲话。" },
      { "speaker": "周瑞家的", "text": "这凤姑娘年纪儿虽小，做事却比谁都大。如今长成美人儿似的，少说着也有一万个心眼子。" },
      { "speaker": "周瑞家的", "text": "要说嘴上的功夫，十个会说话的男人也说不过她。" },
      { "speaker": "周瑞家的", "text": "只有一件——她对下人未免太严了些儿。" }
    ],
    "convergeTo": "node_6_branch",
    "options": [
      {
        "id": "a",
        "text": "「这么年轻就这么能干，真是难得。」",
        "feedback": "周瑞家的点点头，接着小丫头来报信，赶紧催你动身。",
        "renqingCost": 0,
        "renqingReason": "顺着周瑞家的话说，她更愿意帮你。"
      },
      {
        "id": "b",
        "text": "「这么说，她待下人不好？」",
        "feedback": "周瑞家的顿了顿：「这话你可别在别处说。」语气紧了一下，才转开话题。",
        "renqingCost": 20,
        "renqingReason": "背后议论凤姐，让周瑞家的紧张。"
      },
      {
        "id": "c",
        "text": "「一个年轻媳妇，能管这么大的家？我不信。」",
        "feedback": "周瑞家的看了你一眼，笑了笑，没有再解释。",
        "renqingCost": 30,
        "renqingReason": "小看凤姐，周瑞家的觉得你不会说话。"
      }
    ],
    "hotspots": []
  },
  "node_6_branch": {
    "type": "branch",
    "condition": function() { return state.renqing <= 25; },
    "trueId": "failure_zhou2",
    "falseId": "node_7",
    "hotspots": []
  },
  "failure_zhou2": {
    "bg": "assets/bg_n05_tea_set.png",
    "camera": "wide",
    "transition": "page-flip",
    "type": "settlement",
    "pages": [
      { "speaker": "旁白", "text": "周瑞家的脸上的笑淡了下来。" },
      { "speaker": "周瑞家的", "text": "姥姥，今天奶奶忙着呢，改日我再替你回一声吧。" },
      { "speaker": "旁白", "text": "她没再留你，只是叫小丫头把你送到了后门。" }
    ],
    "endingTitle": "周瑞家的不再接话",
    "endingRating": "你失了礼数，周瑞家的不愿意再帮你。进贾府的路，到这里就断了。",
    "hotspots": []
  },
  "node_7": {
    "bg": "assets/bg_n07_daoting_yard.png",
    "camera": "medium",
    "transition": "page-flip",
    "pages": [
      { "speaker": "旁白", "text": "周瑞家的起身，带你和板儿出了屋子，往倒厅来。" },
      { "speaker": "旁白", "text": "她把刘姥姥安插在那里等着，自己先过了影壁，进了院门。" },
      { "speaker": "旁白", "text": "知道凤姐还没出来，先找着凤姐的一个心腹通房大丫头——名唤平儿的。" },
      { "speaker": "周瑞家的", "text": "今天大老远地来请安。当年太太是常跟她见的，所以我带了她过来。等奶奶下来，我细细回明了，想来奶奶也不至于怪我莽撞。" },
      { "speaker": "平儿", "text": "叫他们进来，先在这里坐着就是了。" },
      { "speaker": "旁白", "text": "周瑞家的这才出去，领了他们进来。" }
    ],
    "nextId": "node_8",
    "hotspots": []
  },
  "node_8": {
    "bg": "assets/bg_n08_hall_incense.png",
    "camera": "focus",
    "transition": "page-flip",
    "pages": [
      { "speaker": "旁白", "text": "上了正房台阶，一个小丫头打起猩红毡帘。" },
      { "speaker": "旁白", "text": "才进堂屋，一阵香气扑到脸上，竟闻不出是什么香，人好像就在云里一样。" },
      { "speaker": "旁白", "text": "满屋的东西都发亮放光，看得人头晕目眩。" },
      { "speaker": "旁白", "text": "刘姥姥这时只有点头、咂嘴、念佛而已。" },
      { "speaker": "旁白", "text": "于是走到东边这间屋里——这是贾琏的女儿睡觉的地方。" },
      { "speaker": "旁白", "text": "平儿站在炕沿边，打量了刘姥姥两眼，只好问个好、让了坐。" },
      { "speaker": "刘姥姥", "text": "这姑娘满身绫罗，插金戴银，花容月貌——一定是凤姐儿了！" }
    ],
    "convergeTo": "node_8_branch",
    "options": [
      {
        "id": "a",
        "text": "立刻改口，笑着问好。",
        "feedback": "只见周瑞家的说「他是平姑娘」，你顺势点头、问好，平儿也没多说什么。",
        "renqingCost": 0,
        "renqingReason": "立刻改口，没让平儿难堪。"
      },
      {
        "id": "b",
        "text": "硬着头皮把「姑奶奶」叫完。",
        "feedback": "平儿愣了一下，笑了一下，脸上有点红。周瑞家的赶紧打圆场。",
        "renqingCost": 20,
        "renqingReason": "叫错了人还硬撑，场面有点尴尬。"
      },
      {
        "id": "c",
        "text": "赶紧道歉：「对不起，我眼拙。」",
        "feedback": "满屋子人都看你，平儿忙说「不敢当」，有点尴尬。",
        "renqingCost": 30,
        "renqingReason": "道歉不得体，反而让大家都注意到你的失礼。"
      }
    ],
    "hotspots": [
      {
        "id": "h2",
        "x": 0.5,
        "y": 0.26,
        "w": 0.14,
        "h": 0.14,
        "title": "猩红毡帘",
        "surface": "门口挂着的大红厚毡帘，又暖和又气派。",
        "usage": "冬天挂在门口挡风，也是富贵人家的装饰。",
        "culture": "掀开毡帘进门，就像从乡下走进了另一个世界。",
        "source": "第六回",
        "image": "assets/hotspot_10_redfeltcurtain.png"
      }
    ]
  },
  "node_8_branch": {
    "type": "branch",
    "condition": function() { return state.renqing <= 10; },
    "trueId": "failure_hall",
    "falseId": "node_9",
    "hotspots": []
  },
  "failure_hall": {
    "bg": "assets/bg_n07_daoting_yard.png",
    "camera": "wide",
    "transition": "page-flip",
    "type": "settlement",
    "pages": [
      { "speaker": "旁白", "text": "平儿脸上的笑淡了下来，悄悄看了周瑞家的一眼。" },
      { "speaker": "周瑞家的", "text": "姥姥，今日不巧，奶奶身子不便，您还是先回吧。" },
      { "speaker": "旁白", "text": "你还没来得及看清那屋子，就被送了出来。" }
    ],
    "endingTitle": "没见到凤姐",
    "endingRating": "你在堂屋里说错了话，连凤姐的面都没见上。",
    "hotspots": []
  },
  "node_9": {
    "bg": "assets/bg_n09_hall_clock.png",
    "camera": "focus",
    "transition": "focus-pull",
    "pages": [
      { "speaker": "旁白", "text": "平儿把你按在椅子上坐下，笑着解释：「这是自鸣钟，到点会自己响。」" },
      { "speaker": "旁白", "text": "你还没完全明白，就听见「咯当、咯当」的响声，很像打箩筛面一样，不免东瞧西望。" },
      { "speaker": "旁白", "text": "忽然看见堂屋柱子上挂着一个匣子，底下还坠着一个秤砣一样的东西，却不住地乱晃。" },
      { "speaker": "刘姥姥", "text": "这是什么东西？有什么用呢？……" },
      { "speaker": "旁白", "text": "正发呆时，忽然听得「当」的一声，像金钟铜磬一样，吓得她不住地眨眼。" },
      { "speaker": "旁白", "text": "接着又是一连八九下。" },
      { "speaker": "旁白", "text": "正想问，只见小丫头们一齐乱跑，说：「奶奶下来了。」" },
      { "speaker": "平儿", "text": "姥姥只管坐着，到时候我们来请你。" },
      { "speaker": "旁白", "text": "说着，都迎出去了。" }
    ],
    "nextId": "node_10",
    "hotspots": [
      {
        "id": "h3",
        "x": 0.54,
        "y": 0.34,
        "w": 0.12,
        "h": 0.12,
        "title": "自鸣钟",
        "surface": "这是西洋自鸣钟，会自己报时，乡下人从没见过。",
        "usage": "到时间它就会自己响，告诉主人现在几点。",
        "culture": "钟是「洋货」，代表贾府有钱、有见识；刘姥姥听不懂，是乡下人和大官府的对照。",
        "source": "第六回",
        "image": "assets/hotspot_09_clock_x_y.png"
      }
    ]
  },
  "node_10": {
    "bg": "assets/bg_n09_ban_er_want_to_eat_meat.png",
    "camera": "medium",
    "transition": "page-flip",
    "pages": [
      { "speaker": "旁白", "text": "刘姥姥屏声侧耳，静静地等。" },
      { "speaker": "旁白", "text": "只听远远有笑声，约有一二十个妇人，衣裙沙沙响，渐渐进了堂屋，往那边屋里去了。" },
      { "speaker": "旁白", "text": "又见三两个妇人，都捧着大红油漆盒，进这边来等候。" },
      { "speaker": "旁白", "text": "听得那边说道「摆饭」，人才渐渐散出去，只有伺候端菜的几个人。" },
      { "speaker": "旁白", "text": "半天，鸦雀不闻。" },
      { "speaker": "旁白", "text": "忽然两个人抬了一张炕桌来，放在这边炕上。" },
      { "speaker": "旁白", "text": "桌上碗盘摆列，还是满满的鱼肉，不过略动了几样。" },
      { "speaker": "旁白", "text": "板儿一见，就吵着要肉吃，刘姥姥打了他一巴掌。" },
      { "speaker": "旁白", "text": "忽然看见周瑞家的笑嘻嘻走过来，招手叫她。" },
      { "speaker": "旁白", "text": "刘姥姥会意，于是带着板儿下炕，到堂屋中间。" },
      { "speaker": "旁白", "text": "周瑞家的又和她嘀咕了一会儿，才往这边屋里来。" }
    ],
    "nextId": "node_11",
    "hotspots": [
      {
        "id": "h4",
        "x": 0.44,
        "y": 0.64,
        "w": 0.12,
        "h": 0.12,
        "title": "炕桌摆饭",
        "surface": "满满一桌鱼肉，只动了几样就撤下去了。",
        "usage": "这是给主人摆的饭，吃不完也不会留给下人。",
        "culture": "一顿饭的浪费，就是乡下人家一年的开销——贫富差距的具象。",
        "source": "第六回",
        "image": "assets/hotspot_09_kangtable.png"
      }
    ]
  },
  "node_11": {
    "bg": "assets/bg_n12_xifeng_room.png",
    "camera": "focus",
    "transition": "focus-pull",
    "pages": [
      { "speaker": "旁白", "text": "只见门外铜钩上挂着大红撒花软帘。" },
      { "speaker": "旁白", "text": "南窗下是炕，炕上铺着大红条毡；靠东边板壁立着一个锁子锦的靠背和一个引枕，铺着金线闪的大坐褥，旁边还有银唾盒。" },
      { "speaker": "旁白", "text": "那凤姐家常戴着紫貂昭君套，围着攒珠勒子，穿着桃红撒花袄、石青刻丝灰鼠披风、大红洋绉银鼠皮裙，粉光脂艳，端端正正坐在那里。" },
      { "speaker": "旁白", "text": "她手里拿着小铜火筷子，拨手炉里的灰。" },
      { "speaker": "旁白", "text": "平儿站在炕沿边，捧着小小的一个填漆茶盘，盘内一个小盖钟。" },
      { "speaker": "旁白", "text": "凤姐也不接茶，也不抬头，只管拨那灰，慢慢地说：" },
      { "speaker": "王熙凤", "text": "怎么还不请进来？" }
    ],
    "convergeTo": "node_11_branch",
    "options": [
      {
        "id": "a",
        "text": "拜几拜，叫「姑奶奶」。",
        "feedback": "凤姐忙说「周姐姐，搀着不拜罢」，又说「我年轻，不大认得，也不知是什么辈数儿，不敢称呼」。",
        "renqingCost": 0,
        "renqingReason": "礼数周到，凤姐受用。"
      },
      {
        "id": "b",
        "text": "上前拉住凤姐的手，叫「凤姑娘」。",
        "feedback": "凤姐的手往后一缩，笑了一下，没接话。周瑞家的脸都白了。",
        "renqingCost": 30,
        "renqingReason": "拉手叫凤姑娘，太不知礼，凤姐不高兴。"
      },
      {
        "id": "c",
        "text": "只作一个揖，站着等凤姐先说话。",
        "feedback": "满屋子静了一下。凤姐慢慢抬眼看了你一眼，才开口。",
        "renqingCost": 20,
        "renqingReason": "只作揖不说话，显得生分、不懂规矩。"
      }
    ],
    "hotspots": [
      {
        "id": "h5",
        "x": 0.93,
        "y": 0.22,
        "w": 0.12,
        "h": 0.18,
        "title": "撒花软帘",
        "surface": "门外挂着的大红撒花软帘。",
        "usage": "冬天挂在门口挡风，也是主人身份的装饰。",
        "culture": "这一道帘子，就是「门里门外」的分界，也是贫与富的分界。",
        "source": "第六回",
        "image": "assets/hotspot_08_softcurtain.png"
      },
      {
        "id": "h6",
        "x": 0.72,
        "y": 0.14,
        "w": 0.16,
        "h": 0.14,
        "title": "貂鼠昭君套",
        "surface": "王熙凤额上戴的貂鼠皮毛暖额。",
        "usage": "冬天戴在额头上挡风、保暖。",
        "culture": "一件小东西却价格不菲，连丫鬟都不一定有。乡下人连听都没听过。",
        "source": "第六回",
        "image": "assets/hotspot_11_zhaojuntao.png"
      }
    ]
  },
  "node_11_branch": {
    "type": "branch",
    "condition": function() { return state.renqing <= 0; },
    "trueId": "failure_xifeng",
    "falseId": "node_12",
    "hotspots": []
  },
  "failure_xifeng": {
    "bg": "assets/bg_n03_corner_gate_outside.png",
    "camera": "wide",
    "transition": "page-flip",
    "type": "settlement",
    "pages": [
      { "speaker": "旁白", "text": "凤姐抬眼看了看你，笑容淡了些。" },
      { "speaker": "王熙凤", "text": "姥姥远来辛苦，回去替我问候家里吧。" }
    ],
    "endingTitle": "被客气送走",
    "endingRating": "你失了礼数，凤姐没有发作，只是客气地把你送了出来。二十两银子，终究没能开口求到。",
    "hotspots": []
  },
  "node_12": {
    "bg": "assets/bg_n11_xifeng_room.png",
    "camera": "medium",
    "transition": "fade",
    "pages": [
      { "speaker": "王熙凤", "text": "周姐姐，搀着不拜罢。我年轻，不大认得，也不知是什么辈数儿，不敢称呼。" },
      { "speaker": "周瑞家的", "text": "这就是我才回的那个姥姥了。" },
      { "speaker": "旁白", "text": "凤姐点点头。刘姥姥已经在炕沿上坐下了。" },
      { "speaker": "旁白", "text": "板儿便躲在她背后，百般哄他出来作揖，他死也不肯。" },
      { "speaker": "王熙凤", "text": "亲戚们不大走动，都疏远了。知道的呢，说你们嫌我们，不肯常来；不知道的那些小人，还只当我们眼里没人似的。" },
      { "speaker": "刘姥姥", "text": "我们家道艰难，走不起。来到这里，没的给姑奶奶打嘴——就是管家爷们瞧着也不像。" },
      { "speaker": "王熙凤", "text": "这话没的叫人恶心。不过托赖着祖父的虚名，作个穷官儿罢了。谁家有什么？不过也是个空架子。俗语儿说得好：「朝廷还有三门子穷亲呢」，何况你我？" },
      { "speaker": "王熙凤", "text": "你去瞧瞧。要是有人就罢；要是得闲呢，就回了，看怎么说。" },
      { "speaker": "旁白", "text": "周瑞家的答应着去了。" }
    ],
    "nextId": "node_13",
    "hotspots": [
      {
        "id": "h7",
        "x": 0.72,
        "y": 0.82,
        "w": 0.14,
        "h": 0.14,
        "title": "手炉",
        "surface": "小铜火筷子拨着的小炉子，里面烧着炭，用来暖手。",
        "usage": "冬天拿在手里取暖，也可以放在炕上。",
        "culture": "凤姐一边拨灰一边说话，动作慢、不慌不忙，这就是大户人家的从容。",
        "source": "第六回",
        "image": "assets/hotspot_11_handwarmer.png"
      }
    ]
  },
  "node_13": {
    "bg": "assets/bg_n13_xifeng_room_screen_borrowing.png",
    "camera": "focus",
    "transition": "focus-pull",
    "pages": [
      { "speaker": "旁白", "text": "凤姐叫人抓了些果子给板儿吃。" },
      { "speaker": "旁白", "text": "刚问了几句闲话，就有家里许多媳妇、管事的来回话。平儿回了。" },
      { "speaker": "王熙凤", "text": "我这里陪客呢，晚上再来回；有要紧事，你就带进来现办。" },
      { "speaker": "旁白", "text": "平儿出去一会儿，进来说没什么要紧的，就叫他们散了。" },
      { "speaker": "旁白", "text": "只见周瑞家的回来，向凤姐转达了太太的话，又递了个眼色儿。" },
      { "speaker": "旁白", "text": "刘姥姥会意，还没说话先红了脸。" },
      { "speaker": "旁白", "text": "正要开口，只听二门上小厮们回说：「东府里小大爷进来了。」" },
      { "speaker": "王熙凤", "text": "不必说了。" },
      { "speaker": "旁白", "text": "只听一路靴子响，进来了一个十七八岁的少年，面目清秀，身段苗条，美服华冠，轻裘宝带。" },
      { "speaker": "贾蓉", "text": "侄儿想借婶子房里那架玻璃炕屏，明日请客摆一摆，婶子赏脸罢。" },
      { "speaker": "旁白", "text": "凤姐起初不肯，贾蓉赔着笑求了半天，凤姐才答应，叫人抬给他。" },
      { "speaker": "旁白", "text": "这一来一回，刘姥姥都看在眼里：原来在这家里，连亲戚之间说话，也是要绕好几个弯的。" }
    ],
    "convergeTo": "node_13_branch",
    "options": [
      {
        "id": "a",
        "text": "「我今日带了你侄儿，不为别的——只因他爹娘连吃的都没有，天气又冷，只得带了你侄儿奔了你老来。」",
        "feedback": "凤姐早已明白了，听她不会说话，便笑道：「不必说了，我知道了。」又命人传饭。",
        "renqingCost": 0,
        "renqingReason": "虽然话说得啰嗦，但诚意到了。"
      },
      {
        "id": "b",
        "text": "「姑奶奶，我家里实在过不下去了，你借我二十两银子吧。」",
        "feedback": "凤姐笑了一下：「倒是个爽快人。」周瑞家的在旁边急得直使眼色。",
        "renqingCost": 20,
        "renqingReason": "开口就借银子，太直接，失了体面。"
      },
      {
        "id": "c",
        "text": "「也没什么，就是来看看姑奶奶。」",
        "feedback": "凤姐等了一会儿，转而问周瑞家的「这姥姥用了早饭没有」——话头就这么过去了。",
        "renqingCost": 30,
        "renqingReason": "不说真正来意，凤姐以为你只是串门。"
      }
    ],
    "hotspots": []
  },
  "node_13_branch": {
    "type": "branch",
    "condition": function() { return state.renqing <= 0; },
    "trueId": "failure_xifeng",
    "falseId": "node_13b",
    "hotspots": []
  },
  "node_13b": {
    "bg": "assets/cg_receiving_silver.png",
    "camera": "medium",
    "transition": "page-flip",
    "pages": [
      { "speaker": "旁白", "text": "凤姐叫人取了二十两银子来。" },
      { "speaker": "旁白", "text": "又听见凤姐说：「这是太太的意思，你拿去给孩子做件冬衣。」" },
      { "speaker": "刘姥姥", "text": "谢谢姑奶奶，谢谢太太。" },
      { "speaker": "旁白", "text": "你接过银子，揣进怀里，带着板儿退了出来。" }
    ],
    "nextId": "node_14",
    "hotspots": []
  },
  "node_14": {
    "bg": "assets/bg_n14_ending_gate_lookback.png",
    "camera": "wide",
    "transition": "page-flip",
    "pages": [
      { "speaker": "旁白", "text": "刘姥姥揣着银子，带着板儿出来了。" },
      { "speaker": "旁白", "text": "走到院子里，她回头看了一眼那扇门。" },
      { "speaker": "刘姥姥", "text": "二十两银子……够我们一家过一年了。" },
      { "speaker": "旁白", "text": "她想起刚才那一顿饭——满满一桌子菜，动了几样就撤了。" },
      { "speaker": "旁白", "text": "想起那个差点认错的平姑娘。想起那口会自己响的匣子。" },
      { "speaker": "板儿", "text": "姥姥，我们下次还来吗？" },
      { "speaker": "刘姥姥", "text": "……先回家吧。" },
      { "speaker": "旁白", "text": "出了荣府的门，风比来时更冷。可是心里，好像是暖的。" },
      { "speaker": "旁白", "text": "刘姥姥一进荣国府的故事，到这里就讲完了。可是她和贾府的来往，才刚开始。" }
    ],
    "nextId": "node_15",
    "hotspots": []
  },
  "node_15": {
    "bg": "assets/bg_end.png",
    "camera": "wide",
    "transition": "fade",
    "type": "settlement",
    "pages": [
      { "speaker": "旁白", "text": "一进门，你看见了一个完全不同的世界：他们的碗、他们的衣裳、他们的钟、他们的一顿饭。" },
      { "speaker": "旁白", "text": "你看不懂的东西，正是这个家族的力量，也是它后来败落的原因之一。" }
    ],
    "hotspots": []
  }
};







// ============================
// 词汇表
// ============================
const terms = {
  '连宗': '同姓或姻亲之间攀附宗族关系，以图亲近、求助。',
  '陪房': '旧时随小姐出嫁的仆人，属女方陪嫁，地位较高。',
  '倒厅': '四合院中坐南朝北、与正房相对的厅房。',
  '角门': '府邸侧面的旁门，供日常出入，非正门。',
  '太爷': '对守门人、差役等年长男子的尊称。',
  '纳福': '问候语，意思是享福、安好。',
  '姑太太': '对父亲姐妹的尊称，此处指王夫人。',
  '真佛儿': '比喻真正能做主的人。',
  '琏二奶奶': '王熙凤，荣国府的实际管家。',
  '内侄女儿': '妻子兄弟的女儿。',
  '周旋': '应酬、接待。',
  '心眼子': '心思、计谋。',
  '空子': '空闲、机会。',
  '影壁': '大门内遮挡视线的墙壁。',
  '通房大丫头': '地位最高、可伺候男主人的贴身丫头。',
  '绫罗': '轻薄华贵的丝织品。',
  '插金戴银': '身上戴着金银首饰。',
  '自鸣钟': '自己能响的西洋钟。',
  '金钟铜磬': '金属做的乐器，声音洪亮。',
  '摆饭': '摆放饭菜，准备吃饭。',
  '鸦雀不闻': '非常安静，一点声音也没有。',
  '昭君套': '冬天戴的貂鼠皮毛暖额。',
  '攒珠勒子': '额前镶着珠子的装饰带。',
  '刻丝': '一种精美的丝织工艺。',
  '洋绉': '一种外国进口的丝织品。',
  '辈数儿': '辈分。',
  '打嘴': '丢脸、让人笑话。',
  '空架子': '外表好看，内里空虚。',
  '炕屏': '炕上摆着的屏风。'
};

// ============================
// 状态
// ============================
const state = {
  currentNodeId: null,
  currentPageIndex: 0,
  renqing: 100,
  discoveredHotspots: new Set(),
  feedbackMode: false,
  lastFeedback: null,
  lastConvergeTo: null,
  prologueStep: -1
};

// ============================
// DOM 引用
// ============================
const stage = document.getElementById('stage');
const cameraRig = document.getElementById('camera-rig');
const bgLayer = document.getElementById('bg-layer');
const hotspotLayer = document.getElementById('hotspot-layer');
const transitionOverlay = document.getElementById('transition-overlay');
const portraitLayer = document.getElementById('portrait-layer');
const speakerPortrait = document.getElementById('speaker-portrait');
const choicePanel = document.getElementById('choice-panel');
const dialogBox = document.getElementById('dialog-box');
const dialogSpeaker = document.getElementById('dialog-speaker');
const dialogText = document.getElementById('dialog-text');
const dialogHint = document.getElementById('dialog-hint');
const hotspotCard = document.getElementById('hotspot-card');
const cardImage = document.getElementById('card-image');
const cardTitle = document.getElementById('card-title');
const cardSurface = document.getElementById('card-surface');
const cardUsage = document.getElementById('card-usage');
const cardCulture = document.getElementById('card-culture');
const cardSource = document.getElementById('card-source');
const cardClose = document.getElementById('card-close');
const manualPanel = document.getElementById('manual-panel');
const manualList = document.getElementById('manual-list');
const manualBtn = document.getElementById('manual-btn');
const manualCount = document.getElementById('manual-count');
const panelCount = document.getElementById('panel-count');
const closeManual = document.getElementById('close-manual');
const charsBtn = document.getElementById('chars-btn');
const charsPanel = document.getElementById('chars-panel');
const charsList = document.getElementById('chars-list');
const closeChars = document.getElementById('close-chars');
const progressEl = document.getElementById('progress');
const locationTitle = document.getElementById('location-title');
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
const prologueScreen = document.getElementById('prologue-screen');
const prologueBg = document.getElementById('prologue-bg');
const prologueTitle = document.getElementById('prologue-title');
const prologueText = document.getElementById('prologue-text');
const prologueExtra = document.getElementById('prologue-extra');
const prologueBtn = document.getElementById('prologue-btn');
const settlementScreen = document.getElementById('settlement-screen');
const settlementCount = document.getElementById('settlement-count');
const settlementRating = document.getElementById('settlement-rating');
const settlementList = document.getElementById('settlement-list');
const restartBtn = document.getElementById('restart-btn');
const tooltip = document.getElementById('tooltip');
const hpBar = document.getElementById('hp-bar');
const hpFill = document.getElementById('hp-fill');
const hpText = document.getElementById('hp-text');
const hpChange = document.getElementById('hp-change');
const coverAboutBtn = document.getElementById('cover-about-btn');
const coverRulesBtn = document.getElementById('cover-rules-btn');
const coverSaveBtn = document.getElementById('cover-save-btn');
const coverPanel = document.getElementById('cover-panel');
const coverPanelTitle = document.getElementById('cover-panel-title');
const coverPanelBody = document.getElementById('cover-panel-body');
const coverPanelClose = document.getElementById('cover-panel-close');

// ============================
// 工具函数
// ============================
function escapeHtml(text) {
  return text.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function wrapTerms(text) {
  let html = escapeHtml(text);
  const sortedTerms = Object.keys(terms).sort((a, b) => b.length - a.length);
  sortedTerms.forEach((term) => {
    const re = new RegExp(`(<span class="term"[^>]*>.*?<\\/span>)|(${escapeRegExp(term)})`, 'g');
    html = html.replace(re, (match, group1) => {
      return group1 || `<span class="term" data-term="${term}">${term}</span>`;
    });
  });
  return html;
}

function showTooltip(term, x, y) {
  if (!tooltip) return;
  tooltip.textContent = terms[term] || '暂无释义';
  tooltip.classList.remove('hidden');
  const left = Math.min(
    Math.max(x - 20, 10),
    stage.clientWidth - tooltip.offsetWidth - 10
  );
  const top = Math.max(y - tooltip.offsetHeight - 14, 10);
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}

function hideTooltip() {
  if (tooltip) tooltip.classList.add('hidden');
}

function updateCounts() {
  const count = state.discoveredHotspots.size;
  manualCount.textContent = `${count}/7`;
  panelCount.textContent = `${count}/7`;
}

function updateHP() {
  if (!hpFill || !hpText) return;
  const pct = Math.max(0, Math.min(100, state.renqing));
  hpFill.style.width = `${pct}%`;
  hpText.textContent = `人情 ${pct}`;
}

function showHPChange(cost, reason) {
  if (!hpChange) return;
  const sign = cost > 0 ? '+' : '';
  hpChange.textContent = `${sign}${-cost} 人情：${reason}`;
  hpChange.className = cost < 0 ? 'lose' : 'gain';
  hpChange.classList.add('show');
  setTimeout(() => {
    hpChange.classList.remove('show');
  }, 2200);
}

function renderManual() {
  manualList.innerHTML = '';
  const allHotspots = [];
  Object.values(storyData).forEach((node) => {
    (node.hotspots || []).forEach((h) => allHotspots.push(h));
  });
  allHotspots.forEach((h) => {
    const discovered = state.discoveredHotspots.has(h.id);
    const item = document.createElement('div');
    item.className = 'manual-item' + (discovered ? '' : ' undiscovered');
    item.innerHTML = `
      ${discovered && h.image ? `<img src="${h.image}" alt="${h.title}" style="width:100%;max-height:100px;object-fit:cover;border-radius:6px;margin-bottom:8px;border:1px solid rgba(160,130,90,0.3);">` : ''}
      <h4>${discovered ? h.title : '???'}</h4>
      <p>${discovered ? h.surface : '尚未发现这个文化细节。'}</p>
      ${discovered && h.usage ? `<p>用处：${h.usage}</p>` : ''}
      ${discovered && h.culture ? `<p>文化意思：${h.culture}</p>` : ''}
      ${discovered ? `<p class="source">${h.source}</p>` : ''}
    `;
    manualList.appendChild(item);
  });
}

function renderCharsPanel() {
  charsList.innerHTML = '';
  characters.forEach((c) => {
    const card = document.createElement('div');
    card.className = 'char-card';
    card.innerHTML = `
      <img src="${c.portrait}" alt="${c.name}" onerror="this.classList.add('load-error')">
      <div>
        <h4>${c.name}</h4>
        <p>${c.role}</p>
      </div>
    `;
    charsList.appendChild(card);
  });
}

function updateProgress(id) {
  if (!progressEl) return;
  if (id.startsWith('failure_')) {
    progressEl.textContent = '结局';
    return;
  }
  const num = parseInt(id.replace('node_', ''), 10);
  if (!isNaN(num)) {
    progressEl.textContent = `第 ${num} / 16 幕`;
  }
}

function showLocationTitle(id) {
  if (!locationTitle) return;
  const title = nodeTitles[id];
  if (!title) return;
  locationTitle.textContent = title;
  locationTitle.classList.add('show');
  setTimeout(() => {
    locationTitle.classList.remove('show');
  }, 2200);
}

// ============================
// 背景、镜头、立绘
// ============================
function setBackground(url) {
  if (bgLayer) {
    bgLayer.style.backgroundImage = `url(${url})`;
  }
}

function setCamera(zoom) {
  if (!cameraRig) return;
  cameraRig.classList.remove('zoom-wide', 'zoom-medium', 'zoom-focus');
  if (['wide', 'medium', 'focus'].includes(zoom)) {
    cameraRig.classList.add(`zoom-${zoom}`);
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function setPortrait(speaker) {
  if (!speakerPortrait) return;
  const src = portraitMap[speaker];
  const current = speakerPortrait.dataset.speaker;
  if (src) {
    if (current !== speaker) {
      speakerPortrait.classList.remove('show');
      setTimeout(() => {
        speakerPortrait.src = src;
        speakerPortrait.dataset.speaker = speaker;
        speakerPortrait.onload = () => {
          speakerPortrait.classList.add('show');
        };
        speakerPortrait.onerror = () => {
          speakerPortrait.classList.add('load-error');
        };
      }, 250);
    }
  } else {
    speakerPortrait.classList.remove('show');
    speakerPortrait.dataset.speaker = '';
  }
}

// ============================
// 热点
// ============================
function clearHotspots() {
  if (hotspotLayer) hotspotLayer.innerHTML = '';
}

function renderHotspots(hotspots) {
  clearHotspots();
  if (!hotspots || hotspots.length === 0) return;
  hotspots.forEach((h) => {
    const el = document.createElement('div');
    el.className = 'hotspot';
    el.style.left = `${h.x * 100}%`;
    el.style.top = `${h.y * 100}%`;
    el.style.width = `${(h.w || 0.1) * 100}%`;
    el.style.height = `${(h.h || 0.1) * 100}%`;
    el.title = h.title;
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      showHotspotCard(h);
    });
    hotspotLayer.appendChild(el);
  });
}

function showHotspotCard(hotspot) {
  state.discoveredHotspots.add(hotspot.id);
  updateCounts();
  renderManual();

  if (cardImage) {
    cardImage.src = hotspot.image || '';
    cardImage.style.display = hotspot.image ? 'block' : 'none';
  }
  cardTitle.textContent = hotspot.title;
  cardSurface.textContent = hotspot.surface;
  if (cardUsage) cardUsage.textContent = hotspot.usage || '';
  if (cardCulture) cardCulture.textContent = hotspot.culture || hotspot.deep || '';
  cardSource.textContent = '出处：' + hotspot.source;

  const cardWidth = Math.min(340, stage.clientWidth - 40);
  let left = hotspot.x * stage.clientWidth + 24;
  let top = hotspot.y * stage.clientHeight + 24;
  if (left + cardWidth > stage.clientWidth - 10) {
    left = hotspot.x * stage.clientWidth - cardWidth - 10;
  }
  if (top + 300 > stage.clientHeight - 10) {
    top = hotspot.y * stage.clientHeight - 300;
  }
  hotspotCard.style.left = `${Math.max(left, 10)}px`;
  hotspotCard.style.top = `${Math.max(top, 10)}px`;
  hotspotCard.style.width = `${cardWidth}px`;
  hotspotCard.classList.remove('hidden');
}

function hideHotspotCard() {
  hotspotCard.classList.add('hidden');
}

// ============================
// 选择与对话框
// ============================
function clearChoices() {
  if (choicePanel) choicePanel.innerHTML = '';
  if (choicePanel) choicePanel.classList.add('hidden');
}

function renderChoices(options) {
  clearChoices();
  if (!options || options.length === 0) return;
  choicePanel.classList.remove('hidden');
  options.forEach((opt) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = opt.text;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      selectOption(opt);
    });
    choicePanel.appendChild(btn);
  });
}

function selectOption(option) {
  const cost = option.renqingCost || 0;
  if (cost !== 0) {
    state.renqing -= cost;
    updateHP();
    showHPChange(-cost, option.renqingReason || '');
  }
  state.feedbackMode = true;
  state.lastFeedback = option.feedback;
  state.lastConvergeTo = option.nextId || getCurrentNode().convergeTo;
  renderFeedback();
}

function renderFeedback() {
  clearChoices();
  setPortrait('旁白');
  dialogSpeaker.textContent = '反馈';
  dialogText.innerHTML = wrapTerms(state.lastFeedback);
  dialogHint.textContent = '点击此处继续';
}

function showDialog(speaker, text, hint = '点击此处继续') {
  if (dialogSpeaker) dialogSpeaker.textContent = speaker;
  if (dialogText) dialogText.innerHTML = wrapTerms(text);
  if (dialogHint) dialogHint.textContent = hint;
  setPortrait(speaker);
  if (speakerPortrait) {
    if (speaker && speaker !== '旁白') {
      speakerPortrait.classList.add('speaking');
    } else {
      speakerPortrait.classList.remove('speaking');
    }
  }
}

function getCurrentNode() {
  return storyData[state.currentNodeId] || null;
}

function getCurrentPage() {
  const node = getCurrentNode();
  if (!node || !node.pages) return null;
  return node.pages[state.currentPageIndex] || null;
}

function renderCurrentPage() {
  const page = getCurrentPage();
  if (!page) return;
  showDialog(page.speaker, page.text);
}

async function advance() {
  if (state.feedbackMode) {
    state.feedbackMode = false;
    state.lastFeedback = null;
    const nextId = state.lastConvergeTo;
    state.lastConvergeTo = null;
    if (nextId) {
      await renderNode(nextId);
    }
    return;
  }

  const node = getCurrentNode();
  if (!node) return;

  if (node.type === 'settlement') {
    if (state.currentPageIndex < node.pages.length - 1) {
      state.currentPageIndex++;
      renderCurrentPage();
    } else {
      showSettlement();
    }
    return;
  }

  if (state.currentPageIndex < node.pages.length - 1) {
    state.currentPageIndex++;
    renderCurrentPage();
    return;
  }

  if (node.options && node.options.length > 0) {
    renderChoices(node.options);
  } else {
    const nextId = node.nextId || node.convergeTo;
    if (nextId) await renderNode(nextId);
  }
}

// ============================
// 节点渲染
// ============================
async function renderNode(id) {
  state.currentNodeId = id;
  state.currentPageIndex = 0;
  state.feedbackMode = false;
  state.lastFeedback = null;
  state.lastConvergeTo = null;

  const node = storyData[id];
  if (!node) {
    console.error('未知节点：', id);
    return;
  }

  hideHotspotCard();
  hideTooltip();
  clearChoices();

  // 分支节点不需要转场，直接跳转
  if (node.type === 'branch') {
    const nextId = node.condition() ? node.trueId : node.falseId;
    await renderNode(nextId);
    return;
  }

  // 电影式转场
  const mode = node.transition || 'fade';
  if (mode === 'focus-pull') {
    transitionOverlay && transitionOverlay.classList.add('focus-pull');
  }
  if (transitionOverlay) transitionOverlay.classList.add('active');
  if (mode === 'page-flip') {
    setTimeout(() => cameraRig && cameraRig.classList.add('turn'), 220);
  }
  await delay(900);

  // 黑场/翻页中途切换内容
  if (node.bg) setBackground(node.bg);
  if (node.camera) setCamera(node.camera);
  renderHotspots(node.hotspots || []);
  updateProgress(id);
  showLocationTitle(id);
  renderCurrentPage();

  if (mode === 'page-flip') {
    cameraRig && cameraRig.classList.remove('turn');
  }
  await delay(800);

  // 淡出黑场
  if (transitionOverlay) transitionOverlay.classList.remove('active');
  transitionOverlay && transitionOverlay.classList.remove('focus-pull');
  await delay(650);
}

// ============================
// 序幕
// ============================
function renderPrologue(step) {
  state.prologueStep = step;
  const data = prologueData[step];
  if (!data) {
    startGame();
    return;
  }

  startScreen.classList.add('hidden');
  settlementScreen.classList.add('hidden');
  prologueScreen.classList.remove('hidden');
  prologueTitle.textContent = data.title;
  prologueText.innerHTML = '';
  if (data.lines) {
    data.lines.forEach((line) => {
      const p = document.createElement('p');
      p.innerHTML = wrapTerms(line);
      prologueText.appendChild(p);
    });
  }
  if (data.tasks) {
    const ul = document.createElement('ul');
    ul.className = 'prologue-tasks';
    data.tasks.forEach((task) => {
      const li = document.createElement('li');
      li.innerHTML = wrapTerms(task);
      ul.appendChild(li);
    });
    prologueText.appendChild(ul);
  }
  prologueBtn.textContent = data.btn;

  if (data.bg === 'none') {
    prologueBg.style.backgroundImage = 'none';
    prologueBg.style.backgroundColor = '#0a0806';
  } else if (data.bg) {
    prologueBg.style.backgroundColor = 'transparent';
    prologueBg.style.backgroundImage = `url(${data.bg})`;
  }

  prologueExtra.innerHTML = '';
  if (data.extra && data.extra.length > 0) {
    data.extra.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'prologue-card';
      card.innerHTML = `
        ${item.portrait ? `<img src="${item.portrait}" alt="${item.title}" onerror="this.style.display='none'">` : ''}
        <div>
          <h4>${item.title}</h4>
          <p>${item.text}</p>
        </div>
      `;
      prologueExtra.appendChild(card);
    });
  }
}

function nextPrologue() {
  const nextStep = state.prologueStep + 1;
  if (prologueData[nextStep]) {
    renderPrologue(nextStep);
  } else {
    prologueScreen.classList.add('hidden');
    startGame();
  }
}

// ============================
// 结算
// ============================
function showSettlement() {
  settlementScreen.classList.remove('hidden');
  const node = getCurrentNode();
  const count = state.discoveredHotspots.size;
  const rq = state.renqing;
  let title = '文化手册结算';
  let rating = '';

  if (node && node.endingTitle) {
    title = node.endingTitle;
  }
  if (node && node.endingRating) {
    rating = node.endingRating;
  } else if (rq >= 100) {
    rating = '「人情练达」——你一句也没说错，银子拿到了，礼数也周全。这家人心里是认你的。';
  } else if (rq >= 80) {
    rating = '「说话得体」——你大体上守住了规矩，银子拿到了，但有几处还可以更圆滑。';
  } else if (rq >= 50) {
    rating = '「勉强过关」——你拿到了银子，可话说得磕磕绊绊，全仗周瑞家的帮衬。';
  } else {
    rating = '「狼狈而归」——你虽走到了最后，人情却已用尽。这二十两银子，拿得并不体面。';
  }

  settlementScreen.querySelector('h2').textContent = title;
  settlementCount.textContent = `你这一趟看见了 ${count}/7 个文化细节，人情值剩余 ${Math.max(0, rq)}。`;
  settlementRating.textContent = rating;

  settlementList.innerHTML = '';
  const allHotspots = [];
  Object.values(storyData).forEach((node) => {
    (node.hotspots || []).forEach((h) => allHotspots.push(h));
  });
  allHotspots.forEach((h) => {
    const discovered = state.discoveredHotspots.has(h.id);
    const item = document.createElement('div');
    item.className = 'manual-item' + (discovered ? '' : ' undiscovered');
    item.innerHTML = `
      ${discovered && h.image ? `<img src="${h.image}" alt="${h.title}" style="width:100%;max-height:100px;object-fit:cover;border-radius:6px;margin-bottom:8px;border:1px solid rgba(160,130,90,0.3);">` : ''}
      <h4>${discovered ? h.title : '???'}</h4>
      <p>${discovered ? h.surface : '尚未发现这个文化细节。'}</p>
      ${discovered && h.usage ? `<p>用处：${h.usage}</p>` : ''}
      ${discovered && h.culture ? `<p>文化意思：${h.culture}</p>` : ''}
    `;
    settlementList.appendChild(item);
  });
}

function resetGame() {
  state.currentNodeId = null;
  state.currentPageIndex = 0;
  state.renqing = 100;
  state.discoveredHotspots.clear();
  state.feedbackMode = false;
  state.lastFeedback = null;
  state.lastConvergeTo = null;
  state.prologueStep = -1;

  settlementScreen.classList.add('hidden');
  manualPanel.classList.add('hidden');
  charsPanel.classList.add('hidden');
  hotspotCard.classList.add('hidden');
  prologueScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');

  setPortrait('旁白');
  updateProgress('node_1');
  updateCounts();
  updateHP();
  renderManual();
}

async function startGame() {
  startScreen.classList.add('hidden');
  prologueScreen.classList.add('hidden');
  settlementScreen.classList.add('hidden');
  updateCounts();
  updateHP();
  renderManual();
  await renderNode('node_1');
}

// ============================
// 事件监听
// ============================
dialogBox.addEventListener('click', async (e) => {
  if (e.target.classList.contains('term')) {
    e.stopPropagation();
    const rect = e.target.getBoundingClientRect();
    const stageRect = stage.getBoundingClientRect();
    showTooltip(e.target.dataset.term, rect.left - stageRect.left, rect.top - stageRect.top);
    return;
  }
  hideTooltip();
  await advance();
});

stage.addEventListener('click', (e) => {
  if (e.target.classList.contains('term')) {
    e.stopPropagation();
    const rect = e.target.getBoundingClientRect();
    const stageRect = stage.getBoundingClientRect();
    showTooltip(e.target.dataset.term, rect.left - stageRect.left, rect.top - stageRect.top);
    return;
  }
  hideTooltip();
  if (!e.target.closest('#hotspot-card')) {
    hideHotspotCard();
  }
});

cardClose.addEventListener('click', (e) => {
  e.stopPropagation();
  hideHotspotCard();
});

manualBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  renderManual();
  manualPanel.classList.remove('hidden');
});

closeManual.addEventListener('click', (e) => {
  e.stopPropagation();
  manualPanel.classList.add('hidden');
});

charsBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  renderCharsPanel();
  charsPanel.classList.remove('hidden');
});

closeChars.addEventListener('click', (e) => {
  e.stopPropagation();
  charsPanel.classList.add('hidden');
});

// ============================
// 封面面板与存档
// ============================
function openCoverPanel(title, html) {
  if (coverPanelTitle) coverPanelTitle.textContent = title;
  if (coverPanelBody) coverPanelBody.innerHTML = html;
  if (coverPanel) coverPanel.classList.remove('hidden');
}

function closeCoverPanel() {
  if (coverPanel) coverPanel.classList.add('hidden');
}

function getSaveData() {
  return {
    version: 1,
    currentNodeId: state.currentNodeId,
    currentPageIndex: state.currentPageIndex,
    renqing: state.renqing,
    discoveredHotspots: Array.from(state.discoveredHotspots),
    prologueStep: state.prologueStep
  };
}

function saveGame() {
  if (!state.currentNodeId) {
    openCoverPanel('无法存档', '<p>还没有进入游戏，无法保存进度。请先点击「进入序幕」开始游戏。</p>');
    return;
  }
  try {
    localStorage.setItem('liulaolao_save', JSON.stringify(getSaveData()));
    openCoverPanel('存档成功', `
      <p>当前进度已保存到浏览器本地。</p>
      <p>下次打开游戏，在封面点击「游戏存档」即可读取。</p>
      <p><strong>已保存内容：</strong>当前节点、人情值、已收集的文化热点。</p>
    `);
  } catch (e) {
    openCoverPanel('存档失败', '<p>浏览器不允许保存本地数据，请检查隐私设置。</p>');
  }
}

function loadGame() {
  try {
    const raw = localStorage.getItem('liulaolao_save');
    if (!raw) {
      openCoverPanel('没有存档', '<p>目前没有找到存档。请先进入游戏并点击「游戏存档」保存进度。</p>');
      return;
    }
    const data = JSON.parse(raw);
    if (!data || !data.currentNodeId) {
      openCoverPanel('存档损坏', '<p>存档数据不完整，无法读取。</p>');
      return;
    }
    state.currentNodeId = data.currentNodeId;
    state.currentPageIndex = data.currentPageIndex || 0;
    state.renqing = typeof data.renqing === 'number' ? data.renqing : 100;
    state.discoveredHotspots = new Set(data.discoveredHotspots || []);
    state.prologueStep = data.prologueStep || -1;
    state.feedbackMode = false;
    state.lastFeedback = null;
    state.lastConvergeTo = null;
    updateCounts();
    updateHP();
    renderManual();
    closeCoverPanel();
    startScreen.classList.add('hidden');
    prologueScreen.classList.add('hidden');
    settlementScreen.classList.add('hidden');
    renderNode(state.currentNodeId);
  } catch (e) {
    openCoverPanel('读档失败', '<p>无法读取存档，可能是数据损坏。</p>');
  }
}

function renderSavePanel() {
  let info = '<p>暂无存档。</p>';
  try {
    const raw = localStorage.getItem('liulaolao_save');
    if (raw) {
      const data = JSON.parse(raw);
      const title = nodeTitles[data.currentNodeId] || data.currentNodeId;
      const date = new Date().toLocaleString('zh-CN');
      info = `<p><strong>存档节点：</strong>${title}</p><p><strong>人情值：</strong>${data.renqing}</p><p><strong>文化热点：</strong>${(data.discoveredHotspots || []).length}/7</p>`;
    }
  } catch (e) {}
  openCoverPanel('游戏存档', `
    ${info}
    <div style="display:flex;gap:12px;justify-content:center;margin-top:16px;">
      <button id="cover-save-action" type="button">保存当前进度</button>
      <button id="cover-load-action" type="button">读取存档</button>
    </div>
  `);
  setTimeout(() => {
    const saveAction = document.getElementById('cover-save-action');
    const loadAction = document.getElementById('cover-load-action');
    if (saveAction) saveAction.addEventListener('click', saveGame);
    if (loadAction) loadAction.addEventListener('click', loadGame);
  }, 0);
}

function renderAboutPanel() {
  openCoverPanel('游戏介绍', `
    <p>《刘姥姥一进荣国府》改编自《红楼梦》第六回。</p>
    <p>你扮演刘姥姥：一个六十多岁的乡下老太太，冬天家里揭不开锅，只好带着外孙板儿，去京城大户贾府求助。</p>
    <p>一路上你要学会「说话」——称呼对不对、时机对不对，都会影响你能不能进门、见到人、求到钱。</p>
    <p>点击画面上的文化热点，可以把不懂的物件收进「文化手册」，最后结算时看看你发现了多少细节。</p>
  `);
}

function renderRulesPanel() {
  openCoverPanel('规则说明', `
    <h3>基本操作</h3>
    <p>点击对话框或「点击此处继续」推进剧情。</p>
    <p>出现选项时，点击你认为最合适的回答。</p>
    <h3>人情值</h3>
    <p>屏幕上方有一条「人情」血条，满分 100。选错话会扣人情，选对话不扣。</p>
    <p>每次扣分时，画面会弹出原因，告诉你为什么这个选择不好。</p>
    <p>人情值降到一定界限，就会触发不同结局：进不了门、见不到周瑞家的、见不到凤姐、拿不到银子。</p>
    <h3>文化热点</h3>
    <p>画面里会出现带「!」的金色标记，点击可以查看物件解释，并收入右上角「文化手册」。不影响主线，但会影响结局评价。</p>
  `);
}

startBtn.addEventListener('click', () => {
  renderPrologue(0);
});

prologueBtn.addEventListener('click', () => {
  nextPrologue();
});

restartBtn.addEventListener('click', () => {
  resetGame();
});

coverAboutBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  renderAboutPanel();
});

coverRulesBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  renderRulesPanel();
});

coverSaveBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  renderSavePanel();
});

coverPanelClose.addEventListener('click', (e) => {
  e.stopPropagation();
  closeCoverPanel();
});

coverPanel.addEventListener('click', (e) => {
  if (e.target === coverPanel) closeCoverPanel();
});

// 初始化
updateCounts();
updateHP();
renderManual();
