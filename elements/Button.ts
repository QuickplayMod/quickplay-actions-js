/**
 * Buttons are the median user-facing element, between AliasedActions and Screens. Screens contain a list of
 * Buttons, and Buttons contain a list of AliasedActions.
 */
import PermissionBasedElement from "../elements/PermissionBasedElement";
import ElementType from "../elements/ElementType";

class Button extends PermissionBasedElement {

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
     * The translation key for the scope of this Button to be displayed in party mode. E.g. while the main translation
     * key for this button may translate to "Solo", this will translate to "Bedwars" to indicate what type of game the
     * "Solo" applies to.
     * This field is optional and if not present (null or length == 0), just the translation key will be used.
     */
    partyModeScopeTranslationKey = ''
    /**
     * Whether or not this Button should only be visible/usable by Hypixel build team admins.
     */
    hypixelBuildTeamAdminOnly = false
    /**
     * Whether this Button is visible in party mode, i.e. it can be chosen in the party mode editor / spinner
     */
    visibleInPartyMode = true


    /**
     * Constructor
     * @param key {string} The key/ID of this item.
     */
    constructor (key: string) {
        super(key, ElementType.BUTTON)
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
