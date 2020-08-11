import Action from "./Action";

/**
 * Subscribers can be subscribed to the ActionBus to be notified when a specific Action is published to the bus.
 */
abstract class Subscriber {
    /**
     * Run function called when the ActionBus this Subscriber is called to notifies this Subscriber of a new Action.
     * @param action {Action} The Action that caused this Subscriber to be notified.
     * @param args {Object[]} Arbitrary arguments provided by the ActionBus publisher.
     */
    abstract async run(action: Action, ... args: Object[]): Promise<void>
}

export default Subscriber

