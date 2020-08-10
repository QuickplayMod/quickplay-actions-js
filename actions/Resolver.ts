import Action from './Action'
import EnableModAction from './clientbound/EnableModAction'
import DisableModAction from './clientbound/DisableModAction'
import SendChatComponentAction from './clientbound/SendChatComponentAction'
import SystemOutAction from './clientbound/SystemOutAction'
import ResetConfigAction from './clientbound/ResetConfigAction'
import SendChatCommandAction from './clientbound/SendChatCommandAction'
import SetAliasedActionAction from './clientbound/SetAliasedActionAction'
import SetButtonAction from './clientbound/SetButtonAction'
import SetScreenAction from './clientbound/SetScreenAction'
import OpenGuiAction from './clientbound/OpenGuiAction'
import OpenScreenAction from './clientbound/OpenScreenAction'
import RefreshCacheAction from './clientbound/RefreshCacheAction'
import SetCurrentServerAction from './clientbound/SetCurrentServerAction'
import SetGlyphForUserAction from './clientbound/SetGlyphForUserAction'
import SetKeybindsAction from './clientbound/SetKeybindsAction'
import SetPremiumAboutAction from './clientbound/SetPremiumAboutAction'
import SetTranslationAction from './clientbound/SetTranslationAction'
import ButtonPressedAction from './serverbound/ButtonPressedAction'
import ExceptionThrownAction from './serverbound/ExceptionThrownAction'
import HypixelLocationChangedAction from './serverbound/HypixelLocationChangedAction'
import MigrateKeybindsAction from './serverbound/MigrateKeybindsAction'
import LanguageChangedAction from './serverbound/LanguageChangedAction'
import ServerJoinedAction from './serverbound/ServerJoinedAction'
import ServerLeftAction from './serverbound/ServerLeftAction'
import InitializeClientAction from './serverbound/InitializeClientAction'
import AuthBeginHandshakeAction from './clientbound/AuthBeginHandshakeAction'
import AuthEndHandshakeAction from './serverbound/AuthEndHandshakeAction'
import AuthCompleteAction from './clientbound/AuthCompleteAction'
import {Buffer} from 'buffer'

/**
 * Action resolver - Resolves Actions from their base Action type, and deserializes Actions from Buffers into
 * their Action objects. Does not need to be instantiated.
 */
export default class Resolver {

    /**
     * Mapping Actions from their IDs to their classes
     */
    private static actionMap = [
        Action,
        EnableModAction,
        DisableModAction,
        SendChatComponentAction,
        SystemOutAction,
        ResetConfigAction,
        SendChatCommandAction,
        SetAliasedActionAction,
        SetButtonAction,
        SetScreenAction,
        OpenGuiAction,
        OpenScreenAction,
        RefreshCacheAction,
        SetCurrentServerAction,
        SetGlyphForUserAction,
        SetKeybindsAction,
        SetPremiumAboutAction,
        SetTranslationAction,
        ButtonPressedAction,
        ExceptionThrownAction,
        HypixelLocationChangedAction,
        MigrateKeybindsAction,
        LanguageChangedAction,
        ServerJoinedAction,
        ServerLeftAction,
        InitializeClientAction,
        AuthBeginHandshakeAction,
        AuthEndHandshakeAction,
        AuthCompleteAction
    ]

    /**
     * Get an action from an ID.
     * @param id ID of the action to get.
     * @returns the Action, or null if there is no Action for the specified ID.
     */
    static get (id: number) : typeof Action {
        if(id < 0 || id >= this.actionMap.length) {
            return null
        }
        return this.actionMap[id]
    }

    /**
     * Decode an Action from a Buffer
     * @param buf {Buffer} Buffer to decode
     */
    static from (buf: Buffer) : Action {
        const id = buf.readInt16BE(0)
        const action = new Resolver.actionMap[id]()
        action.id = id
        let offset = 2
        // Loop until the end of the buffer is reached
        while(buf.byteLength > offset) {
            // Read length of payload slice
            const length = buf.readInt32BE(offset)
            offset += 4
            // Read payload slice
            action.addPayload(buf.slice(offset, offset + length))
            offset += length
        }
        return action
    }

    /**
     * Deserialize an Action from JSON into its Action object.
     * @param json {string} The JSON to deserialize.
     */
    static async deserialize(json: string): Promise<Action> {
        const obj = JSON.parse(json)
        const action = new Resolver.actionMap[obj.id]()
        for(const prop in obj) {
            if(!obj.hasOwnProperty(prop)) {
                continue
            }
            action[prop] = obj[prop]
        }
        // Convert all Buffers from Objects into Buffer instances.
        if(action.payloadObjs != null) {
            for(let i = 0; i < action.payloadObjs.length; i++) {
                action.payloadObjs[i] = Buffer.from((action.payloadObjs[i] as unknown as {data: number[]}).data)
            }
        }
        return action
    }
}