import { getRandomItems } from "./helpers";

export const pause = `<break time="0.4s"/>`;

export const briefPause = `<break time="0.2s"/>`;

export const errorResponse = `There was an issue processing your request`;

export function interjection(value: any) {
    return `<say-as interpret-as="interjection">${value}</say-as>`;
}

export function date(value: any) {
    return `<say-as interpret-as="date">${value}</say-as>`;
}

export function time(value: any) {
    return `<say-as interpret-as="time">${value}</say-as>`;
}

export function characters(value: any){
    return `<say-as interpret-as="characters">${value}</say-as>`
}

export function correctSpeachcon(): string{
    const correctRespones: string[] = [
        `<say-as interpret-as="interjection">bazinga!</say-as>`,
        `<say-as interpret-as="interjection">bingo!</say-as>`,
        `<say-as interpret-as="interjection">booya!</say-as>`,
        `<say-as interpret-as="interjection">eureka!</say-as>`,
        `<say-as interpret-as="interjection">righto!</say-as>`,
        `<say-as interpret-as="interjection">woo hoo!</say-as>`,
        `<say-as interpret-as="interjection">yay!</say-as>`,
    ]
    return getRandomItems(correctRespones, 1)
}

export function incorrectSpeachcon(): string{
    const incorrectcorrectRespones: string[] = [
        `<say-as interpret-as="interjection">darn</say-as>`,
        `<say-as interpret-as="interjection">gotcha</say-as>`,
        `<say-as interpret-as="interjection">oh dear</say-as>`,
        `<say-as interpret-as="interjection">ruh roh</say-as>`,
    ]
    return getRandomItems(incorrectcorrectRespones, 1)
}

export function correctSound(): string{
    const correctSounds: string[] = [
        `<audio src='https://s3.amazonaws.com/ask-soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_positive_response_01.mp3'/>`,
        `<audio src='https://s3.amazonaws.com/ask-soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_tally_positive_01.mp3'/>`,
    ]
    return getRandomItems(correctSounds, 1)
}

export function incorrectSound(): string{
    const incorrectSounds: string[] = [
        `<audio src='https://s3.amazonaws.com/ask-soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_negative_response_01.mp3'/>`,
        `<audio src='https://s3.amazonaws.com/ask-soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_tally_negative_01.mp3'/>`,
    ]
    return getRandomItems(incorrectSounds, 1)
}

export function startTriviaSound():string{
    return `<audio src='https://s3.amazonaws.com/ask-soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_bridge_01.mp3'/>`
}