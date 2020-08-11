import Action from "./Action";
import Subscriber from "./Subscriber";

/**
 * The ActionBus is the bus to allow different elements of your program to be notified when a new Action is published,
 * i.e. a new Action is received.
 */
class ActionBus {

    /**
     * The subscribed Subscribers. Map of Action IDs to all the Subscribers for that Action ID.
     */
    private subscribers : Record<number, Subscriber[]> = {}

    /**
     * Subscribe to listen for new Actions of a certain type to come in, at which point the passed Subscriber
     * will be notified. The same Subscriber can be subscribed multiple times.
     * @param action {typeof Action|number} The Action type to listen for. Can be an Action class, or an Action ID.
     * @param sub {Subscriber} The Subscriber to be notified when the specified Action is published.
     * @returns {boolean} True if the subscriber is added successfully, false otherwise.
     */
    public subscribe(action: typeof Action|number, sub: Subscriber) : boolean {
        if(action == null || sub == null) {
            return false
        }
        const actionId = typeof action == "number" ? action : action.id
        if(this.subscribers[actionId] == null) {
            this.subscribers[actionId] = []
        }
        this.subscribers[actionId].push(sub)
        return true
    }

    /**
     * Unsubscribe to stop listening for a type of Action on a specific Subscriber. Will only unsubscribe the Subscriber
     * once, so if the passed Subscriber was subscribed multiple times, you will need to unsubscribe multiple times.
     * @param action {typeof Action|number} The Action type to listen for. Can be an Action class, or an Action ID.
     * @param sub {Subscriber} The Subscriber to be notified when the specified Action is published.
     * @returns {boolean} True if the subscriber is added successfully, false otherwise. Returns true if the
     * passed Function was never subscribed to the passed Action in the first place.
     */
    public unsubscribe(action: typeof Action|number, sub: Subscriber) : boolean {
        if(action == null || sub == null) {
            return true
        }

        const actionId = typeof action == "number" ? action : action.id
        if(this.subscribers[actionId] == null) {
            return true
        }
        const index = this.subscribers[actionId].indexOf(sub)
        if(index < 0 || index >= this.subscribers[actionId].length) {
            return true
        }
        this.subscribers[actionId].splice(index, 1)

        return true
    }

    /**
     * Publish a new Action to this ActionBus, notifying all Subscribers subscribed to the type of Action published.
     * @param action {Action} The action to publish. Should be non-null.
     * @param args {Object[]} Arbitrary arguments to pass to the subscriber.
     */
    public async publish(action: Action, ... args: Object[]) : Promise<void> {
        if(action == null || this.subscribers[action.id] == null) {
            return
        }
        for(let i = 0; i < this.subscribers[action.id].length; i++) {
            await this.subscribers[action.id][i].run(action, ...args)
        }
    }
}

export default ActionBus
