# 2022金砖国家技能发展与技术创新大赛厦门国际赛
# 物联网及其在智慧城市中的应用

## 任务书

### 一.说明
​	本赛项以智慧城市为背景，实现对城市中楼宇的温湿度、光照、空气质量、安全等进行监控。通过终端(PC机)应用开发，从嵌入式设备端收集传感器采集的数据，根据应用需求对数据进行处理。赛项提供物联节点给参赛者进行数据获取，物联网节点含若干传感器，物联节点能与物联网关进行无线通信。

​	赛项涵盖应用层设计、应用层开发，赛项提供的图片素材以及文档模版供开发者选用，请选手选择使用。

### 二.竞赛注意事项
​	提交的文档、原型、代码、可执行文件等资源内容中不能填写与选手相关的信息，如姓名和院校。如出现上述标记，成绩按照零分处理。

### 三.竞赛主题
​	本赛项面向产业主流技术，对接国际标准，旨在通过融合世界技能大赛的技术标准和规则要求，引领和促进教学改革，提升职业教育的国际化水平；通过完成一个完整的工作过程，使参赛选手、裁判、教师等相关人员，熟悉并掌握世界技能大赛的技术规范和技术标准，检验教学质量，达到“以赛促教”、“以赛促学”、“以赛促改”、“以赛促建”的目的。

​	本赛项以智慧城市为背景，重点考查参赛选手在物联网应用层开发实际工程项目中的综合分析能力、架构设计能力、编码能力、文档编写能力、数据分析能力、创意创新能力、产品测试和交付能力；展现物联网应用开发专业学生技能与风采，使教师和学生更全面的了解岗位需求，提升物联网应用开发专业人才培养质量和就业质量。同时培养选手的沟通与交流能力、抗压能力、6S规范等职业素质；激发学生的求知欲和教师的爱岗敬业的工匠精神，带动广大青年学生钻研技术、苦练技能、走技能成才之路。

### 四.竞赛试题
​	新冠肺炎疫情给城市管理和基础设施运营带来了前所未有的挑战。然而，大数据、人工智能、5G、物联网等新技术在疫情中的不同应用也让我们看到了数字化和智能化技术赋予城市管理的巨大潜力，为更多城市数字化应用场景的发展带来机遇。在中国推进“新基建”的大背景下，人工智能、物联网等先进技术与基础设施的深度融合，将大力推进电网、楼宇、交通等领域的转型升级，从而打造更高效、更具韧性，更宜居的智慧城市。

### 任务七：智慧交通
​	 智慧交通是在智能交通（简称：ITS）的基础上，在交通领域中充分运用物联网、云计算、互联网、人工智能、自动控制、移动互联网等技术，通过高新技术汇集交通信息，对交通管理、交通运输、公众出行等等交通领域全方面以及交通建设管理全过程进行管控支撑，使交通系统在区域、城市甚至更大的时空范围具备感知、互联、分析、预测、控制等能力，以充分保障交通安全、发挥交通基础设施效能、提升交通系统运行效率和管理水平，为通畅的公众出行和可持续的经济发展服务。

自我国加入世界贸易组织后，中国汽车市场大举对外开放，带动了国内汽车产业的迅速发展。国家又出台了一系列鼓励轿车进入家庭的政策。长期以公车消费为主的轿车市场转变为以私人消费为主。

机动车数量的快速增长导致了城市交通需求的迅速增加，而城市道路建设却远远赶不上交通需求的增长。

虽然城市道路等基础设施在加速建设，但在城市中，尤其是大城市、特大城市，道路资源增长远不能满足因机动车增长而导致的交通量增长。

随着城市经济的快速增长和城市化进程的加快，城市机动车数量呈快速增长的势头必然会造成道路交通流量猛增，交通拥挤和堵塞。

这里我们将模拟实现一套智慧交通实训系统解决城市居民对交通出行需求的日益增加和城市的建成区已有的道路资源的有限量之间的矛盾。

本系统模拟道路路口信号灯控制，并对闯红灯车辆进行记录，参赛选手自行设计整个系统，可借助互联网，原则上至少包含以下功能：

1. 界面同时不少于三辆小车在道路上自动循环行驶；

2. 路口交通信号灯不少于1个；

3. 路口信号灯以红黄绿进行变化，其中红绿灯不少于10秒，黄灯3秒；

4. 系统每辆车有默认车牌号（记录在系统中，界面不显示）；

5. 绿灯、黄灯情况下行驶过路口系统不记录任何情况；

6. 红灯情况下行驶过路口系统记录车辆车牌号；

7. 系统默认有管理员；

8. 管理员可以登录平台查看所有闯红灯信息，并手动设置红绿灯时长；

9. 通过物联网感知层设备实时获取道路环境信息，并显示，道路环境信息包含但不限于温度、湿度、光照、二氧化碳浓度、噪音、空气质量等。

两名参赛选手进行分工，协作完成智慧交通系统。

首先进行原型设计，设计完成后导出为html格式文件，确保点击导出文件夹中index.html文件可在浏览器中正常运行，将文件夹命名为“任务七智慧交通页面”，并将原文件命名为“任务七智慧交通原型.rp”，然后将源文件与html文件放在同一文件夹下，文件夹命名为“任务七智慧交通原型设计”；

其次进行需求文档编写和数据库设计，以智慧交通为背景，对任务进行理解、分析，并最终以提供的需求分析和数据库设计文档为模板，编写完整的需求分析和数据库设计文档；完成后将文件命名为“任务七数据库设计文档.docx，任务七需求文档.docx”,并创建文件夹命名为“任务七设计文档”，将两个设计文档放在其下；

接下完成测试用例设计，以测试驱动开发，以提供的测试用例文档为模板，编写完整的测试用例文档；完成后将文件命名为“任务七测试用例.xlsx”,并创建文件夹命名为“任务七测试用例”，将两个设计文档放在其下；

然后完成程序开发并录制操作视频，选手根据以上设计内容进行软件开发（语言、技术架构不限），完成功能后使用平台提供录屏工具对所有操作进行录制（视频时间控制在3分钟以内）；将源码文件夹命名为“任务七智慧交通系统源码”；导出数据库文件为sql格式，将文件命名为“任务七智慧交通系统.sql”；将功能实现后录制的操作视频命名为“任务七智慧交通系统.mp4”；将源码文件夹、sql文件以及功能实现视频放在同一文件夹下，文件夹命名为“任务七智慧交通系统开发”；

最后将以上所有文件放在“任务七智慧交通”文件夹下，将文件夹进行压缩，形成“任务七智慧交通.rar”在平台中提交。

## 项目介绍

#### 特性

- 项目需要全屏展示（按 F11）。

- 项目部分区域使用了全局注册方式，增加了打包体积，在实际运用中请使用 **按需引入**。

- 项目环境：Vue3、 Vite、 Echarts、 pnpm、 Node、 Axios、Mock.js。

- 请拉取 master 分支的代码，其余分支是开发分支。

- 在项目public目录下存放地图数据合集，根据地市编存放。

##  2、主要文件介绍

| 文件              | 作用/功能                                                    |
| ----------------- | ------------------------------------------------------------ |
| main.js           | 主目录文件，引入 Echart/DataV 等文件                         |
| utils             | 工具函数与 mixins 函数等                                     |
| views/ home.vue   | 项目主结构                                                   |
| views/其余文件    | 界面各个区域组件（按照位置来命名）                           |
| assets            | 静态资源目录，放置 logo 与背景图片                           |
| assets / css/     | 通用 CSS 文件，全局项目快捷样式调节                          |
| components/echart | 所有 echart 图表（按照位置来命名）                           |
| common/...        | 全局封装的 ECharts 和 flexible 插件代码（适配屏幕尺寸，可定制化修改） |
| api/api.js        | 接口封装文件                                                 |
| mock              | 模拟数据接口地址                                             |

###  

## 使用介绍

### 安装

```npm
pnpm install   
```
### 启动

```npm
pnpm run dev
```

### 取消mock模拟数据

```javascript
// src\main.ts文件
把下面两行代码注释掉就可以了
import { mockXHR } from "@/mock/index";
mockXHR()
```

## 

## 公用组件

### 自适应缩放组件

#### 注意

采用Scale方式，会自动给组件父元素添加overflow:hidden 

#### 使用

```vue
<script setup lang="ts">
import ScaleScreen from "scale-screen";
</script>

<template>
  <ScaleScreen width="1920" height="1080">
    <div>
      content
    </div>
  </ScaleScreen>
</template>
```

#### API

| 属性         | 说明                                                         | 类型                             | 默认值 |
| ------------ | ------------------------------------------------------------ | -------------------------------- | ------ |
| selfAdaption | 是否进行自适应                                               | Boolean                          | true   |
| width        | 大屏宽度                                                     | `Number` or `String`             | 1920   |
| height       | 大屏高度                                                     | `Number` or `String`             | 1080   |
| autoScale    | 自适应配置，配置为boolean类型时，为启动或者关闭自适应，配置为对象时，若x为true，x轴产生边距，y为true时，y轴产生边距，启用fullScreen时此配置失效 | Boolean or {x:boolean,y:boolean} | true   |
| delay        | 窗口变化防抖延迟时间                                         | Number                           | 500    |
| fullScreen   | 全屏自适应，启用此配置项时会存在拉伸效果，同时autoScale失效，非必要情况下不建议开启 | Boolean                          | false  |
| boxStyle     | 修改容器样式，如居中展示时侧边背景色，符合Vue双向绑定style标准格式 | Object                           | null   |
| wrapperStyle | 修改自适应区域样式，符合Vue双向绑定style标准格式             | Object                           | null   |


###  外边框

因为我的项目外边框几乎一样，还有title,所以封装了此组件。

根据自己需求更改，更换外边框（src\components\item-wrap\item-wrap.vue）下更换。

```vue
<ItemWrap
    title="我是title"
    >
       <div>Hello World</div>
</ItemWrap>
```

| 参数  | 描述 | 默认值 |  类型  | 可选值 |
| :---: | :--: | :----: | :----: | :----: |
| title | 标头 |   -    | string |   -    |

### CountUp 数字滚动

以下属性同 coutup.js 配置项（same as countup.js properties）

#### Props

| Name     | Type             | Default | Description                                                  |
| -------- | ---------------- | ------- | ------------------------------------------------------------ |
| endVal   | Number \| String | -       | 结束值                                                       |
| startVal | Number \| String | 0       | 起始值                                                       |
| duration | Number           | 2.5     | 动画时长，单位：秒                                           |
| options  | Object           | -       | [countUp.js](https://github.com/inorganik/countUp.js) options 配置项 |

以下为组件特有属性（extension properties）

| Name     | Type              | Default | Description                   |
| -------- | ----------------- | ------- | ----------------------------- |
| autoplay | Boolean           | true    | 是否自动计数                  |
| loop     | Boolean \| Number | false   | 循环次数，有限次数 / 无限循环 |
| delay    | Number            | 0       | loop 循环的间隔时间，单位：秒 |

#### 插槽（slots）

| Name   | Description |
| ------ | ----------- |
| prefix | 前缀        |
| suffix | 后缀        |

#### 事件（Events）

| Name      | Description                | return       |
| --------- | -------------------------- | ------------ |
| @init     | CountUp 实例初始化完成触发 | CountUp 实例 |
| @finished | 计数结束时触发             | -            |

#### countup.js 配置项说明
```ts
interface CountUpOptions {
  startVal?: number; // number to start at (0) 开始数值，默认 0
  decimalPlaces?: number; // number of decimal places (0) 小数点 位数
  duration?: number; // animation duration in seconds (2) 动画时长
  useGrouping?: boolean; // example: 1,000 vs 1000 (true) 是否使用千分位
  useEasing?: boolean; // ease animation (true) 是否开启动画过渡，默认动画函数为easeOutExpo
  smartEasingThreshold?: number; // smooth easing for large numbers above this if useEasing (999)
  smartEasingAmount?: number; // amount to be eased for numbers above threshold (333)
  separator?: string; // grouping separator (',') 千分位分隔符
  decimal?: string; // decimal ('.') 小数点分隔符
  // easingFn: easing function for animation (easeOutExpo) 动画函数
  easingFn?: (t: number, b: number, c: number, d: number) => number;
  formattingFn?: (n: number) => string; // this function formats result 格式化结果
  prefix?: string; // text prepended to result 数值前缀
  suffix?: string; // text appended to result 数值后缀
  numerals?: string[]; // numeral glyph substitution 数字符号替换 0 - 9，例如替换为 [a,b,c,d,e,f,g,h,i,j]
  enableScrollSpy?: boolean; // start animation when target is in view 在可视范围内才开始动画
  scrollSpyDelay?: number; // delay (ms) after target comes into view  目标进入可视范围内后的延迟时间(毫秒)
}
```

###  胶囊柱图

#### Props

|  属性  |   说明   |      类型       |          可选值           | 默认值  |
| :----: | :------: | :-------------: | :-----------------------: | :-----: |
|  data  |  柱数据  | `Array<Object>` |   [data属性](#data属性)   |  `[]`   |
| config | 基础配置 |     Object      | [config属性](#config属性) | `false` |

#### config属性

|   属性    |   说明   |      类型       | 可选值 | 默认值  |
| :-------: | :------: | :-------------: | :----: | :-----: |
|   unit    |   单位   |    `String`     |  ---   |  `''`   |
|  colors   |  环颜色  | `Array<String>` |  [1]   |   [2]   |
| showValue | 显示数值 |    `Boolean`    |  ---   | `false` |

#### 注释config注释

[1] 颜色支持`hex|rgb|rgba|颜色关键字`等四种类型。

[2] 默认配色为`['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293']`。

#### data属性

| 属性  |   说明   |   类型   | 可选值 | 默认值 |
| :---: | :------: | :------: | :----: | :----: |
| name  |  柱名称  | `String` |  ---   |  ---   |
| value | 柱对应值 | `Number` |  ---   |  ---   |

## 中间地图

### 南海显隐控制

 根据需求来，**修改此值请刷新页面**

```indexs/center-map.vue``` 文件中```isSouthChinaSea```变量 默认不显示南海(false),为```true```的时候显示南海

```
isSouthChinaSea:false,//默认不显示南海，改为true可显示南海
```

## 全局参数

### filter

监测数据项统一过滤，保留两位小数。

```vue
{{10.23123|montionFilter }}
```

