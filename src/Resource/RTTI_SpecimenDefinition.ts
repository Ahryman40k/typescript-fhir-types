
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_SpecimenDefinition_SpecimenToLab} from './RTTI_SpecimenDefinition_SpecimenToLab';




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
identifier: RTTI_Identifier,
typeCollected: RTTI_CodeableConcept,
patientPreparation: t.string,
_patientPreparation: RTTI_Element,
timeAspect: t.string,
_timeAspect: RTTI_Element,
collection: t.array(RTTI_CodeableConcept),
specimenToLab: t.array(RTTI_SpecimenDefinition_SpecimenToLab)
        });
        

        export var RTTI_SpecimenDefinition:any = t.intersection([mandatory, partial]);
        

export type ISpecimenDefinition = t.TypeOf<typeof RTTI_SpecimenDefinition>;
        
        