import Action from '../Action'
import {Buffer} from 'buffer'
import RegularExpression from "../../elements/RegularExpression";

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
     * @param regex {RegularExpression} The RegularExpression to set, with key / value pair.
     */
    constructor (regex?: RegularExpression) {
        super()
        this.id = 54

        // Don't add payload if the first payload item wasn't provided
        if(regex == undefined) {
            return
        }

        this.addPayload(Buffer.from(regex.key))
        this.addPayload(Buffer.from(regex.value || ''))
    }
}

export default SetRegexAction
