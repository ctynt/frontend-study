// 共享数据仓库
import { defineStore } from "pinia";

// 定义CounterState的接口
interface CounterState {
    // 存储计数器的值
    count: number;
}

// 定义一Store,名为counter
export const useCounterStore = defineStore('counter', {
    // Stete: 定义存储的数据,一个函数
    state: (): CounterState => ({
        count: 0,
    }),
    // Getters: 计算属性
    getters: {
        doubleCounter: (state: CounterState): number => state.count * 2,
    },
    // Actions: 定义修改State的方法
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
    },
});