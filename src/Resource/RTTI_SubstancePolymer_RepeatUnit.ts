
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_SubstanceAmount} from './RTTI_SubstanceAmount';
import {RTTI_SubstancePolymer_DegreeOfPolymerisation} from './RTTI_SubstancePolymer_DegreeOfPolymerisation';
import {RTTI_SubstancePolymer_StructuralRepresentation} from './RTTI_SubstancePolymer_StructuralRepresentation';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
orientationOfPolymerisation: RTTI_CodeableConcept,
repeatUnit: t.string,
_repeatUnit: RTTI_Element,
amount: RTTI_SubstanceAmount,
degreeOfPolymerisation: t.array(RTTI_SubstancePolymer_DegreeOfPolymerisation),
structuralRepresentation: t.array(RTTI_SubstancePolymer_StructuralRepresentation)
        });
        

        export var RTTI_SubstancePolymer_RepeatUnit:any = t.intersection([mandatory, partial]);
        

export type ISubstancePolymer_RepeatUnit = t.TypeOf<typeof RTTI_SubstancePolymer_RepeatUnit>;
        
        