import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 55
 * Order for the server to alter a regular expression in it's database. If the regex does not exist, it is created.
 * This should be a protected action, only allowed for admins.
 *
 * Payload Order:
 * Regex key
 * Regular expression
 */
class AlterRegexAction extends Action {

    static id = 55

    /**
     * Create a new AlterRegexAction.
     * @param key {string} Key of the item the client is requesting to be altered.
     * @param value {string} Value to associate with the provided key.
     */
    constructor (key?: string, value?: string) {
        super()
        this.id = 55

        // Don't add payload if the first payload item wasn't provided
        if(key == undefined) {
            return
        }

        this.addPayload(Buffer.from(key))
        this.addPayload(Buffer.from(value))
    }
}

export default AlterRegexAction
