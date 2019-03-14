
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_MedicinalProductAuthorization_JurisdictionalAuthorization} from './RTTI_MedicinalProductAuthorization_JurisdictionalAuthorization';
import {RTTI_MedicinalProductAuthorization_Procedure} from './RTTI_MedicinalProductAuthorization_Procedure';




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
subject: RTTI_Reference,
country: t.array(RTTI_CodeableConcept),
jurisdiction: t.array(RTTI_CodeableConcept),
legalStatusOfSupply: RTTI_CodeableConcept,
status: RTTI_CodeableConcept,
statusDate: t.string,
_statusDate: RTTI_Element,
restoreDate: t.string,
_restoreDate: RTTI_Element,
validityPeriod: RTTI_Period,
dataExclusivityPeriod: RTTI_Period,
dateOfFirstAuthorization: t.string,
_dateOfFirstAuthorization: RTTI_Element,
internationalBirthDate: t.string,
_internationalBirthDate: RTTI_Element,
legalBasis: RTTI_CodeableConcept,
jurisdictionalAuthorization: t.array(RTTI_MedicinalProductAuthorization_JurisdictionalAuthorization),
holder: RTTI_Reference,
regulator: RTTI_Reference,
procedure: RTTI_MedicinalProductAuthorization_Procedure
        });
        

        export var RTTI_MedicinalProductAuthorization:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductAuthorization = t.TypeOf<typeof RTTI_MedicinalProductAuthorization>;
        
        