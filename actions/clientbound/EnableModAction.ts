import Action from '../Action'

/**
 * ID: 1
 * Enable the Quickplay mod for the receiving client.
 */
class EnableModAction extends Action {

    static id = 1

    /**
	 * Create a new EnableModAction.
	 */
    constructor () {
        super()
        this.id = 1
    }
}

export default EnableModAction
