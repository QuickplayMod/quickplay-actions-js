import Action from '../Action'
import {Buffer} from 'buffer'
import AliasedAction from "../../elements/AliasedAction";

/**
 * ID: 35
 * Order for the server to alter an AliasedAction in it's database. If the AliasedAction does not exist, it is created.
 * If the AliasedAction passed does not exist and is missing fields, the default is used. If no default is available,
 * then an error message is sent to the client.
 * This should be a protected action, only allowed for admins.
 *
 * Payload Order:
 * AliasedAction key
 * JSON serialized AliasedAction
 */
class AlterAliasedActionAction extends Action {

    static id = 35

    /**
     * Create a new AlterAliasedActionAction.
     * @param key {string} Key of the item the client is requesting to be altered.
     * @param newAliasedAction {AliasedAction} The new AliasedAction to replace at the key. Should not replace values
     * which are undefined.
     */
    constructor (key?: string, newAliasedAction?: AliasedAction) {
        super()
        this.id = 35

        // Don't add payload if the first payload item wasn't provided
        if(key == undefined) {
            return
        }

        this.addPayload(Buffer.from(key))
        this.addPayload(Buffer.from(JSON.stringify(newAliasedAction)))
    }
}

export default AlterAliasedActionAction
