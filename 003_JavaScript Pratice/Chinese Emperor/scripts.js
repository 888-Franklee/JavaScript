const dynasties = {
    "夏朝": ["禹", "启", "太康", "仲康", "相", "少康", "杼", "槐", "芒", "泄", "不降", "扃", "廑", "孔甲", "皋", "发", "桀"],
    "商朝": ["成汤", "外丙", "仲壬", "太甲", "沃丁", "太庚", "小甲", "雍己", "太戊", "仲丁", "外壬", "河亶甲", "祖乙", "祖辛", "沃甲", "祖丁", "南庚", "阳甲", "盘庚", "小辛", "小乙", "武丁", "祖庚", "祖甲", "廪辛", "庚丁", "武乙", "文丁", "帝乙", "帝辛"],
    "西周": ["周武王", "周成王", "周康王", "周昭王", "周穆王", "周共王", "周懿王", "周孝王", "周夷王", "周厉王", "周宣王", "周幽王"],
    "东周": {
        "春秋": ["周平王", "周桓王", "周庄王", "周僖王", "周惠王", "周襄王", "周顷王", "周匡王", "周定王", "周简王", "周灵王", "周景王", "周悼王", "周敬王", "周元王"],
        "战国": ["周贞定王", "周哀王", "周思王", "周考王", "周威烈王", "周安王", "周烈王", "周显王", "周慎靓王", "周赧王"]
    },
    "秦朝": ["秦始皇", "秦二世"],
    "汉朝": {
        "西汉": ["汉高祖", "汉惠帝", "汉文帝", "汉景帝", "汉武帝", "汉昭帝", "汉宣帝", "汉元帝", "汉成帝", "汉哀帝", "汉平帝", "汉孺子婴"],
        "东汉": ["汉光武帝", "汉明帝", "汉章帝", "汉和帝", "汉殇帝", "汉安帝", "汉顺帝", "汉冲帝", "汉质帝", "汉桓帝", "汉灵帝", "汉少帝", "汉献帝"]
    },
    "三国": {
        "魏": ["魏文帝曹丕", "魏明帝曹叡", "魏齐王曹芳", "魏高贵乡公曹髦", "魏元帝曹奂"],
        "蜀汉": ["蜀汉昭烈帝刘备", "蜀汉后主刘禅"],
        "吴": ["吴大帝孙权", "吴会稽王孙亮", "吴景帝孙休", "吴末帝孙皓"]
    },
    "晋朝": {
        "西晋": ["晋武帝司马炎", "晋惠帝司马衷", "晋怀帝司马炽", "晋愍帝司马邺"],
        "东晋": ["晋元帝司马睿", "晋明帝司马绍", "晋成帝司马衍", "晋康帝司马岳", "晋穆帝司马聃", "晋哀帝司马丕", "晋废帝司马奕", "晋简文帝司马昱", "晋孝武帝司马曜", "晋安帝司马德宗", "晋恭帝司马德文"]
    },
    "南北朝": {
        "南朝": {
            "宋": ["宋武帝刘裕", "宋少帝刘义符", "宋文帝刘义隆", "宋孝武帝刘骏", "宋前废帝刘子业", "宋明帝刘彧", "宋后废帝刘昱", "宋顺帝刘准"],
            "齐": ["齐高帝萧道成", "齐武帝萧赜", "齐郁林王萧昭业", "齐海陵王萧昭文", "齐明帝萧鸾", "齐东昏侯萧宝卷", "齐和帝萧宝融"],
            "梁": ["梁武帝萧衍", "梁简文帝萧纲", "梁元帝萧绎", "梁敬帝萧方智"],
            "陈": ["陈武帝陈霸先", "陈文帝陈蒨", "陈废帝陈伯宗", "陈宣帝陈顼", "陈后主陈叔宝"]
        },
        "北朝": {
            "北魏": ["北魏道武帝拓跋珪", "北魏明元帝拓跋嗣", "北魏太武帝拓跋焘", "北魏南安王拓跋余", "北魏文成帝拓跋濬", "北魏献文帝拓跋弘", "北魏孝文帝拓跋宏", "北魏宣武帝元恪", "北魏孝明帝元诩", "北魏孝庄帝元子攸", "北魏节闵帝元恭", "北魏安定王元朗"],
            "东魏": ["东魏孝静帝元善见"],
            "西魏": ["西魏文帝元宝炬", "西魏废帝元钦"],
            "北齐": ["北齐文宣帝高洋", "北齐废帝高殷", "北齐孝昭帝高演", "北齐武成帝高湛", "北齐后主高纬", "北齐幼主高恒"],
            "北周": ["北周孝闵帝宇文觉", "北周明帝宇文毓", "北周武帝宇文邕", "北周宣帝宇文赟", "北周静帝宇文阐"]
        }
    },
    "隋朝": ["隋文帝杨坚", "隋炀帝杨广", "隋恭帝杨侑"],
    "唐朝": ["唐高祖李渊", "唐太宗李世民", "唐高宗李治", "武则天", "唐中宗李显", "唐睿宗李旦", "唐玄宗李隆基", "唐肃宗李亨", "唐代宗李豫", "唐德宗李适", "唐顺宗李诵", "唐宪宗李纯", "唐穆宗李恒", "唐敬宗李湛", "唐文宗李昂", "唐武宗李炎", "唐宣宗李忱", "唐懿宗李漼", "唐僖宗李儇", "唐昭宗李晔", "唐哀帝李柷"],
    "五代十国": {
        "五代": {
            "后梁": ["后梁太祖朱温", "后梁郢王朱友珪", "后梁末帝朱友贞"],
            "后唐": ["后唐庄宗李存勖", "后唐明宗李嗣源", "后唐愍帝李从厚", "后唐末帝李从珂"],
            "后晋": ["后晋高祖石敬瑭", "后晋出帝石重贵"],
            "后汉": ["后汉高祖刘知远", "后汉隐帝刘承祐"],
            "后周": ["后周太祖郭威", "后周世宗柴荣", "后周恭帝柴宗训"]
        },
        "十国": {
            "吴": ["杨行密", "杨渥", "杨隆演", "杨溥"],
            "前蜀": ["王建", "王衍"],
            "吴越": ["钱镠", "钱元瓘", "钱弘佐", "钱弘倧", "钱弘俶"],
            "闽": ["王审知", "王延翰", "王延钧", "王延羲", "王延政"],
            "楚": ["马殷", "马希声", "马希范", "马希广", "马希萼", "马希崇"],
            "南汉": ["刘隐", "刘䶮", "刘玢", "刘晟", "刘鋹"],
            "南唐": ["李昪", "李璟", "李煜"],
            "北汉": ["刘崇", "刘承钧", "刘继恩", "刘继元"],
            "南平": ["高季兴", "高从诲", "高保融", "高保勖", "高继冲"],
            "后蜀": ["孟知祥", "孟昶"]
        }
    },
    "宋朝": {
        "北宋": ["宋太祖赵匡胤", "宋太宗赵光义", "宋真宗赵恒", "宋仁宗赵祯", "宋英宗赵曙", "宋神宗赵顼", "宋哲宗赵煦", "宋徽宗赵佶", "宋钦宗赵桓"],
        "南宋": ["宋高宗赵构", "宋孝宗赵昚", "宋光宗赵惇", "宋宁宗赵扩", "宋理宗赵昀", "宋度宗赵禥", "宋恭宗赵显", "宋端宗赵昰", "宋帝昺赵昺"]
    },
    "元朝": ["元世祖忽必烈", "元成宗铁穆耳", "元武宗海山", "元仁宗爱育黎拔力八达", "元英宗硕德八剌", "元泰定帝也孙铁木儿", "元顺帝妥懽帖睦尔"],
    "明朝": ["明太祖朱元璋", "明惠宗朱允炆", "明成祖朱棣", "明仁宗朱高炽", "明宣宗朱瞻基", "明英宗朱祁镇", "明代宗朱祁钰", "明宪宗朱见深", "明孝宗朱祐樘", "明武宗朱厚照", "明世宗朱厚熜", "明穆宗朱载垕", "明神宗朱翊钧", "明光宗朱常洛", "明熹宗朱由校", "明思宗朱由检"],
    "清朝": ["清太祖努尔哈赤", "清太宗皇太极", "顺治帝福临", "康熙帝玄烨", "雍正帝胤禛", "乾隆帝弘历", "嘉庆帝颙琰", "道光帝旻宁", "咸丰帝奕詝", "同治帝载淳", "光绪帝载湉", "宣统帝溥仪"]
};

// 初始化下拉菜单
const dynastySelect = document.getElementById('dynasty-select');
for (const dynasty in dynasties) {
    const option = document.createElement('option');
    option.value = dynasty;
    option.text = dynasty;
    dynastySelect.add(option);
}

// 显示皇帝列表
dynastySelect.addEventListener('change', function () {
    const dynasty = dynastySelect.value;
    const emperorsList = document.getElementById('emperors-list');
    emperorsList.innerHTML = ''; // 清空之前的内容

    if (dynasty in dynasties) {
        const emperors = dynasties[dynasty];
        if (typeof emperors === 'object' && !Array.isArray(emperors)) { // 如果是分裂时期的朝代
            for (const subDynasty in emperors) {
                const subEmperors = emperors[subDynasty];
                const subDynastyHeader = document.createElement('h3');
                subDynastyHeader.innerText = subDynasty;
                emperorsList.appendChild(subDynastyHeader);

                if (typeof subEmperors === 'object' && !Array.isArray(subEmperors)) { // 如果还有更深层次的分裂
                    for (const subSubDynasty in subEmperors) {
                        const subSubEmperors = subEmperors[subSubDynasty];
                        const subSubDynastyHeader = document.createElement('h4');
                        subSubDynastyHeader.innerText = `  ${subSubDynasty}`;
                        emperorsList.appendChild(subSubDynastyHeader);

                        const subSubEmperorsList = document.createElement('ul');
                        subSubEmperors.forEach(emperor => {
                            const listItem = document.createElement('li');
                            listItem.innerText = emperor;
                            subSubEmperorsList.appendChild(listItem);
                        });
                        emperorsList.appendChild(subSubEmperorsList);
                    }
                } else {
                    const subEmperorsList = document.createElement('ul');
                    subEmperors.forEach(emperor => {
                        const listItem = document.createElement('li');
                        listItem.innerText = emperor;
                        subEmperorsList.appendChild(listItem);
                    });
                    emperorsList.appendChild(subEmperorsList);
                }
            }
        } else { // 如果是单一的朝代
            const emperorsListElement = document.createElement('ul');
            emperors.forEach(emperor => {
                const listItem = document.createElement('li');
                listItem.innerText = emperor;
                emperorsListElement.appendChild(listItem);
            });
            emperorsList.appendChild(emperorsListElement);
        }
    }
});
