
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           item: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
flag: RTTI_CodeableConcept,
deleted: t.boolean,
_deleted: RTTI_Element,
date: t.string,
_date: RTTI_Element
        });
        

        export var RTTI_List_Entry:any = t.intersection([mandatory, partial]);
        

export type IList_Entry = t.TypeOf<typeof RTTI_List_Entry>;
        
        