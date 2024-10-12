import { ref } from "vue";

export function useCounter(initValue = 0 ) {
    const count = ref<number>(initValue);

    const increatment = () => {
        count.value++;
    }

    const decreatment = () => {
        count.value--;
    }

    const reset = () => {
        count.value = initValue;
    }
    
    return {
        count,increatment,decreatment,reset
    }
}