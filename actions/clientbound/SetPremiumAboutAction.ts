import Action from '../Action'
import ChatComponent from '../../chat-components/ChatComponent'
import {Buffer} from 'buffer'

/**
 * ID: 16
 * Set the Quickplay Premium about text.
 *
 * Payload Order:
 * about text chat component
 */
class SetPremiumAboutAction extends Action {

    static id = 16

    /**
	 * Create a new SetPremiumAboutAction.
	 * @param component {ChatComponent} Chat component to set the about text to.
	 */
    constructor (component?: ChatComponent) {
        super()
        this.id = 16

        // Don't add payload if the first payload item wasn't provided
        if(component == undefined) {
            return
        }

        this.addPayload(Buffer.from(JSON.stringify(component)))
    }
}

export default SetPremiumAboutAction
