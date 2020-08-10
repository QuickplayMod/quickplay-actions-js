
const ClickEventAction = Object.freeze({
    OPEN_URL: {
        allowedInChat: true,
        canonicalName: 'open_url'
    },
    OPEN_FILE: {
        allowedInChat: false,
        canonicalName: 'open_file'
    },
    RUN_COMMAND: {
        allowedInChat: true,
        canonicalName: 'run_command'
    },
    TWITCH_USER_INFO: {
        allowedInChat: false,
        canonicalName: 'twitch_user_info'
    },
    SUGGEST_COMMAND: {
        allowedInChat: true,
        canonicalName: 'suggest_command'
    },
    CHANGE_PAGE: {
        allowedInChat: true,
        canonicalName: 'change_page'
    }
})

interface ClickEventAction {
    allowedInChat: boolean, canonicalName: string
}

/**
 * Click events in Minecraft are fired when the user clicks on a ChatComponent with a given ClickEvent.
 */
class ClickEvent {

    /**
     * Canonical name of the action
     */
    action: string
    /**
     * Value of the action
     */
    value: string

    constructor(action: ClickEventAction, value: string) {
        this.setAction(action)
        this.setValue(value)
    }

    /**
     * Set the action that should be executed with this ClickEvent is fired.
     * @param action {ClickEventAction} new action
     */
    setAction(action: ClickEventAction) : ClickEvent {

        for(const loopAction in ClickEventAction) {
            if (ClickEventAction.hasOwnProperty(loopAction) && ClickEventAction[loopAction] === action) {
                this.action = action.canonicalName
                return this
            }
        }

        throw new Error('Invalid action! Action must be property of ClickEventAction')
    }

    /**
     * Set the value of this ClickEvent's ClickEventAction.
     * @param value {string} New click event action value
     */
    setValue(value: string) : void {
        this.value = String(value)
    }
}

export default ClickEvent
export {ClickEventAction}
