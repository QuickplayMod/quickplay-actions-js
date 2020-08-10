import ChatComponent from './ChatComponent'

/**
 * Messages are a wrapper around chat components in Quickplay which control whether the chat component
 * should be surrounded by "separators", and whether the message should be sent regardless of whether or not
 * Quickplay is enabled.
 */
class Message {

    message: ChatComponent
    separators = false
    bypassEnabledSetting = false

    /**
     * Constructor
     * @param component {ChatComponent} The chat component to send.
     * @param separators {boolean} Whether separators should be added on top of and below the message.
     * @param bypassEnabledSetting {boolean} Whether the message should still send even if Quickplay is disabled.
     */
    constructor(component: ChatComponent, separators?: boolean, bypassEnabledSetting?: boolean) {
        if(!(component instanceof ChatComponent)) {
            throw new Error('Invalid component! Must be instance of ChatComponent')
        } else {
            this.message = component
            this.separators = separators
            this.bypassEnabledSetting = bypassEnabledSetting
        }
    }
}

export default Message
