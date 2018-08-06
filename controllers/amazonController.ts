import {Handler, Request} from 'alexa-sdk';
import {IntentController} from './intentController';
import { briefPause } from '../shared/ssml.helpers';

export class AmazonController extends IntentController {
    constructor(handler: Handler<Request>) {
        super(handler);
    }

    newSession(): void {
        this.handler.emit(':ask', 'Welcome to the App.');
    }

    help() {
        this.handler.emit(':tell', 'Sorry, but we cant help right now.');
    }

    cancel() {
        this.handler.emit(':tell', 'Cancelling now.');
    }


    stop() {
        this.handler.emit(':tell', 'Stopping now.');
    }

    unhandled() {
        this.handler.emit(':ask', 'I am sorry, but do not know how to handle your request.');
    }
}
