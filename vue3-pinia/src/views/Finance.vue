<template>
    <div>
        <h1>记账应用</h1>
        <div>
            <input v-model="newFinance.reason" placeholder="描述" />
            <input v-model.number="newFinance.amount" placeholder="金额" />
            <select v-model="newFinance.type">
                <option value="income">收入</option>
                <option value="expense">支出</option>
            </select>
            <button @click="addFinance">添加记录</button>
        </div>
        <div>
            <h2>交易记录</h2>
            <ul>
                <li v-for="(Finance, index) in financeStore.finances" :key="Finance.id">
                    <span>{{ Finance.reason }} - {{ Finance.amount }} ({{ Finance.type }})</span>
                    <button @click="removeFinance(index)">删除</button>
                </li>
            </ul>
        </div>

        <div>
            <h2>统计信息</h2>
            <p>总收入: {{ financeStore.totalIncome }}</p>
            <p>总支出: {{ financeStore.totalExpenses }}</p>
            <p>当前余额: {{ financeStore.balance }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFinanceStore } from '../stores/useFinance'

const financeStore = useFinanceStore()

const newFinance = ref({
    type: 'income',
    amount: 0,
    reason: ''
})

const addFinance = () => {
    if (newFinance.value.reason && newFinance.value.amount) {
        financeStore.addFinance(newFinance.value.type, newFinance.value.amount, newFinance.value.reason)
        newFinance.value.reason = ''
        newFinance.value.amount = 0
        newFinance.value.type = 'income'
    } else {
        alert('请填写完整的交易信息')
    }
}

const removeFinance = (index) => {
    financeStore.removeFinance(index)
}
</script>

<style scoped></style>