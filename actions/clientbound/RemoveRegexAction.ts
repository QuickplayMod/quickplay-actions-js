import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 57
 * Remove a regular expression from the client. If the regex doesn't exist, nothing happens.
 *
 * Payload Order:
 * key
 */
class RemoveRegexAction extends Action {

    static id = 57

    /**
     * Create a new RemoveRegexAction.
     * @param key {string} Key of the regex to be removed, if it exists.
     */
    constructor (key?: string) {
        super()
        this.id = 57

        // Don't add payload if the first payload item wasn't provided
        if(key == undefined) {
            return
        }

        this.addPayload(Buffer.from(key))
    }
}

export default RemoveRegexAction
