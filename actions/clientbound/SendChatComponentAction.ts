import Action from '../Action'
import Message from '../../chat-components/Message'
import {Buffer} from 'buffer'

/**
 * ID: 3
 * Send a Quickplay chat message to the client's chat.
 *
 * Payload Order:
 * Chat component
 */
class SendChatComponentAction extends Action {

    /**
	 * Create a new SendChatComponentAction.
	 * @param component {Message} Chat component message for the client to send
	 */
    constructor (component?: Message) {
        super()
        this.id = 3

        // Don't add payload if the first payload item wasn't provided
        if(component == undefined) {
            return
        }

        this.addPayload(Buffer.from(JSON.stringify(component)))
    }
}

export default SendChatComponentAction
