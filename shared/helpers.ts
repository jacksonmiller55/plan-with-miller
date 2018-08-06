import { IntentRequest } from 'alexa-sdk';

export const NotFound: number = -1;

export function getSlot(request: IntentRequest, slotName: string): any {
    console.log(`[GetSlot]`);
    console.log(`[GetSlot][Request] - ${JSON.stringify(request)}`);
    console.log(`[GetSlot][SlotName] - ${JSON.stringify(slotName)}`);

    if (request.intent === null || request.intent === undefined) {
        console.log(`[GetSlot] - Intent null`);
        return null;
    }

    if (request.intent.slots === null || request.intent.slots === undefined) {
        console.log(`[GetSlot] - Slots null`);
        return null;
    }

    if (request.intent.slots[slotName] === null || request.intent.slots[slotName] === undefined) {
        console.log(`[GetSlot] - Slot null`);
        return null;
    }

    if (request.intent.slots[slotName].value === null || request.intent.slots[slotName].value === undefined) {
        console.log(`[GetSlot] - Slot value null`);
        return null;
    }

    if (request.intent.slots[slotName].resolutions === null || request.intent.slots[slotName].resolutions === undefined) {
        console.log(`[GetSlot] - Resolution value null`);
        return null;
    }

    if (request.intent.slots[slotName].resolutions.resolutionsPerAuthority === null || request.intent.slots[slotName].resolutions.resolutionsPerAuthority === undefined) {
        console.log(`[GetSlot] - Resolution value null`);
        return null;
    }

    if (request.intent.slots[slotName].resolutions.resolutionsPerAuthority[0].values === null || request.intent.slots[slotName].resolutions.resolutionsPerAuthority[0].values === undefined) {
        console.log(`[GetSlot] - Resolution value null`);
        return null;
    }

    if (request.intent.slots[slotName].resolutions.resolutionsPerAuthority[0].values[0].value === null || request.intent.slots[slotName].resolutions.resolutionsPerAuthority[0].values[0].value === undefined) {
        console.log(`[GetSlot] - Resolution value null`);
        return null;
    }

    return request.intent.slots[slotName].resolutions.resolutionsPerAuthority[0].values[0].value.name.toLowerCase();
}

export function getSlotId(request: IntentRequest, slotName: string): any {
    console.log(`[GetSlot]`);
    console.log(`[GetSlot][Request] - ${JSON.stringify(request)}`);
    console.log(`[GetSlot][SlotName] - ${JSON.stringify(slotName)}`);

    if (request.intent === null || request.intent === undefined) {
        console.log(`[GetSlot] - Intent null`);
        return null;
    }

    if (request.intent.slots === null || request.intent.slots === undefined) {
        console.log(`[GetSlot] - Slots null`);
        return null;
    }

    if (request.intent.slots[slotName] === null || request.intent.slots[slotName] === undefined) {
        console.log(`[GetSlot] - Slot null`);
        return null;
    }

    if (request.intent.slots[slotName].resolutions === null || request.intent.slots[slotName].resolutions === undefined) {
        console.log(`[GetSlot] - Resolution value null`);
        return null;
    }

    if (request.intent.slots[slotName].resolutions.resolutionsPerAuthority === null || request.intent.slots[slotName].resolutions.resolutionsPerAuthority === undefined) {
        console.log(`[GetSlot] - Resolution value null`);
        return null;
    }

    if (request.intent.slots[slotName].resolutions.resolutionsPerAuthority[0]=== null || request.intent.slots[slotName].resolutions.resolutionsPerAuthority[0] === undefined) {
        console.log(`[GetSlot] - Resolution value null`);
        return null;
    }

    if (request.intent.slots[slotName].resolutions.resolutionsPerAuthority[0].values === null || request.intent.slots[slotName].resolutions.resolutionsPerAuthority[0].values === undefined) {
        console.log(`[GetSlot] - Resolution value null`);
        return null;
    }

    
    if (request.intent.slots[slotName].resolutions.resolutionsPerAuthority[0].values[0] === null || request.intent.slots[slotName].resolutions.resolutionsPerAuthority[0].values[0] === undefined) {
        console.log(`[GetSlot] - Resolution value null`);
        return null;
    }

    if (request.intent.slots[slotName].resolutions.resolutionsPerAuthority[0].values[0].value === null || request.intent.slots[slotName].resolutions.resolutionsPerAuthority[0].values[0].value === undefined) {
        console.log(`[GetSlot] - Resolution value null`);
        return null;
    }

    return request.intent.slots[slotName].resolutions.resolutionsPerAuthority[0].values[0].value.id
}

export function isNullOrUndefined(o: object): boolean {
    console.log(`[IsNullOrUndefined]`);
    console.log(`[IsNullOrUndefined][O] - ${JSON.stringify(o)}`);
    return o === null || o === undefined;
}

export function handleError(error: any): void {
    console.log(`[HandleError]`);
    console.log(`[HandleError][Error] - ${JSON.stringify(error)}`);
}

export function getRandomItems(array: any[], numItems: number) {
    console.log(`[GetRandomItems]`);
    console.log(`[GetRandomItems][Array] - ${JSON.stringify(array)}`);
    console.log(`[GetRandomItems][NumItems] - ${JSON.stringify(numItems)}`);
    if (numItems < 1) {
        return [];
    } else if (numItems === 1) {
        return array[Math.floor(Math.random()*array.length)];
    } else {
        return shuffle(array).slice(0, numItems);
    }
}

export function shuffle(array: any[]): any[] {
    console.log(`[Shuffle]`);
    console.log(`[Shuffle][Array] - ${JSON.stringify(array)}`);
    return array.sort(() => { return 0.5 - Math.random() });
}

export function randomNumber(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}