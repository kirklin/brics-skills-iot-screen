// 处理路径传参
import Mock from "mockjs";
import { parameteUrl } from "~/utils/query-param";

// 生成不重复的对象数组
function removeDuplicates(arr: any[], id: string): any[] {
  const obj: any = {};
  return arr.reduce((setArr, item) => {
    if (!obj[item[id]]) {
      obj[item[id]] = setArr.push(item);
    }
    return setArr;
  }, []);
}

// 随机生成 min ≤ r ≤ max 的整数
function randomNumBoth(min: number, max: number): number {
  const range = max - min;
  const rand = Math.random();
  // 四舍五入
  return min + Math.round(rand * range);
}

export default [
  // 左上
  {
    url: "/IoTScreen/countUserNum",
    type: "get",
    response: () => {
      const data = Mock.mock({
        success: true,
        data: {
          alarmNum: "@integer(1, 600)",
          offlineNum: "@integer(0, 30)",
          totalNum: 480,
        },
      });
      data.data.onlineNum = data.data.totalNum - data.data.offlineNum;
      return data;
    },
  },
  // 左中
  {
    url: "/IoTScreen/leftBottom",
    type: "get",
    response: () => {
      const data = Mock.mock({
        success: true,
        data: {
          "list|20": [
            {
              "provinceName": "福建省",
              "cityName": "厦门市",
              "countyName": "金砖未来创意园",
              "createTime": "2022-11-05 @datetime('HH:mm:ss')",
              "deviceId": "6c512d754bbcd6d7cd86abce0e0cac58",
              "gatewayno|+1": 10000,
              "onlineState|1": [1],
            },
          ],
        },
      });
      return data;
    },
  },
  // 左下
  {
    url: "/IoTScreen/countDeviceNum",
    type: "get",
    response: () => {
      const data = Mock.mock({
        success: true,
        data: {
          alarmNum: "@integer(1, 600)",
          offlineNum: "@integer(0, 30)",
          totalNum: 480,
        },
      }).data;
      data.onlineNum = data.totalNum - data.offlineNum;
      return { success: true, data };
    },
  },
  // 右上
  {
    url: "/IoTScreen/alarmNum",
    type: "get",
    response: () => {
      const a = Mock.mock({
        success: true,
        data: {
          "dateList": ["2021-11", "2021-12", "2022-01", "2022-02", "2022-03", "2022-04"],
          "numList|6": [
            "@integer(0, 1000)",
          ],
          "numList2|6": [
            "@integer(0, 1000)",
          ],
        },
      });
      return a;
    },
  },
  // 右中
  {
    url: "/IoTScreen/rightCenter",
    type: "get",
    response: () => {
      const data = {
        success: true,
        data: [
          { value: "27.8", name: "温度" },
          { value: "34.7", name: "湿度" },
          { value: "109", name: "光照" },
          { value: "22", name: "空气质量" },
          { value: "57.6", name: "噪音" },
          { value: "736.6", name: "二氧化碳浓度" },
        ],
      };
      return data;
    },
  },
  // 红灯数据提示图
  {
    url: "/IoTScreen/rightBottom",
    type: "get",
    response: () => {
      const data = Mock.mock({
        success: true,
        data: {
          "list|40": [
            {
              "alertdetail": "有车辆闯红灯",
              "alertname|1": ["闯红灯警告", "车速过快报警"],
              "alertvalue": "@float(60, 200)",
              "createtime": "2022-11-05  @datetime('HH:mm:ss')",
              "deviceid": null,
              "gatewayno|+1": 10000,
              "phase": "A1",
              // 车牌信息
              "sbInfo|1": "@csentence(10,18)",
              "terminalno": "闽A·@integer(00000, 99999)",
              "provinceName": "福建省",
              "cityName": "厦门市",
              "countyName": "@county()",
            },
          ],
        },
      });
      return data;
    },
  },
  {
    url: "/IoTScreen/installationPlan",
    type: "get",
    response: () => {
      const num = randomNumBoth(26, 32);
      const data = Mock.mock({
        [`category|${num}`]: ["@city()"],
        [`barData|${num}`]: ["@integer(10, 100)"],
      });
      const lineData = [];
      const rateData = [];
      for (let i = 0; i < num; i++) {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        const lineNum = Mock.mock("@integer(0, 100)") + data.barData[i];
        lineData.push(lineNum);
        const rate = data.barData[i] / lineNum;
        rateData.push((rate * 100).toFixed(0));
      }
      data.lineData = lineData;
      data.rateData = rateData;
      return { success: true, data };
    },
  },
  {
    url: "/IoTScreen/centerMap",
    type: "get",
    response: (options: any) => {
      const params = parameteUrl(options.url);
      if (params.regionCode && !["china"].includes(params.regionCode)) {
        const data = Mock.mock({
          success: true,
          data: {
            "dataList|100": [
              {
                name: "@city()",
                value: "@integer(1, 1000)",
              },
            ],
            "regionCode": params.regionCode,
          },
        });
        return data;
      } else {
        const data = Mock.mock({
          success: true,
          data: {
            "dataList|12": [
              {
                name: "@province()",
                value: "@integer(1, 1100)",
              },
            ],
            "regionCode": "china",
          },
        });
        data.data.dataList = removeDuplicates(data.data.dataList, "name");
        return data;
      }
    },
  },
];
