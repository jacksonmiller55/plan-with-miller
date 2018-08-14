import { Handler, IntentRequest, Request } from 'alexa-sdk';
import { IntentController } from './intentController';
import { TriviaModel } from '../models/dto/triviaModel';
import { errorResponse, correctSpeachcon, incorrectSpeachcon, startTriviaSound, briefPause, incorrectSound, correctSound } from '../shared/ssml.helpers';
import { Database } from '../shared/database';
import { TriviaModelConverter } from '../models/converters/triviaModelConverter';
import { ModelConverter } from '../models/converters/modelConverter';
import { ScanOutput } from 'aws-sdk/clients/dynamodb';
import { getRandomItems, getSlotId} from '../shared/helpers'
import { characters } from '../shared/ssml.helpers'
import { Slot } from '../models/slots/slot'

export class TriviaController extends IntentController {
    private _database: Database;
    private _triviaModelConverter: ModelConverter<TriviaModel>;

    constructor(handler: Handler<Request>) {
        super(handler);
        this._database = new Database();
        this._triviaModelConverter = new TriviaModelConverter();
    }

    async playTrivia() {
        console.log(`[TrivaController][PlayTrivia]`);

        const request: IntentRequest = this.handler.event.request;


        console.log(`[TrivaController][PlayTrivia][Request]`);
        console.log(request);

        const result: ScanOutput = await this._database.Trivia.getAll().catch();

        console.log(`[TrivaController][PlayTrivia][Result]`);
        console.log(result);

        this.sessionObject.attributes['result'] = result;

        if (result.Items === null || result.Items === undefined) {
            console.log(`[TrivaController][PlayTrivia][Result] - Items null`);
            this.handler.emit(`:ask`, errorResponse);
            return;
        }

        let trivia: TriviaModel[] = result.Items.map(this._triviaModelConverter.toModel);
        const question: TriviaModel = getRandomItems(trivia, 1);
        
        this.sessionObject.attributes['Question'] = question;
        console.log(`[Question][${JSON.stringify(question)}]`);
        this.sessionObject.attributes['Answer'] = question.answer;
      
        this.handler.emit(':ask', `${startTriviaSound()} Welcome to Trivia ${briefPause} Please answer by stating a, b, or c. Your question is ${question.question} is it a: ${question.a}. b: ${question.b}. or c: ${question.c}.`, 
        `Please answer by stating a, b, or c.  Your question is ${question.question} is it a: ${question.a}? b: ${question.b}? or c: ${question.c}?`);
    }

    async answerTrivia(){
        console.log(`[TrivaController][AnswerTrivia]`);

        let request: IntentRequest = this.handler.event.request;
        let answerContext: string = getSlotId(request, Slot.AnswerContext)
        console.log(`[TrivaController][AnswerTrivia][${JSON.stringify(answerContext)}]`);
        
        console.log(`[TrivaController][AnswerTrivia][Request]`);
        
        console.log(`[TrivaController][AnswerTrivia][${answerContext}]`);
        const response = this.checkAnswer(answerContext);

        this.handler.emit(':ask', `${response}`,`If you would like to play again just say play trivia.`);
    }
    
    checkAnswer(answerContext: string) {
        let response: string = '';
        if (answerContext == null){
            this.handler.emit(':ask', 'Please answer by saying a, b, or c.', 'Please answer by saying a, b, or c.');
        }
        else if (this.sessionObject.attributes['Question'].answer == answerContext){
            response = `${correctSound()} ${correctSpeachcon()} That is correct! `; 
        }
        else{
            response = `${incorrectSound()} ${incorrectSpeachcon()} ${briefPause} Im sorry. `
        }
        const theAnswer: string = this.sessionObject.attributes['Question'].answer.toLowerCase();
        response = response + `The answer is ${characters(theAnswer)}: ${this.sessionObject.attributes['Question'][theAnswer]}. If you would like to play again just say play trivia.`;
        console.log(`[TrivaController][AnswerTrivia][${response}]`);
        this.handler.event.session.attributes['flag'] = null;
        return response;
    }

}