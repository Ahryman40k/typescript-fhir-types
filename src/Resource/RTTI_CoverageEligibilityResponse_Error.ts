
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           code: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension)
        });
        

        export var RTTI_CoverageEligibilityResponse_Error:any = t.intersection([mandatory, partial]);
        

export type ICoverageEligibilityResponse_Error = t.TypeOf<typeof RTTI_CoverageEligibilityResponse_Error>;
        
        