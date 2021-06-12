import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 28
 * Finalize authentication by sending the client a session token and when this session expires. Also sends
 * information about this user's account and their Premium state.
 *
 * Payload Order:
 * Session token
 * Session expiration timestamp
 * Minecraft UUID
 * Discord ID, or empty string if non-existent
 * isAdmin boolean
 * isPremium boolean
 * Premium expiration timestamp, or 0 if user has no premium.
 * Hypixel rank
 * Hypixel package rank (combined packageRank,newPackageRank,monthlyPackageRank)
 * Hypixel build team state
 * Hypixel build team admin state
 */
class AuthCompleteAction extends Action {

    static id = 28

    /**
     * Create a new AuthCompleteAction.
     * @param sessionToken {string} Session token to send.
     * @param sessionExpiration {Date} Datetime at which this session expires.
     * @param mcUuid {string} Minecraft UUID associated with this user's account.
     * @param discordId {string} Discord ID associated with this user's account.
     * @param isAdmin {boolean} Whether this user has Admin permissions.
     * @param isPremium {boolean} Whether this user has a Premium subscription active.
     * @param premiumExpiration {Date} Datetime of when this user's Premium expires, or null if the user has no subscription.
     * @param hypixelRank {string} Hypixel staff rank in the form of e.g. HELPER, ADMIN, YOUTUBER, etc.
     * @param hypixelPackageRank Hypixel package rank in the form of e.g. NONE, VIP_PLUS, SUPERSTAR, etc.
     * @param isHypixelBuildTeam Flag signifying whether the user is a Hypixel build team member or not.
     * @param isHypixelBuildTeamAdmin Flag signifying whether the user is a Hypixel build team admin or not.
     */
    constructor (sessionToken?: string, sessionExpiration?: Date, mcUuid?: string, discordId?: string,
                 isAdmin?: boolean, isPremium?: boolean, premiumExpiration?: Date, hypixelRank?: string,
                 hypixelPackageRank?: string, isHypixelBuildTeam?: boolean, isHypixelBuildTeamAdmin?: boolean) {
        super()
        this.id = 28
        if(sessionToken == undefined || sessionExpiration == undefined) {
            return
        }

        this.addPayload(Buffer.from(sessionToken))
        const sessionExpirationBuf = Buffer.alloc(4)
        sessionExpirationBuf.writeUInt32BE(sessionExpiration.getTime() / 1000, 0)
        this.addPayload(sessionExpirationBuf)
        this.addPayload(Buffer.from(mcUuid || ''))
        this.addPayload(Buffer.from(discordId || ''))
        const isAdminBuf = Buffer.alloc(1)
        isAdminBuf.writeUInt8(isAdmin ? 1 : 0, 0)
        this.addPayload(isAdminBuf)
        const isPremiumBuf = Buffer.alloc(1)
        isPremiumBuf.writeUInt8(isPremium ? 1 : 0, 0)
        this.addPayload(isPremiumBuf)
        const premiumExpirationBuf = Buffer.alloc(4)
        premiumExpirationBuf.writeUInt32BE(premiumExpiration != null ? premiumExpiration.getTime() / 1000 : 0, 0)
        this.addPayload(premiumExpirationBuf)
        this.addPayload(Buffer.from(hypixelRank || 'NONE'))
        this.addPayload(Buffer.from(hypixelPackageRank || 'NONE'))
        const isHypixelBuildTeamBuf = Buffer.alloc(1)
        isHypixelBuildTeamBuf.writeUInt8(isHypixelBuildTeam ? 1 : 0, 0)
        this.addPayload(isHypixelBuildTeamBuf)
        const isHypixelBuildTeamAdminBuf = Buffer.alloc(1)
        isHypixelBuildTeamAdminBuf.writeUInt8(isHypixelBuildTeamAdmin ? 1 : 0, 0)
        this.addPayload(isHypixelBuildTeamAdminBuf)
    }
}

export default AuthCompleteAction
