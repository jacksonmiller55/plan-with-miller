import {Handler, Request} from 'alexa-sdk';
import {IntentController} from './intentController';

export class OptionsController extends IntentController {
    constructor(handler: Handler<Request>) {
        super(handler);
    }

    getOptions(): void {
        this.handler.emit(':ask', 'To get the current schedule for a day just say: Get me the schedule for the day that you would like to know. To play trivia just say: play trivia. To find out what is fun nearby just say: What is fun nearby? If you would like to repeat this list just say: get options.', 'If you would like to repeat this list just say: get options.');
    }

}
