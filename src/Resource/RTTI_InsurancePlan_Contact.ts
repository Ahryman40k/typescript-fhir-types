
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_HumanName} from './RTTI_HumanName';
import {RTTI_ContactPoint} from './RTTI_ContactPoint';
import {RTTI_Address} from './RTTI_Address';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
purpose: RTTI_CodeableConcept,
name: RTTI_HumanName,
telecom: t.array(RTTI_ContactPoint),
address: RTTI_Address
        });
        

        export var RTTI_InsurancePlan_Contact:any = t.intersection([mandatory, partial]);
        

export type IInsurancePlan_Contact = t.TypeOf<typeof RTTI_InsurancePlan_Contact>;
        
        