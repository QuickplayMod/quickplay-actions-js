import Action from "./Action";

/**
 * The ActionBus is the bus to allow different elements of your program to be notified when a new Action is published,
 * i.e. a new Action is received.
 */
class ActionBus {

    /**
     * The subscribed functions. Map of Action IDs to all the subscribed Functions for that Action ID.
     */
    private subscribers : Record<number, Function[]> = {}

    /**
     * Subscribe to listen for new Actions of a certain type to come in, at which point the passed function
     * will be called. The same Function can be subscribed multiple times.
     * @param action {typeof Action|number} The Action type to listen for. Can be an Action class, or an Action ID.
     * @param fn {Function} The function to be called when the Action is received. Should be non-null. Should take
     * one argument, which is the Action.
     * @returns {boolean} True if the subscriber is added successfully, false otherwise.
     */
    public subscribe(action: typeof Action|number, fn: Function) : boolean {
        if(action == null || fn == null) {
            return false
        }
        const actionId = typeof action == "number" ? action : action.id
        if(this.subscribers[actionId] == null) {
            this.subscribers[actionId] = []
        }
        this.subscribers[actionId].push(fn)
        return true
    }

    /**
     * Unsubscribe to stop listening for a type of Action on a specific Function. Will only unsubscribe the Function
     * once, so if the passed Function was subscribed multiple times, you will need to unsubscribe multiple times.
     * @param action {typeof Action|number} The Action type to listen for. Can be an Action class, or an Action ID.
     * @param fn {Function} The function to be called when the Action is received. Should be non-null. Should take
     * one argument, which is the Action.
     * @returns {boolean} True if the subscriber is added successfully, false otherwise. Returns true if the
     * passed Function was never subscribed to the passed Action in the first place.
     */
    public unsubscribe(action: typeof Action|number, fn: Function) : boolean {
        if(action == null || fn == null) {
            return true
        }

        const actionId = typeof action == "number" ? action : action.id
        if(this.subscribers[actionId] == null) {
            return true
        }
        const index = this.subscribers[actionId].indexOf(fn)
        if(index < 0 || index >= this.subscribers[actionId].length) {
            return true
        }
        this.subscribers[actionId].splice(index, 1)

        return true
    }

    /**
     * Publish a new Action to this ActionBus, notifying all Functions subscribed to the type of Action published.
     * @param action {Action} The action to publish. Should be non-null.
     */
    public publish(action: Action) : void {
        if(action == null || this.subscribers[action.id] == null) {
            return
        }
        for(let i = 0; i < this.subscribers[action.id].length; i++) {
            this.subscribers[action.id][i](action)
        }
    }
}

export default ActionBus
