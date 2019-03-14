
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           targetDisease: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
series: t.string,
_series: RTTI_Element,
authority: RTTI_Reference,
doseNumberPositiveInt: t.number,
_doseNumberPositiveInt: RTTI_Element,
doseNumberString: t.string,
_doseNumberString: RTTI_Element
        });
        

        export var RTTI_Immunization_ProtocolApplied:any = t.intersection([mandatory, partial]);
        

export type IImmunization_ProtocolApplied = t.TypeOf<typeof RTTI_Immunization_ProtocolApplied>;
        
        