
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
import {RTTI_Attachment} from './RTTI_Attachment';
import {RTTI_Annotation} from './RTTI_Annotation';




        const mandatory = t.type({
           resourceType: t.string,
content: RTTI_Attachment
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
basedOn: t.array(RTTI_Reference),
partOf: t.array(RTTI_Reference),
status: t.string,
_status: RTTI_Element,
type: RTTI_CodeableConcept,
modality: RTTI_CodeableConcept,
view: RTTI_CodeableConcept,
subject: RTTI_Reference,
context: RTTI_Reference,
createdDateTime: t.string,
_createdDateTime: RTTI_Element,
createdPeriod: RTTI_Period,
issued: t.string,
_issued: RTTI_Element,
operator: RTTI_Reference,
reasonCode: t.array(RTTI_CodeableConcept),
bodySite: RTTI_CodeableConcept,
deviceName: t.string,
_deviceName: RTTI_Element,
device: RTTI_Reference,
height: t.number,
_height: RTTI_Element,
width: t.number,
_width: RTTI_Element,
frames: t.number,
_frames: RTTI_Element,
duration: t.number,
_duration: RTTI_Element,
note: t.array(RTTI_Annotation)
        });
        

        export var RTTI_Media:any = t.intersection([mandatory, partial]);
        

export type IMedia = t.TypeOf<typeof RTTI_Media>;
        
        