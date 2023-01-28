// 处理路径传参
import Mock from "mockjs";
import { parameteUrl } from "@/utils/query-param";

function ArrSet(Arr: any[], id: string): any[] {
  const obj: any = {};
  return Arr.reduce((setArr, item) => {
    if (!obj[item[id]]) {
      obj[item[id]] = setArr.push(item);
    }
    return setArr;
  }, []);
}
/**
* @description: min ≤ r ≤ max  随机数
* @param {*} Min
* @param {*} Max
* @return {*}
*/
function RandomNumBoth(Min: any, Max: any) {
  const Range = Max - Min;
  const Rand = Math.random();
  // 四舍五入
  return Min + Math.round(Rand * Range);
}
// 左中
export default [
  {
    url: "/IoTScreen/countUserNum",
    type: "get",
    response: () => {
      const a = Mock.mock({
        success: true,
        data: {
          offlineNum: "@integer(00, 10)",
          alarmNum: "@integer(20, 50)",
          lockNum: "@integer(10, 20)",
          totalNum: 368,
        },
      });
      a.data.onlineNum = a.data.totalNum - a.data.offlineNum - a.data.lockNum - a.data.alarmNum;
      return a;
    },
  },
  {
    url: "/IoTScreen/countDeviceNum",
    type: "get",
    response: () => {
      const a = Mock.mock({
        success: true,
        data: {
          alarmNum: "@integer(1, 600)",
          offlineNum: "@integer(0, 30)",
          totalNum: 480,
        },
      });
      a.data.onlineNum = a.data.totalNum - a.data.offlineNum;
      return a;
    },
  },
  // 左下
  {
    url: "/IoTScreen/leftBottom",
    type: "get",
    response: () => {
      const a = Mock.mock({
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
      return a;
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
      // const num = Mock.mock({ "list|80": [{ value: "@integer(50,1000)", name: "@city()" }] }).list;
      //   console.log("rightCenter",num);
      const newNum: any = [];

      newNum.push({
        value: "27.8",
        name: "温度",
      }, {
        value: "34.7",
        name: "湿度",
      }, {
        value: "109",
        name: "光照",
      }, {
        value: "22",
        name: "空气质量",
      }, {
        value: "57.6",
        name: "噪音",
      }, {
        value: "736.6",
        name: "二氧化碳浓度",
      });
      // const arr = newNum.sort((a: any, b: any) => {
      //   return b.value - a.value;
      // });
      const a = {
        success: true,
        data: newNum,
      };
      return a;
    },
  },
  // 红灯数据提示图
  {
    url: "/IoTScreen/rightBottom",
    type: "get",
    response: () => {
      const a = Mock.mock({
        success: true,
        data: {
          "list|40": [{
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
          }],

        },
      });
      return a;
    },
  },
  {
    url: "/IoTScreen/installationPlan",
    type: "get",
    response: () => {
      const num = RandomNumBoth(26, 32);
      const a = Mock.mock({
        [`category|${num}`]: ["@city()"],
        [`barData|${num}`]: ["@integer(10, 100)"],
      });
      const lineData = [];
      const rateData = [];
      for (let index = 0; index < num; index++) {
        const lineNum = Mock.mock("@integer(0, 100)") + a.barData[index];
        lineData.push(lineNum);
        const rate = a.barData[index] / lineNum;
        rateData.push((rate * 100).toFixed(0));
      }
      a.lineData = lineData;
      a.rateData = rateData;
      return {
        success: true,
        data: a,
      };
    },
  },
  {
    url: "/IoTScreen/centerMap",
    type: "get",
    response: (options: any) => {
      const params = parameteUrl(options.url);
      // 不是中国的时候
      if (params.regionCode && !["china"].includes(params.regionCode)) {
        const a = Mock.mock({
          success: true,
          data: {
            "dataList|100": [
              {
                name: "@city()",
                value: "@integer(1, 1000)",
              },
            ],
            "regionCode": params.regionCode, // -代表中国
          },
        });
        return a;
      } else {
        const a = Mock.mock({
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
        // 去重
        a.data.dataList = ArrSet(a.data.dataList, "name");
        return a;
      }
    },
  },
];
