import { computed } from "vue";
import * as zod from "zod";
import { toTypedSchema } from "@vee-validate/zod";

export const createFiedlValidationRules = (field) => {
    let validator = zod.string();
    if (field.rules.required) {
        validator = validator.min(
            1,
            field.messages.required || "Required field",
        );
    }
    if (field.rules.email) {
        validator = validator.email(field.messages.email || "Invalida email");
    }
    if (field.rules.min > 1) {
        validator = validator.min(
            field.rules.min,
            field.messages.min || `min value ${field.rules.min}`,
        );
    }
    if (field.rules.max > 1) {
        validator = validator.max(
            field.rules.max,
            field.messages.max || `max value ${field.rules.max}`,
        );
    }
    return computed(() => toTypedSchema(validator))
};
