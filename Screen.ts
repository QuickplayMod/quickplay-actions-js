const ScreenTypes = Object.freeze({
    IMAGES: 'IMAGES',
    BUTTONS: 'BUTTONS'
})

/**
 * A Screen in Quickplay is the highest level of user-facing objects. Screens are a set of Buttons which can be laid
 * out in a variety of ways. The client can display these Screens.
 */
class Screen {

    /**
     * The key of this Screen. Unique identifier, should probably be CAPS_SNAKE_CASE.
     */
    key: string
    /**
     * Array of server identifiers that this Screen is available on.
     */
    availableOn: string[] = []
    /**
     * Array of Button keys which this Screen renders. Button objects are not used directly to reduce Action
     * size, remove redundant references to Buttons, and due to the async nature in how Buttons are
     * handled by the client.
     */
    buttons: string[] = []
    /**
     * Type of Screen that this Screen is. Should be "IMAGES" or "BUTTONS", in most cases.
     * @see ScreenTypes
     */
    screenType = ''
    /**
     * The translation key for this Screen's title.
     */
    translationKey = ''
    /**
     * List of AliasedActions which should be executed when the client clicks this Screen's back button.
     */
    backButtonActions: string[] = []
    /**
     * The URL to the image which can be displayed at the top of this Screen.
     */
    imageURL = ''
    /**
     * Whether or not this Screen can be used/seen by anyone.
     */
    visible = false
    /**
     * Whether or not this Screen can only be used/seen by Admins
     */
    adminOnly = false
    /**
     * Object containing regular expressions which are used to determine whether
     * this Screen can be used/seen, given a player's location on Hypixel.
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
     * provided by the Hypixel API in order for this Screen to be used/seen by the user.
     */
    hypixelRankRegex = ""
    /**
     * Regular expression that, assuming it is a non-empty string, must match the player's package rank
     * provided by the Hypixel API in order for this Screen to be used/seen by the user.
     * Package rank includes newPackageRank and monthlyPackageRank.
     */
    hypixelPackageRankRegex = ""
    /**
     * Whether or not this Screen should only be visible/usable by Hypixel build team members.
     */
    hypixelBuildTeamOnly = false
    /**
     * Whether or not this Screen should only be visible/usable by Hypixel build team admins.
     */
    hypixelBuildTeamAdminOnly = false

    /**
     * Constructor
     * @param key {string} The key/ID of this item.
     * @param screenType {string} Type of screen that this screen is.
     */
    constructor (key: string, screenType: string) {
        this.key = key
        this.buttons = []
        this.screenType = screenType
        if(!ScreenTypes[this.screenType]) {
            throw new Error('Invalid screen type: Screen type must be IMAGES or BUTTONS.')
        }
        this.backButtonActions = []
    }

    /**
     * Deserialize a JSON-stringified Screen into an Screen object.
     * @param json {string} The JSON to deserialize.
     * @return {Promise<Screen>} The Screen that was deserialized.
     */
    static async deserialize(json: string) : Promise<Screen> {
        const obj = JSON.parse(json)
        const screen = new Screen(obj.key, obj.screenType)
        for(const prop in obj) {
            if(!obj.hasOwnProperty(prop)) {
                continue
            }
            screen[prop] = obj[prop]
        }
        return screen
    }

}

export default Screen
export {ScreenTypes}
