import { Children } from "react";

class context {
    constructor(value) {
        this.value = value;
    }

    // provider

    provider = ({ Children, value }) => {
        this.value = value;
        return Children;
    }
    consumer = ({ Children }) => Children(this.value);
}

function createContext(value = null) {
    const context = new context(value);
    return {
        provider: context.provider,
        consumer: context.consumer,
    };
}

export default createContext;