import Element from "./Element";
import ElementType from "./ElementType";

class RegularExpression extends Element {
    /**
     * The actual regular expression associated with this RegularExpression object.
     */
    value: string

    constructor(key: string, value: string) {
        super(key, ElementType.REGULAR_EXPRESSION)
        this.value = value
    }
}

export default RegularExpression;
