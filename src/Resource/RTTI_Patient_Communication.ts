
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           language: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
preferred: t.boolean,
_preferred: RTTI_Element
        });
        

        export var RTTI_Patient_Communication:any = t.intersection([mandatory, partial]);
        

export type IPatient_Communication = t.TypeOf<typeof RTTI_Patient_Communication>;
        
        