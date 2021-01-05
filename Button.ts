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
     * The translation key for the scope of this Button to be displayed in party mode. E.g. while the main translation
     * key for this button may translate to "Solo", this will translate to "Bedwars" to indicate what type of game the
     * "Solo" applies to.
     * This field is optional and if not present (null or length == 0), just the translation key will be used.
     */
    partyModeScopeTranslationKey = ''
    /**
     * Whether or not this Button can be used/seen by anyone.
     */
    visible = false
    /**
     * Whether or not this Button can only be used/seen by Admins
     */
    adminOnly = false
    /**
     * Object containing regular expressions which are used to determine whether
     * this Button can be used/seen, given a player's location on Hypixel.
     *
     * Hypixel's /locraw command responds with a JSON object, containing different properties, which combined refer
     * to a player's location on the server. The properties in the JSON response of the /locraw command must match
     * all the properties of the same key in this object (assuming they exist and are strings) in order to be usable.
     *
     * Hypixel is the only server at the moment which supports advanced location detection like this.
     */
    hypixelLocrawRegex = {}
    /**
     * Regular expression that, assuming it is a non-empty string, must match the player's rank (not packageRank)
     * provided by the Hypixel API in order for this Button to be used/seen by the user.
     */
    hypixelRankRegex = ""
    /**
     * Regular expression that, assuming it is a non-empty string, must match the player's package rank
     * provided by the Hypixel API in order for this Button to be used/seen by the user.
     * Package rank includes newPackageRank and monthlyPackageRank.
     */
    hypixelPackageRankRegex = ""
    /**
     * Whether or not this Button should only be visible/usable by Hypixel build team members.
     */
    hypixelBuildTeamOnly = false
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
