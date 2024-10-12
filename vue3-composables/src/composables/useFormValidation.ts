// useFormValidation.ts
import {  reactive } from 'vue';

// 定义单个字段的验证规则类型
interface ValidationRule {
  message: string;
  validator: (value: any) => boolean;
}

// 定义表单字段的状态类型
interface FieldState {
  value: any;
  error: string | null;
  touched: boolean;
}

// 定义验证函数的返回类型
interface UseFormValidation {
  fields: Record<string, FieldState>;
  addField: (fieldName: string, initialValue?: any) => void;
  addValidationRule: (fieldName: string, rule: ValidationRule) => void;
  validateField: (fieldName: string) => boolean;
  validateForm: () => boolean;
  updateFieldValue: (fieldName: string, value: any) => void;
  getFieldError: (fieldName: string) => string | null;
  getFieldValue: (fieldName: string) => any;
  resetForm: () => void;
}

export function useFormValidation(): UseFormValidation {
  const fields = reactive<Record<string, FieldState>>({});
  const rules = reactive<Record<string, ValidationRule[]>>({});

  // 初始化表单字段
  const addField = (fieldName: string, initialValue: any = '') => {
    if (!fields[fieldName]) {
      fields[fieldName] = {
        value: initialValue,
        error: null,
        touched: false,
      };
    }
  };

  // 添加验证规则
  const addValidationRule = (fieldName: string, rule: ValidationRule) => {
    if (!rules[fieldName]) {
      rules[fieldName] = [];
    }
    rules[fieldName].push(rule);
  };

  // 验证单个字段
  const validateField = (fieldName: string): boolean => {
    const field = fields[fieldName];
    const fieldRules = rules[fieldName];

    if (!fieldRules) return true;

    for (const rule of fieldRules) {
      if (!rule.validator(field.value)) {
        field.error = rule.message;
        return false;
      }
    }

    field.error = null;
    return true;
  };

  // 验证整个表单
  const validateForm = (): boolean => {
    let isValid = true;
    Object.keys(fields).forEach((fieldName) => {
      const valid = validateField(fieldName);
      if (!valid) isValid = false;
    });
    return isValid;
  };

  // 更新表单字段的值
  const updateFieldValue = (fieldName: string, value: any) => {
    if (fields[fieldName]) {
      fields[fieldName].value = value;
      fields[fieldName].touched = true;
    }
  };

  // 获取单个表单字段的错误信息
  const getFieldError = (fieldName: string): string | null => {
    return fields[fieldName]?.error || null;
  };

  // 获取单个表单字段的值
  const getFieldValue = (fieldName: string) => {
    return fields[fieldName]?.value;
  };

  // 重置表单
  const resetForm = () => {
    Object.keys(fields).forEach((fieldName) => {
      fields[fieldName].value = '';
      fields[fieldName].error = null;
      fields[fieldName].touched = false;
    });
  };

  return {
    fields,
    addField,
    addValidationRule,
    validateField,
    validateForm,
    updateFieldValue,
    getFieldError,
    getFieldValue,
    resetForm,
  };
}

// 预定义的验证规则函数
export const validationRules = {
  email: {
    message: '请输入有效的邮箱地址',
    validator: (value: string) => /\S+@\S+\.\S+/.test(value),
  },
  phone: {
    message: '请输入有效的手机号',
    validator: (value: string) => /^[1-9]\d{10}$/.test(value),
  },
  password: {
    message: '密码长度至少为6位',
    validator: (value: string) => value.length >= 6,
  },
  username: {
    message: '用户名必须包含3到16个字符',
    validator: (value: string) => /^[a-zA-Z0-9]{3,16}$/.test(value),
  },
};
