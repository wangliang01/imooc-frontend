import { createApp, nextTick } from "vue";
// 传入一个组件配置
// 创建它的实例，并且将它挂载到body上
// 返回组件实例
function create(Component, props = {}) {
  // 创建 Vue 应用实例
  const app = createApp(Component, props);

  // 创建一个虚拟的根节点
  const container = document.createElement("div");

  // 挂载应用到虚拟根节点
  app.mount(container);

  // 等待 DOM 更新完成
  nextTick().then(() => {
    // 将虚拟根节点添加到文档中
    document.body.appendChild(container);

    // 返回一个包含移除方法的对象
    return {
      remove: () => {
        // 移除元素
        document.body.removeChild(container);
        // 销毁应用实例
        app.unmount();
      },
    };
  });
}

export default create;
