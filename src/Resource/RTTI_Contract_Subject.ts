
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           reference: t.array(RTTI_Reference)
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
role: RTTI_CodeableConcept
        });
        

        export var RTTI_Contract_Subject:any = t.intersection([mandatory, partial]);
        

export type IContract_Subject = t.TypeOf<typeof RTTI_Contract_Subject>;
        
        