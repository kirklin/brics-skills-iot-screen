import Mock from "mockjs";
import type { MockParams } from "./index.d";
import MockIndex from "./mock-index";

Mock.setup({
  timeout: 300,
});

const mocks: MockParams[] = MockIndex;

export function mockXHR() {
  mocks.forEach(({ url, type = "get", response }) => {
    Mock.mock(new RegExp(url), type, response);
  });
}
