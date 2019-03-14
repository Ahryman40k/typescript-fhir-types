
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Immunization_Performer} from './RTTI_Immunization_Performer';
import {RTTI_Annotation} from './RTTI_Annotation';
import {RTTI_Immunization_Education} from './RTTI_Immunization_Education';
import {RTTI_Immunization_ProtocolApplied} from './RTTI_Immunization_ProtocolApplied';




        const mandatory = t.type({
           resourceType: t.string,
vaccineCode: RTTI_CodeableConcept,
patient: RTTI_Reference
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
statusReason: RTTI_CodeableConcept,
encounter: RTTI_Reference,
occurrenceDateTime: t.string,
_occurrenceDateTime: RTTI_Element,
occurrenceString: t.string,
_occurrenceString: RTTI_Element,
recorded: t.string,
_recorded: RTTI_Element,
primarySource: t.boolean,
_primarySource: RTTI_Element,
reportOrigin: RTTI_CodeableConcept,
location: RTTI_Reference,
manufacturer: RTTI_Reference,
lotNumber: t.string,
_lotNumber: RTTI_Element,
expirationDate: t.string,
_expirationDate: RTTI_Element,
site: RTTI_CodeableConcept,
route: RTTI_CodeableConcept,
doseQuantity: RTTI_Quantity,
performer: t.array(RTTI_Immunization_Performer),
note: t.array(RTTI_Annotation),
reasonCode: t.array(RTTI_CodeableConcept),
reasonReference: t.array(RTTI_Reference),
isSubpotent: t.boolean,
_isSubpotent: RTTI_Element,
subpotentReason: t.array(RTTI_CodeableConcept),
education: t.array(RTTI_Immunization_Education),
programEligibility: t.array(RTTI_CodeableConcept),
fundingSource: RTTI_CodeableConcept,
protocolApplied: t.array(RTTI_Immunization_ProtocolApplied)
        });
        

        export var RTTI_Immunization:any = t.intersection([mandatory, partial]);
        

export type IImmunization = t.TypeOf<typeof RTTI_Immunization>;
        
        