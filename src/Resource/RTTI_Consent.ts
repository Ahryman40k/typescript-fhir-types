
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Attachment} from './RTTI_Attachment';
import {RTTI_Consent_Policy} from './RTTI_Consent_Policy';
import {RTTI_Consent_Verification} from './RTTI_Consent_Verification';
import {RTTI_Consent_Provision} from './RTTI_Consent_Provision';




        const mandatory = t.type({
           resourceType: t.string,
scope: RTTI_CodeableConcept,
category: t.array(RTTI_CodeableConcept)
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
status: t.string,
_status: RTTI_Element,
patient: RTTI_Reference,
dateTime: t.string,
_dateTime: RTTI_Element,
performer: t.array(RTTI_Reference),
organization: t.array(RTTI_Reference),
sourceAttachment: RTTI_Attachment,
sourceIdentifier: RTTI_Identifier,
sourceReference: RTTI_Reference,
policy: t.array(RTTI_Consent_Policy),
policyRule: RTTI_CodeableConcept,
verification: t.array(RTTI_Consent_Verification),
provision: RTTI_Consent_Provision
        });
        

        export var RTTI_Consent:any = t.intersection([mandatory, partial]);
        

export type IConsent = t.TypeOf<typeof RTTI_Consent>;
        
        