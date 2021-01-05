import Action from '../Action'
import Button from "../../Button"
import {Buffer} from 'buffer'

/**
 * ID: 8
 * Set a button in the client with the provided key and parameters.
 *
 * Payload Order:
 * key
 * availableOn JSON array
 * actions JSON array of aliased action keys
 * imageURL
 * translationKey
 * visible
 * adminOnly
 * Hypixel locraw regex object in JSON
 * Hypixel rank regex string
 * Hypixel package rank regex string
 * Hypixel build team only
 * Hypixel build team admin only
 * Visible in party mode state
 * Party mode scope translation key
 */
class SetButtonAction extends Action {

    static id = 8

    /**
     * Create a new SetButtonAction.
     * @param button {Button} Button to be saved to the client.
     */
    constructor (button?: Button) {
        super()
        this.id = 8

        // Don't add payload if the first payload item wasn't provided
        if(button == undefined) {
            return
        }

        this.addPayload(Buffer.from(button.key))
        this.addPayload(Buffer.from(JSON.stringify(button.availableOn || [])))
        this.addPayload(Buffer.from(JSON.stringify(button.actions || [])))
        this.addPayload(Buffer.from(button.imageURL || ''))
        this.addPayload(Buffer.from(button.translationKey || ''))
        const visibleBuf = Buffer.alloc(1)
        visibleBuf.writeUInt8(button.visible ? 1 : 0, 0)
        this.addPayload(visibleBuf)
        const adminOnlyBuf = Buffer.alloc(1)
        adminOnlyBuf.writeUInt8(button.adminOnly ? 1 : 0, 0)
        this.addPayload(adminOnlyBuf)
        this.addPayload(Buffer.from(JSON.stringify(button.hypixelLocrawRegex || {})))
        this.addPayload(Buffer.from(button.hypixelRankRegex || ""))
        this.addPayload(Buffer.from(button.hypixelPackageRankRegex || ""))
        const hypixelBuildTeamOnly = Buffer.alloc(1)
        hypixelBuildTeamOnly.writeUInt8(button.hypixelBuildTeamOnly ? 1 : 0, 0)
        this.addPayload(hypixelBuildTeamOnly)
        const hypixelBuildTeamAdminOnly = Buffer.alloc(1)
        hypixelBuildTeamAdminOnly.writeUInt8(button.hypixelBuildTeamAdminOnly ? 1 : 0, 0)
        this.addPayload(hypixelBuildTeamAdminOnly)
        const visibleInPartyMode = Buffer.alloc(1)
        visibleInPartyMode.writeUInt8(button.visibleInPartyMode ? 1 : 0, 0)
        this.addPayload(visibleInPartyMode)
        this.addPayload(Buffer.from(button.partyModeScopeTranslationKey || ''))
    }
}

export default SetButtonAction
