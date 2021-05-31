import Action from '../Action'
import Screen from "../../elements/Screen"
import {Buffer} from 'buffer'

/**
 * ID: 9
 * Set a screen in the client with the provided key and parameters.
 *
 * Payload Order:
 * key
 * screenType
 * availableOn JSON array
 * buttons JSON array of button keys
 * backButtonActions JSON array of aliased action keys which execute when the back button is pressed
 * translationKey
 * imageURL
 * visible
 * adminOnly
 * Hypixel locraw regex object in JSON
 * Hypixel rank regex string
 * Hypixel package rank regex string
 * Hypixel build team only
 * Hypixel build team admin only
 */
class SetScreenAction extends Action {

    static id = 9

    /**
     * Create a new SetScreenAction.
     * @param screen {Screen} Screen to be saved to the client.
     */
    constructor (screen?: Screen) {
        super()
        this.id = 9

        // Don't add payload if the first payload item wasn't provided
        if(screen == undefined) {
            return
        }

        this.addPayload(Buffer.from(screen.key))
        this.addPayload(Buffer.from(screen.screenType))
        this.addPayload(Buffer.from(JSON.stringify(screen.availableOn || [])))
        this.addPayload(Buffer.from(JSON.stringify(screen.buttons || [])))
        this.addPayload(Buffer.from(JSON.stringify(screen.backButtonActions || [])))
        this.addPayload(Buffer.from(screen.translationKey || ''))
        this.addPayload(Buffer.from(screen.imageURL || ''))
        const visibleBuf = Buffer.alloc(1)
        visibleBuf.writeUInt8(screen.visible ? 1 : 0, 0)
        this.addPayload(visibleBuf)
        const adminOnlyBuf = Buffer.alloc(1)
        adminOnlyBuf.writeUInt8(screen.adminOnly ? 1 : 0, 0)
        this.addPayload(adminOnlyBuf)
        this.addPayload(Buffer.from(JSON.stringify(screen.hypixelLocrawRegex || {})))
        this.addPayload(Buffer.from(screen.hypixelRankRegex || ""))
        this.addPayload(Buffer.from(screen.hypixelPackageRankRegex || ""))
        const hypixelBuildTeamOnly = Buffer.alloc(1)
        hypixelBuildTeamOnly.writeUInt8(screen.hypixelBuildTeamOnly ? 1 : 0, 0)
        this.addPayload(hypixelBuildTeamOnly)
        const hypixelBuildTeamAdminOnly = Buffer.alloc(1)
        hypixelBuildTeamAdminOnly.writeUInt8(screen.hypixelBuildTeamAdminOnly ? 1 : 0, 0)
        this.addPayload(hypixelBuildTeamAdminOnly)
        this.addPayload(Buffer.from(JSON.stringify(screen.settingsRegexes || {})))
    }
}

export default SetScreenAction
