
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
import {RTTI_Age} from './RTTI_Age';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Procedure_Performer} from './RTTI_Procedure_Performer';
import {RTTI_Annotation} from './RTTI_Annotation';
import {RTTI_Procedure_FocalDevice} from './RTTI_Procedure_FocalDevice';




        const mandatory = t.type({
           resourceType: t.string,
subject: RTTI_Reference
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
instantiatesCanonical: t.array(t.string),
instantiatesUri: t.array(t.string),
_instantiatesUri: t.array(RTTI_Element),
basedOn: t.array(RTTI_Reference),
partOf: t.array(RTTI_Reference),
status: t.string,
_status: RTTI_Element,
statusReason: RTTI_CodeableConcept,
category: RTTI_CodeableConcept,
code: RTTI_CodeableConcept,
context: RTTI_Reference,
performedDateTime: t.string,
_performedDateTime: RTTI_Element,
performedPeriod: RTTI_Period,
performedString: t.string,
_performedString: RTTI_Element,
performedAge: RTTI_Age,
performedRange: RTTI_Range,
recorder: RTTI_Reference,
asserter: RTTI_Reference,
performer: t.array(RTTI_Procedure_Performer),
location: RTTI_Reference,
reasonCode: t.array(RTTI_CodeableConcept),
reasonReference: t.array(RTTI_Reference),
bodySite: t.array(RTTI_CodeableConcept),
outcome: RTTI_CodeableConcept,
report: t.array(RTTI_Reference),
complication: t.array(RTTI_CodeableConcept),
complicationDetail: t.array(RTTI_Reference),
followUp: t.array(RTTI_CodeableConcept),
note: t.array(RTTI_Annotation),
focalDevice: t.array(RTTI_Procedure_FocalDevice),
usedReference: t.array(RTTI_Reference),
usedCode: t.array(RTTI_CodeableConcept)
        });
        

        export var RTTI_Procedure:any = t.intersection([mandatory, partial]);
        

export type IProcedure = t.TypeOf<typeof RTTI_Procedure>;
        
        