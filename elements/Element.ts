import ElementType from "./ElementType";

class Element {

    /**
     * The key of this Button. Unique identifier, should probably be CAPS_SNAKE_CASE
     */
    key: string
    /**
     * ElementType signifying this type of Element.
     */
    elementType: ElementType

    /**
     * Constructor
     * @param key {string} The key/ID of this item.
     * @param elementType {ElementType} Type of this Element.
     */
    constructor (key: string, elementType: ElementType) {
        this.key = key
        this.elementType = elementType;
    }
}

export default Element
