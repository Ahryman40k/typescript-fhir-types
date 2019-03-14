
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_VisionPrescription_Dispense} from './RTTI_VisionPrescription_Dispense';




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
status: t.string,
_status: RTTI_Element,
patient: RTTI_Reference,
encounter: RTTI_Reference,
dateWritten: t.string,
_dateWritten: RTTI_Element,
prescriber: RTTI_Reference,
reasonCodeableConcept: RTTI_CodeableConcept,
reasonReference: RTTI_Reference,
dispense: t.array(RTTI_VisionPrescription_Dispense)
        });
        

        export var RTTI_VisionPrescription:any = t.intersection([mandatory, partial]);
        

export type IVisionPrescription = t.TypeOf<typeof RTTI_VisionPrescription>;
        
        