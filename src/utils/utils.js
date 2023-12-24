function postRequest(body) {
    return {
        hostname: import.meta.env.VITE_HOSTNAME, 
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }
    }
};

async function validateInputAsync(value, rules) {
    const errors = [];
    for (const rule of rules) {
        const result = await Promise.resolve(rule(value));
        if (result !== true)
            errors.push(result);
    }
    return errors.length === 0 ? null : errors;
}

function validateInput(value, rules) {
    const errors = [];
    for (const rule of rules) {
        const result = rule(value);
        if (result !== true)
            errors.push(result);
    }
    return errors.length === 0 ? null : errors;
}

export default {
    postRequest,
    validateInput,
    validateInputAsync
};
