
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CoverageEligibilityResponse_Benefit} from './RTTI_CoverageEligibilityResponse_Benefit';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
category: RTTI_CodeableConcept,
billcode: RTTI_CodeableConcept,
modifier: t.array(RTTI_CodeableConcept),
provider: RTTI_Reference,
excluded: t.boolean,
_excluded: RTTI_Element,
name: t.string,
_name: RTTI_Element,
description: t.string,
_description: RTTI_Element,
network: RTTI_CodeableConcept,
unit: RTTI_CodeableConcept,
term: RTTI_CodeableConcept,
benefit: t.array(RTTI_CoverageEligibilityResponse_Benefit),
authorizationRequired: t.boolean,
_authorizationRequired: RTTI_Element,
authorizationSupporting: t.array(RTTI_CodeableConcept),
authorizationUrl: t.string,
_authorizationUrl: RTTI_Element
        });
        

        export var RTTI_CoverageEligibilityResponse_Item:any = t.intersection([mandatory, partial]);
        

export type ICoverageEligibilityResponse_Item = t.TypeOf<typeof RTTI_CoverageEligibilityResponse_Item>;
        
        