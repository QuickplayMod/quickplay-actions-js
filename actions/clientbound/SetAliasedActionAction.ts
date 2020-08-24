import Action from '../Action'
import AliasedAction from "../../AliasedAction"
import {Buffer} from 'buffer'

/**
 * ID: 7
 * Set an aliased action in the client with the provided key and parameters.
 *
 * Payload Order:
 * key
 * availableOn JSON array
 * The Action built as normal
 * adminOnly
 */
class SetAliasedActionAction extends Action {

    static id = 7

    /**
     * Create a new SetAliasedActionAction.
     * @param aliasedAction {AliasedAction} Aliased action to be saved to the client.
     */
    constructor (aliasedAction?: AliasedAction) {
        super()
        this.id = 7

        // Don't add payload if the first payload item wasn't provided
        if(aliasedAction == undefined) {
            return
        }

        this.addPayload(Buffer.from(aliasedAction.key))
        this.addPayload(Buffer.from(JSON.stringify(aliasedAction.availableOn || [])))
        this.addPayload(aliasedAction.action.build())
        const adminOnlyBuf = Buffer.alloc(1)
        adminOnlyBuf.writeUInt8(aliasedAction.adminOnly ? 1 : 0, 0)
        this.addPayload(adminOnlyBuf)
    }
}

export default SetAliasedActionAction
