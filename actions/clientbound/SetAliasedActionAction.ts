import Action from '../Action'
import AliasedAction from "../../elements/AliasedAction"
import {Buffer} from 'buffer'

/**
 * ID: 7
 * Set an aliased action in the client with the provided key and parameters.
 *
 * Payload Order:
 * key
 * availableOn JSON array
 * The Action built as normal
 * visible
 * adminOnly
 * Hypixel locraw regex object in JSON
 * Hypixel rank regex string
 * Hypixel package rank regex string
 * Hypixel build team only
 * Hypixel build team admin only
 */
class SetAliasedActionAction extends Action {

    static id = 7

    /**
     * Create a new SetAliasedActionAction.
     * @param aliasedAction {AliasedAction} Aliased action to be saved to the client.
     */
    constructor (aliasedAction?: AliasedAction) {
        super()
        this.id = 7

        // Don't add payload if the first payload item wasn't provided
        if(aliasedAction == undefined) {
            return
        }

        this.addPayload(Buffer.from(aliasedAction.key))
        this.addPayload(Buffer.from(JSON.stringify(aliasedAction.availableOn || [])))
        this.addPayload(aliasedAction.action.build())
        const visibleBuf = Buffer.alloc(1)
        visibleBuf.writeUInt8(aliasedAction.visible ? 1 : 0, 0)
        this.addPayload(visibleBuf)
        const adminOnlyBuf = Buffer.alloc(1)
        adminOnlyBuf.writeUInt8(aliasedAction.adminOnly ? 1 : 0, 0)
        this.addPayload(adminOnlyBuf)
        this.addPayload(Buffer.from(JSON.stringify(aliasedAction.hypixelLocrawRegex || {})))
        this.addPayload(Buffer.from(aliasedAction.hypixelRankRegex || ""))
        this.addPayload(Buffer.from(aliasedAction.hypixelPackageRankRegex || ""))
        const hypixelBuildTeamOnly = Buffer.alloc(1)
        hypixelBuildTeamOnly.writeUInt8(aliasedAction.hypixelBuildTeamOnly ? 1 : 0, 0)
        this.addPayload(hypixelBuildTeamOnly)
        const hypixelBuildTeamAdminOnly = Buffer.alloc(1)
        hypixelBuildTeamAdminOnly.writeUInt8(aliasedAction.hypixelBuildTeamAdminOnly ? 1 : 0, 0)
        this.addPayload(hypixelBuildTeamAdminOnly)
        this.addPayload(Buffer.from(JSON.stringify(aliasedAction.settingsRegexes || {})))
    }
}

export default SetAliasedActionAction
