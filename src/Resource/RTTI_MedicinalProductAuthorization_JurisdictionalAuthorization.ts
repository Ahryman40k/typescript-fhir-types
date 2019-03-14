
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period} from './RTTI_Period';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
country: RTTI_CodeableConcept,
jurisdiction: t.array(RTTI_CodeableConcept),
legalStatusOfSupply: RTTI_CodeableConcept,
validityPeriod: RTTI_Period
        });
        

        export var RTTI_MedicinalProductAuthorization_JurisdictionalAuthorization:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductAuthorization_JurisdictionalAuthorization = t.TypeOf<typeof RTTI_MedicinalProductAuthorization_JurisdictionalAuthorization>;
        
        