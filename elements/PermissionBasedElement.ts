import Element from "./Element";
import ElementType from "./ElementType";

class PermissionBasedElement extends Element {

    /**
     * Array of server identifiers that this Element is available on.
     */
    availableOn: string[] = []
    /**
     * Whether or not this Element can be used/seen by anyone.
     */
    visible = false
    /**
     * Whether or not this Element can only be used/seen by Admins
     */
    adminOnly = false
    /**
     * Object containing regular expressions which are used to determine whether
     * this Element can be used/seen, given a player's location on Hypixel.
     *
     * Hypixel's /locraw command responds with a JSON object, containing different properties, which combined refer
     * to a player's location on the server. The properties in the JSON response of the /locraw command must match
     * all the properties of the same key in this object (assuming they exist and are strings) in order to be usable.
     *
     * Hypixel is the only server at the moment which supports advanced location detection like this.
     */
    hypixelLocrawRegex = {}
    /**
     * Regular expression that, assuming it is a non-empty string, must match the player's rank (not packageRank)
     * provided by the Hypixel API in order for this Element to be used/seen by the user.
     */
    hypixelRankRegex = ""
    /**
     * Regular expression that, assuming it is a non-empty string, must match the player's package rank
     * provided by the Hypixel API in order for this Element to be used/seen by the user.
     * Package rank includes newPackageRank and monthlyPackageRank.
     */
    hypixelPackageRankRegex = ""
    /**
     * Whether or not this Element should only be visible/usable by Hypixel build team members.
     */
    hypixelBuildTeamOnly = false
    /**
     * Whether or not this Element should only be visible/usable by Hypixel build team admins.
     */
    hypixelBuildTeamAdminOnly = false

    /**
     * Constructor
     * @param key {string} The key/ID of this item.
     * @param elementType {ElementType} Type of this Element.
     */
    constructor (key: string, elementType: ElementType) {
        super(key, elementType);
    }
}

export default PermissionBasedElement;
