import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface Finance {
    id: number
    type: 'income' | 'expense'
    amount: number
    reason: string
}

export const useFinanceStore = defineStore('finance', () => {
    const finances = ref<Finance[]>([])

    const addFinance = (type: 'income' | 'expense', amount: number, reason: string) => {
        const newFinance: Finance = {
            id: Date.now(),
            type,
            amount,
            reason
        };
        finances.value.push(newFinance);
    };

    const removeFinance = (index: number) => {
        finances.value.splice(index, 1);
    };

    const totalIncome = computed(() => {
        return finances.value
            .filter(Finance => Finance.type === 'income')
            .reduce((sum, Finance) => sum + Finance.amount, 0);
    });

    const totalExpenses = computed(() => {
        return finances.value
            .filter(Finance => Finance.type === 'expense')
            .reduce((sum, Finance) => sum + Finance.amount, 0);
    });

    const balance = computed(() => {
        return totalIncome.value - totalExpenses.value;
    });

    return {
        finances,
        addFinance,
        removeFinance,
        totalIncome,
        totalExpenses,
        balance
    };
}, 
{
    persist: {
        key: 'my-finance-store',
        storage: localStorage
    }
});
