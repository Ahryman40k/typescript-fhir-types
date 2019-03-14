
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';

export enum DocumentReference_RelatesToCodeKind {
                replaces = 'replaces',
transforms = 'transforms',
signs = 'signs',
appends = 'appends'
            }
const DocumentReference_RelatesToCodeKindKeys = t.keyof({
                [DocumentReference_RelatesToCodeKind.replaces]: null,
[DocumentReference_RelatesToCodeKind.transforms]: null,
[DocumentReference_RelatesToCodeKind.signs]: null,
[DocumentReference_RelatesToCodeKind.appends]: null
            });


        const mandatory = t.type({
           target: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: DocumentReference_RelatesToCodeKindKeys,
_code: RTTI_Element
        });
        

        export var RTTI_DocumentReference_RelatesTo:any = t.intersection([mandatory, partial]);
        

export type IDocumentReference_RelatesTo = t.TypeOf<typeof RTTI_DocumentReference_RelatesTo>;
        
        