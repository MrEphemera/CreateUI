//引入组件
<<<<<<< HEAD
import Buttom from "./packages/buttom/index.js";

// 组件列表
const allcomponents=[
    Buttom
]

=======

// 组件列表
const allcomponents = [];
>>>>>>> gyp

//组件注册
const install = function (Vue) {
  // 遍历并注册所有组件
  allcomponents.map((component) => {
    Vue.component(component.name, component);
  });
};

//导出全局install
export default {
  install,
};
