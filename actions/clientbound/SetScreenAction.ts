import Action from '../Action'
import Screen from "../../Screen"
import {Buffer} from 'buffer'

/**
 * ID: 9
 * Set a screen in the client with the provided key and parameters.
 *
 * Payload Order:
 * key
 * screenType
 * availableOn JSON array
 * buttons JSON array of button keys
 * backButtonActions JSON array of aliased action keys which execute when the back button is pressed
 * translationKey
 * imageURL
 */
class SetScreenAction extends Action {

    static id = 9

    /**
     * Create a new SetScreenAction.
     * @param screen {Screen} Screen to be saved to the client.
     */
    constructor (screen?: Screen) {
        super()
        this.id = 9

        // Don't add payload if the first payload item wasn't provided
        if(screen == undefined) {
            return
        }

        this.addPayload(Buffer.from(screen.key))
        this.addPayload(Buffer.from(screen.screenType))
        this.addPayload(Buffer.from(JSON.stringify(screen.availableOn || [])))
        this.addPayload(Buffer.from(JSON.stringify(screen.buttons || [])))
        this.addPayload(Buffer.from(JSON.stringify(screen.backButtonActions || [])))
        this.addPayload(Buffer.from(screen.translationKey || ''))
        this.addPayload(Buffer.from(screen.imageURL || ''))
    }
}

export default SetScreenAction
