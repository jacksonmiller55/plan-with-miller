import * as Alexa from 'alexa-sdk';
import { AmazonController } from './controllers/amazonController';
import { TriviaController } from './controllers/TriviaController';
import { OptionsController } from './controllers/optionsController';


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
            'PlayTriviaIntent': function () {
                event.session.attributes['flag'] = 'trivia';
                new TriviaController(this).playTrivia();
            },
            'GetOptionsIntent': function(){
                new OptionsController(this).getOptions();
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
                new TriviaController(this).answerTrivia();
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
