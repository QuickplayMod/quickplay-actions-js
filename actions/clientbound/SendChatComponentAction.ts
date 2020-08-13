import Action from '../Action'
import Message from '../../chat-components/Message'
import {Buffer} from 'buffer'

/**
 * ID: 3
 * Send a Quickplay chat message to the client's chat.
 * Clients at the very least should be able to handle displaying a ChatComponent's text, but are not
 * required to be able to handle displaying colors/formatting or handling click/hover events.
 *
 * Payload Order:
 * Chat component
 */
class SendChatComponentAction extends Action {

    static id = 3

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
