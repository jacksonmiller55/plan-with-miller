import { ModelConverter } from './modelConverter';
import { TriviaModel } from '../dto/triviaModel';
import { AttributeMap } from 'aws-sdk/clients/dynamodb';

export class TriviaModelConverter extends ModelConverter<TriviaModel> {
    toModel(model: AttributeMap): TriviaModel {
        console.log(`[EventModelConverter][toModel]`);
        return {
            id: Number(model.Id.N),
            question: model.Question ? model.Question.S || '' : '',
            answer: model.Answer ? model.Answer.S || '' : '',
            a: model.A ? model.A.S || '' : '',
            b: model.B ? model.B.S || '' : '',
            c: model.C ? model.C.S || '' : ''
        };
    }

    fromModel(model: TriviaModel): AttributeMap {
        console.log(`[EventModelConverter][fromModel]`);
        return {
            'id': {'N': model.id.toString()},
            'question': {'S': model.question},
            'answer': {'S': model.answer},
            'a': {'S': model.a},
            'b': {'S': model.b},
            'c': {'S': model.c}
        };
    }
}