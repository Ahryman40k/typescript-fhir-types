
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Attachment} from './RTTI_Attachment';
import {RTTI_ContactPoint} from './RTTI_ContactPoint';

import {RTTI_HealthcareService_AvailableTime} from './RTTI_HealthcareService_AvailableTime';
import {RTTI_HealthcareService_NotAvailable} from './RTTI_HealthcareService_NotAvailable';




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
providedBy: RTTI_Reference,
category: t.array(RTTI_CodeableConcept),
type: t.array(RTTI_CodeableConcept),
specialty: t.array(RTTI_CodeableConcept),
location: t.array(RTTI_Reference),
name: t.string,
_name: RTTI_Element,
comment: t.string,
_comment: RTTI_Element,
extraDetails: t.string,
_extraDetails: RTTI_Element,
photo: RTTI_Attachment,
telecom: t.array(RTTI_ContactPoint),
coverageArea: t.array(RTTI_Reference),
serviceProvisionCode: t.array(RTTI_CodeableConcept),
eligibility: RTTI_CodeableConcept,
eligibilityNote: t.string,
_eligibilityNote: RTTI_Element,
programName: t.array(t.string),
_programName: t.array(RTTI_Element),
characteristic: t.array(RTTI_CodeableConcept),
referralMethod: t.array(RTTI_CodeableConcept),
appointmentRequired: t.boolean,
_appointmentRequired: RTTI_Element,
availableTime: t.array(RTTI_HealthcareService_AvailableTime),
notAvailable: t.array(RTTI_HealthcareService_NotAvailable),
availabilityExceptions: t.string,
_availabilityExceptions: RTTI_Element,
endpoint: t.array(RTTI_Reference)
        });
        

        export var RTTI_HealthcareService:any = t.intersection([mandatory, partial]);
        

export type IHealthcareService = t.TypeOf<typeof RTTI_HealthcareService>;
        
        