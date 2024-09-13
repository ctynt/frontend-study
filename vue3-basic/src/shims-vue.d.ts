/*
 * @Author: ctynt
 * @Date: 2024-09-12 18:17:47
 * @LastEditors: ctynt
 * @LastEditTime: 2024-09-12 18:17:51
 */
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
