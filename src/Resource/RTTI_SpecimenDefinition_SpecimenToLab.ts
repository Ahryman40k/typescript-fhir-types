
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_SpecimenDefinition_ContainerAdditive} from './RTTI_SpecimenDefinition_ContainerAdditive';
import {RTTI_Duration} from './RTTI_Duration';
import {RTTI_SpecimenDefinition_Handling} from './RTTI_SpecimenDefinition_Handling';

export enum SpecimenDefinition_SpecimenToLabPreferenceKind {
                preferred = 'preferred',
alternate = 'alternate'
            }
const SpecimenDefinition_SpecimenToLabPreferenceKindKeys = t.keyof({
                [SpecimenDefinition_SpecimenToLabPreferenceKind.preferred]: null,
[SpecimenDefinition_SpecimenToLabPreferenceKind.alternate]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
isDerived: t.boolean,
_isDerived: RTTI_Element,
type: RTTI_CodeableConcept,
preference: SpecimenDefinition_SpecimenToLabPreferenceKindKeys,
_preference: RTTI_Element,
containerMaterial: RTTI_CodeableConcept,
containerType: RTTI_CodeableConcept,
containerCap: RTTI_CodeableConcept,
containerDescription: t.string,
_containerDescription: RTTI_Element,
containerCapacity: RTTI_Quantity,
containerMinimumVolume: RTTI_Quantity,
containerAdditive: t.array(RTTI_SpecimenDefinition_ContainerAdditive),
containerPreparation: t.string,
_containerPreparation: RTTI_Element,
requirement: t.string,
_requirement: RTTI_Element,
retentionTime: RTTI_Duration,
rejectionCriterion: t.array(RTTI_CodeableConcept),
handling: t.array(RTTI_SpecimenDefinition_Handling)
        });
        

        export var RTTI_SpecimenDefinition_SpecimenToLab:any = t.intersection([mandatory, partial]);
        

export type ISpecimenDefinition_SpecimenToLab = t.TypeOf<typeof RTTI_SpecimenDefinition_SpecimenToLab>;
        
        