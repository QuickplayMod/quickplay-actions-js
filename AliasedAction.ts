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
