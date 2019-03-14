
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Attachment} from './RTTI_Attachment';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           resourceType: t.string,
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
active: t.boolean,
_active: RTTI_Element,
morphology: RTTI_CodeableConcept,
location: RTTI_CodeableConcept,
locationQualifier: t.array(RTTI_CodeableConcept),
description: t.string,
_description: RTTI_Element,
image: t.array(RTTI_Attachment)
        });
        

        export var RTTI_BodyStructure:any = t.intersection([mandatory, partial]);
        

export type IBodyStructure = t.TypeOf<typeof RTTI_BodyStructure>;
        
        