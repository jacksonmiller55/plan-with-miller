import * as Alexa from 'alexa-sdk';
import { AmazonController } from './controllers/amazonController';
import { GameController } from './controllers/gameController';

const handler = function (event: Alexa.RequestBody<Alexa.Request>, context: Alexa.Context, callback: (err: any, response: any) => void): void {
    const alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers({
        'NewSession': function () {
            event.session.attributes['flag'] = null;
            new AmazonController(this).newSession();
        },
    });
    if (event.session.attributes['flag'] == null){
        alexa.registerHandlers({
            'TriviaIntent': function () {
                event.session.attributes['flag'] = 'trivia';
                new GameController(this).playTrivia();
            },
            'AMAZON.HelpIntent': function () {
                new AmazonController(this).help();
            },
            'AMAZON.CancelIntent': function () {
                new AmazonController(this).cancel();
            },
            'AMAZON.StopIntent': function () {
                new AmazonController(this).stop();
            },
            'AMAZON.Unhandled': function () {
                new AmazonController(this).unhandled();
            }
        });
    }
    if (event.session.attributes['flag'] == 'trivia'){
        alexa.registerHandlers({
            'AnswerTriviaIntent': function(){
                //I set the flag back to null only if an answer is given.
                new GameController(this).answerTrivia();
            },
            'AMAZON.HelpIntent': function () {
                new AmazonController(this).help();
            },
            'AMAZON.CancelIntent': function () {
                new AmazonController(this).cancel();
            },
            'AMAZON.StopIntent': function () {
                new AmazonController(this).stop();
            },
            'AMAZON.Unhandled': function () {
                new AmazonController(this).unhandled();
            }
        });
    }
    alexa.execute();
};

export { handler };
