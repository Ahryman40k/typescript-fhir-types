
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Attachment} from './RTTI_Attachment';
import {RTTI_Coding} from './RTTI_Coding';




        const mandatory = t.type({
           attachment: RTTI_Attachment
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
format: RTTI_Coding
        });
        

        export var RTTI_DocumentReference_Content:any = t.intersection([mandatory, partial]);
        

export type IDocumentReference_Content = t.TypeOf<typeof RTTI_DocumentReference_Content>;
        
        