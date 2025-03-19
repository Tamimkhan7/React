import { Children } from "react";

class context {
    //se jehetu akta value dey se value ta receive korar jonno akta constructor lagbe, amra oita use korbo
    constructor(value) {
        this.value = value;
    }

    // provider
    //app function a jei provider value amake dey oita ami rekhe dilam and provider ar modde akta children ace oita ami rekhe dilam amar children value ar modde

    provider = ({ Children, value }) => {
        // ami oi app ar provider ar modde jei value ta ace oita ami amar ai contest class ar constructor value modde store kore rekhe dilam
        this.value = value;
        // finally ami children ke pathai dilam
        return Children;
    }

    consumer = ({ Children }) => Children(this.value);
}

function createContext(value = null) {
    // create context class object for excessing context class
    const context = new context(value);
    return {
        // context class diye ami provider ke call diye or value excess korteci, similar for consume 
        provider: context.provider,
        consumer: context.consumer,
    };
}

export default createContext;