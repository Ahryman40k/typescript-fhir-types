
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Bundle_Link} from './RTTI_Bundle_Link';
import {RTTI_Bundle_Entry} from './RTTI_Bundle_Entry';
import {RTTI_Signature} from './RTTI_Signature';

export enum BundleTypeKind {
                document = 'document',
message = 'message',
transaction = 'transaction',
transactionResponse = 'transactionResponse',
batch = 'batch',
batchResponse = 'batchResponse',
history = 'history',
searchset = 'searchset',
collection = 'collection'
            }
const BundleTypeKindKeys = t.keyof({
                [BundleTypeKind.document]: null,
[BundleTypeKind.message]: null,
[BundleTypeKind.transaction]: null,
[BundleTypeKind.transactionResponse]: null,
[BundleTypeKind.batch]: null,
[BundleTypeKind.batchResponse]: null,
[BundleTypeKind.history]: null,
[BundleTypeKind.searchset]: null,
[BundleTypeKind.collection]: null
            });


        const mandatory = t.type({
           resourceType: t.string
        });
        

        const partial = t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
identifier: RTTI_Identifier,
type: BundleTypeKindKeys,
_type: RTTI_Element,
timestamp: t.string,
_timestamp: RTTI_Element,
total: t.number,
_total: RTTI_Element,
link: t.array(RTTI_Bundle_Link),
entry: t.array(RTTI_Bundle_Entry),
signature: RTTI_Signature
        });
        

        export var RTTI_Bundle:any = t.intersection([mandatory, partial]);
        

export type IBundle = t.TypeOf<typeof RTTI_Bundle>;
        
        