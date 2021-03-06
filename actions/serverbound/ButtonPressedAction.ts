import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 18
 * Received by the server when the client has pressed a Quickplay button, or a keybind which points to a button.
 *
 * Payload Order:
 * Button key
 */
class ButtonPressedAction extends Action {

    static id = 18

    /**
	 * Create a new ButtonPressedAction.
	 * @param buttonKey {string} The key of the button which was pressed
	 */
    constructor (buttonKey?: string) {
        super()
        this.id = 18

        // Don't add payload if the first payload item wasn't provided
        if(buttonKey == undefined) {
            return
        }

        this.addPayload(Buffer.from(buttonKey))
    }
}

export default ButtonPressedAction
