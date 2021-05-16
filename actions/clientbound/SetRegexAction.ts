import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 54
 * Set a regex in the client with the provided key and value.
 *
 * Payload Order:
 * key
 * value
 */
class SetRegexAction extends Action {

    static id = 54

    /**
     * Create a new SetRegexAction.
     * @param key the key to save the regex under.
     * @param val The regular expression to save.
     */
    constructor (key?: string, val?: string) {
        super()
        this.id = 54

        // Don't add payload if the first payload item wasn't provided
        if(key == undefined) {
            return
        }

        this.addPayload(Buffer.from(key))
        this.addPayload(Buffer.from(val || ''))
    }
}

export default SetRegexAction
