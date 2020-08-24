import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 42
 * Remove an Aliased Action from the client. If the Aliased Action doesn't exist, nothing happens.
 *
 * Payload Order:
 * key
 */
class RemoveAliasedActionAction extends Action {

    static id = 42

    /**
     * Create a new RemoveAliasedActionAction.
     * @param aliasedActionKey {string} Key of the AliasedAction to be removed, if it exists.
     */
    constructor (aliasedActionKey?: string) {
        super()
        this.id = 42

        // Don't add payload if the first payload item wasn't provided
        if(aliasedActionKey == undefined) {
            return
        }

        this.addPayload(Buffer.from(aliasedActionKey))
    }
}

export default RemoveAliasedActionAction
