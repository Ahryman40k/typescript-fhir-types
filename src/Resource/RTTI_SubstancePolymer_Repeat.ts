
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_SubstancePolymer_RepeatUnit} from './RTTI_SubstancePolymer_RepeatUnit';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
numberOfUnits: t.number,
_numberOfUnits: RTTI_Element,
averageMolecularFormula: t.string,
_averageMolecularFormula: RTTI_Element,
repeatUnitAmountType: RTTI_CodeableConcept,
repeatUnit: t.array(RTTI_SubstancePolymer_RepeatUnit)
        });
        

        export var RTTI_SubstancePolymer_Repeat:any = t.intersection([mandatory, partial]);
        

export type ISubstancePolymer_Repeat = t.TypeOf<typeof RTTI_SubstancePolymer_Repeat>;
        
        