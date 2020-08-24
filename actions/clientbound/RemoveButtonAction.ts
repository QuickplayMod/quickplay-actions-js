import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 41
 * Remove a Button from the client. If the Button doesn't exist, nothing happens.
 *
 * Payload Order:
 * key
 */
class RemoveButtonAction extends Action {

    static id = 41

    /**
     * Create a new RemoveButtonAction.
     * @param buttonKey {string} Key of the Button to be removed, if it exists.
     */
    constructor (buttonKey?: string) {
        super()
        this.id = 41

        // Don't add payload if the first payload item wasn't provided
        if(buttonKey == undefined) {
            return
        }

        this.addPayload(Buffer.from(buttonKey))
    }
}

export default RemoveButtonAction
