import { AttributeMap } from 'aws-sdk/clients/dynamodb';

export abstract class ModelConverter<TModel> {
    abstract toModel(model: AttributeMap): TModel;
    abstract fromModel(model: TModel): AttributeMap;
}