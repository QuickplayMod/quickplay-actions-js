/**
 * Buttons are the median user-facing element, between AliasedActions and Screens. Screens contain a list of
 * Buttons, and Buttons contain a list of AliasedActions.
 */
class Button {

    /**
     * The key of this Button. Unique identifier, should probably be CAPS_SNAKE_CASE
     */
    key: string
    /**
     * Array of server identifiers that this Button is available on.
     */
    availableOn: string[] = []
    /**
     * Array of AliasedAction keys which this Button executes. AliasedAction objects are not used directly to reduce
     * Action size, remove redundant references to AliasedActions, and due to the async nature in how AliasedActions are
     * handled by the client.
     */
    actions: string[] = []
    /**
     * The URL to the image which can be displayed as this Button, specifically on "IMAGES" type Screens.
     */
    imageURL = ''
    /**
     * The translation key for this Button's title.
     */
    translationKey = ''
    /**
     * Whether or not this Button can only be used/seen by Admins
     */
    adminOnly = false


    /**
     * Constructor
     * @param key {string} The key/ID of this item.
     */
    constructor (key: string) {
        this.key = key
    }

    /**
     * Deserialize a JSON-stringified Button into an Button object.
     * @param json {string} The JSON to deserialize.
     * @return {Promise<Button>} The Button that was deserialized.
     */
    static async deserialize(json: string) : Promise<Button> {
        const obj = JSON.parse(json)
        const btn = new Button(obj.key)
        for(const prop in obj) {
            if(!obj.hasOwnProperty(prop)) {
                continue
            }
            btn[prop] = obj[prop]
        }
        return btn
    }
}

export default Button
