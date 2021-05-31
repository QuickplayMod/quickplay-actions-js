import Element from "./Element";
import ElementType from "./ElementType";

class Translation extends Element {
    /**
     * Language that this Translation belongs to
     */
    lang: string;
    /**
     * Value of the translation
     */
    value: string;

    constructor(key: string) {
        super(key, ElementType.TRANSLATION);
    }
}

export default Translation;
