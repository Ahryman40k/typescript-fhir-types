
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_ContactPoint} from './RTTI_ContactPoint';
import {RTTI_PractitionerRole_AvailableTime} from './RTTI_PractitionerRole_AvailableTime';
import {RTTI_PractitionerRole_NotAvailable} from './RTTI_PractitionerRole_NotAvailable';




        const mandatory = t.type({
           resourceType: t.string
        });
        

        const partial = t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
active: t.boolean,
_active: RTTI_Element,
period: RTTI_Period,
practitioner: RTTI_Reference,
organization: RTTI_Reference,
code: t.array(RTTI_CodeableConcept),
specialty: t.array(RTTI_CodeableConcept),
location: t.array(RTTI_Reference),
healthcareService: t.array(RTTI_Reference),
telecom: t.array(RTTI_ContactPoint),
availableTime: t.array(RTTI_PractitionerRole_AvailableTime),
notAvailable: t.array(RTTI_PractitionerRole_NotAvailable),
availabilityExceptions: t.string,
_availabilityExceptions: RTTI_Element,
endpoint: t.array(RTTI_Reference)
        });
        

        export var RTTI_PractitionerRole:any = t.intersection([mandatory, partial]);
        

export type IPractitionerRole = t.TypeOf<typeof RTTI_PractitionerRole>;
        
        