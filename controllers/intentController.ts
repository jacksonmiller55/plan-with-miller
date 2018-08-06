import { Handler, IntentRequest, Request, Session } from 'alexa-sdk';

export class IntentController {
    protected handler: Handler<Request>;
    protected request: IntentRequest;
    protected sessionObject: Session;

    constructor(handler: Handler<Request>) {
        this.handler = handler;
        this.request = handler.event.request;
        this.sessionObject = handler.event.session
    }
}