import Action from '../Action'

/**
 * ID: 5
 * Reset the client's configuration. Use sparingly.
 */
class ResetConfigAction extends Action {

    static id = 5

    /**
	 * Create a new ResetConfigAction.
	 */
    constructor () {
        super()
        this.id = 5
    }
}

export default ResetConfigAction
