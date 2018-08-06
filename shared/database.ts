import { DynamoDB } from 'aws-sdk';
import { GetItemInput, GetItemOutput, ScanInput, ScanOutput } from 'aws-sdk/clients/dynamodb';
import { Table } from '../models/domain/table';

export class Database {
    private readonly _dynamoDb: DynamoDB;
    public Trivia: DatabaseTable;

    constructor() {
        this._dynamoDb = new DynamoDB({apiVersion: '2012-08-10'});
        this.createTables();
    }

    private createTables() {
        this.Trivia = new DatabaseTable(Table.Trivia, this._dynamoDb);
    }
}

export class DatabaseTable {
    private readonly _dynamoDb: DynamoDB;
    private readonly _table: String;

    constructor(table: Table, dynamoDb: DynamoDB) {
        this._dynamoDb = dynamoDb;
        this._table = table.toString();
    }

    public get(key: string): Promise<GetItemOutput> {
        console.log(`[${this._table}][Get]`);

        const params: GetItemInput = {
            TableName: this._table.toString(),
            Key: {
                'Id': {S: key}
            },
        };

        console.log(`[${this._table}][Get][Params] - ${JSON.stringify(params)}`);

        return new Promise((resolve, reject) => {
            this._dynamoDb.getItem(params, (err, result) => {
                if (err) {
                    console.log(`[${this._table}][Get][Error]`);
                    console.log(err);
                    reject(null);
                } else {
                    console.log(`[${this._table}][Get][Success]`);
                    console.log(result);
                    resolve(result);
                }
            });
        });
    };

    public getAll(): Promise<ScanOutput> {
        console.log(`[${this._table}][GetAll]`);

        const params: ScanInput = {
            TableName: this._table.toString()
        };

        console.log(`[${this._table}][GetAll][Params] - ${JSON.stringify(params)}`);

        return new Promise((resolve, reject) => {
            this._dynamoDb.scan(params, (err, result) => {
                if (err) {
                    console.log(`[${this._table}][GetAll][Error]`);
                    console.log(err);
                    reject(null);
                } else {
                    console.log(`[${this._table}][GetAll][Success]`);
                    console.log(result);
                    resolve(result);
                }
            });
        });
    };
}