// 模拟用户权限，实际项目中可以从全局状态管理或 API 获取
const userPermissions: string[] = ["view", "edit", "delete"];
// 定义并导出权限指令
import type { Directive } from "vue";

export const permissionDirective: Directive = {
  mounted(el: HTMLElement, binding) {
    const requiredPermission = binding.value as string;
    // 检查用户是否拥有指定权限
    if (!userPermissions.includes(requiredPermission)) {
      el.style.display = "none"; // 隐藏元素
    }
  },
};
