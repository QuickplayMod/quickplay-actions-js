import Action from '../Action'
import Button from "../../Button"
import {Buffer} from 'buffer'

/**
 * ID: 8
 * Set a button in the client with the provided key and parameters.
 *
 * Payload Order:
 * key
 * availableOn JSON array
 * actions JSON array of aliased action keys
 * imageURL
 * translationKey
 * adminOnly
 */
class SetButtonAction extends Action {

    static id = 8

    /**
     * Create a new SetButtonAction.
     * @param button {Button} Button to be saved to the client.
     */
    constructor (button?: Button) {
        super()
        this.id = 8

        // Don't add payload if the first payload item wasn't provided
        if(button == undefined) {
            return
        }

        this.addPayload(Buffer.from(button.key))
        this.addPayload(Buffer.from(JSON.stringify(button.availableOn || [])))
        this.addPayload(Buffer.from(JSON.stringify(button.actions || [])))
        this.addPayload(Buffer.from(button.imageURL || ''))
        this.addPayload(Buffer.from(button.translationKey || ''))
        const adminOnlyBuf = Buffer.alloc(1)
        adminOnlyBuf.writeUInt8(button.adminOnly ? 1 : 0, 0)
        this.addPayload(adminOnlyBuf)
    }
}

export default SetButtonAction
