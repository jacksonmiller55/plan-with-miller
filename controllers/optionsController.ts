import {Handler, Request} from 'alexa-sdk';
import {IntentController} from './intentController';

export class OptionsController extends IntentController {
    constructor(handler: Handler<Request>) {
        super(handler);
    }

    getOptions(): void {
        this.handler.emit(':ask', 'get options.', 'get options.');
    }

}
