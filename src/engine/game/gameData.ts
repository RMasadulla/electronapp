import Store from 'electron-store'

import { DinoMercsContext } from '@/types'
import { initialContext } from './initialContext'

const gameData = new Store<DinoMercsContext>({ defaults: { ...initialContext } })

const update = (ctx: DinoMercsContext) => gameData.set(ctx)

export default {
    data: gameData.store,
    update,
}
