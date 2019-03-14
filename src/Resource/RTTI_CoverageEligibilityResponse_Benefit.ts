
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Money} from './RTTI_Money';




        const mandatory = t.type({
           type: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
allowedUnsignedInt: t.number,
_allowedUnsignedInt: RTTI_Element,
allowedString: t.string,
_allowedString: RTTI_Element,
allowedMoney: RTTI_Money,
usedUnsignedInt: t.number,
_usedUnsignedInt: RTTI_Element,
usedMoney: RTTI_Money
        });
        

        export var RTTI_CoverageEligibilityResponse_Benefit:any = t.intersection([mandatory, partial]);
        

export type ICoverageEligibilityResponse_Benefit = t.TypeOf<typeof RTTI_CoverageEligibilityResponse_Benefit>;
        
        