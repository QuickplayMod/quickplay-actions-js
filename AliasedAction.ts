import Action from './actions/Action'
import Resolver from './actions/Resolver'

/**
 * AliasedActions are the lowest level of user-facing elements. Actions are executed by the user and are simply
 * a wrapper to reference an Action and it's arguments.
 */
class AliasedAction {

    /**
     * The key of this AliasedAction. Should probably be CAPS_SNAKE_CASE.
     */
    key: string
    /**
     * Array of server identifiers that this AliasedAction is available on.
     */
    availableOn: string[] = []
    /**
     * The Action which this AliasedAction is a wrapper for.
     */
    action: Action
    /**
     * Whether or not this AliasedAction can be used/seen by anyone.
     */
    visible = false
    /**
     * Whether or not this Aliased Action can only be used/seen by Admins
     */
    adminOnly = false
    /**
     * Object containing regular expressions which are used to determine whether
     * this Aliased Action can be used/seen, given a player's location on Hypixel.
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
     * provided by the Hypixel API in order for this AliasedAction to be used/seen by the user.
     */
    hypixelRankRegex = ""
    /**
     * Regular expression that, assuming it is a non-empty string, must match the player's package rank
     * provided by the Hypixel API in order for this AliasedAction to be used/seen by the user.
     * Package rank includes newPackageRank and monthlyPackageRank.
     */
    hypixelPackageRankRegex = ""
    /**
     * Whether or not this AliasedAction should only be visible/usable by Hypixel build team members.
     */
    hypixelBuildTeamOnly = false
    /**
     * Whether or not this AliasedAction should only be visible/usable by Hypixel build team admins.
     */
    hypixelBuildTeamAdminOnly = false


    /**
     * Constructor
     * @param key {string} The key of this item.
     */
    constructor (key: string) {
        this.key = key

    }

    /**
     * Deserialize a JSON-stringified AliasedAction into an AliasedAction object.
     * @param json {string} The JSON to deserialize.
     * @return {Promise<AliasedAction>} The AliasedAction that was deserialized.
     */
    static async deserialize(json: string) : Promise<AliasedAction> {
        const obj = JSON.parse(json)
        const aa = new AliasedAction(obj.key)
        for(const prop in obj) {
            if(!obj.hasOwnProperty(prop)) {
                continue
            }
            aa[prop] = obj[prop]
        }
        aa.action = await Resolver.deserialize(JSON.stringify(obj.action))
        return aa
    }
}

export default AliasedAction
