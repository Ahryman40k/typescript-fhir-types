
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Quantity} from './RTTI_Quantity';

import {RTTI_MedicationKnowledge_RelatedMedicationKnowledge} from './RTTI_MedicationKnowledge_RelatedMedicationKnowledge';
import {RTTI_MedicationKnowledge_Monograph} from './RTTI_MedicationKnowledge_Monograph';
import {RTTI_MedicationKnowledge_Ingredient} from './RTTI_MedicationKnowledge_Ingredient';
import {RTTI_MedicationKnowledge_Cost} from './RTTI_MedicationKnowledge_Cost';
import {RTTI_MedicationKnowledge_MonitoringProgram} from './RTTI_MedicationKnowledge_MonitoringProgram';
import {RTTI_MedicationKnowledge_AdministrationGuidelines} from './RTTI_MedicationKnowledge_AdministrationGuidelines';
import {RTTI_MedicationKnowledge_MedicineClassification} from './RTTI_MedicationKnowledge_MedicineClassification';
import {RTTI_MedicationKnowledge_Packaging} from './RTTI_MedicationKnowledge_Packaging';
import {RTTI_MedicationKnowledge_DrugCharacteristic} from './RTTI_MedicationKnowledge_DrugCharacteristic';
import {RTTI_MedicationKnowledge_Regulatory} from './RTTI_MedicationKnowledge_Regulatory';
import {RTTI_MedicationKnowledge_Kinetics} from './RTTI_MedicationKnowledge_Kinetics';

export enum MedicationKnowledgeStatusKind {
                active = 'active',
inactive = 'inactive',
enteredInError = 'enteredInError'
            }
const MedicationKnowledgeStatusKindKeys = t.keyof({
                [MedicationKnowledgeStatusKind.active]: null,
[MedicationKnowledgeStatusKind.inactive]: null,
[MedicationKnowledgeStatusKind.enteredInError]: null
            });


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
code: RTTI_CodeableConcept,
status: MedicationKnowledgeStatusKindKeys,
_status: RTTI_Element,
manufacturer: RTTI_Reference,
doseForm: RTTI_CodeableConcept,
amount: RTTI_Quantity,
synonym: t.array(t.string),
_synonym: t.array(RTTI_Element),
relatedMedicationKnowledge: t.array(RTTI_MedicationKnowledge_RelatedMedicationKnowledge),
associatedMedication: t.array(RTTI_Reference),
productType: t.array(RTTI_CodeableConcept),
monograph: t.array(RTTI_MedicationKnowledge_Monograph),
ingredient: t.array(RTTI_MedicationKnowledge_Ingredient),
preparationInstruction: t.string,
_preparationInstruction: RTTI_Element,
intendedRoute: t.array(RTTI_CodeableConcept),
cost: t.array(RTTI_MedicationKnowledge_Cost),
monitoringProgram: t.array(RTTI_MedicationKnowledge_MonitoringProgram),
administrationGuidelines: t.array(RTTI_MedicationKnowledge_AdministrationGuidelines),
medicineClassification: t.array(RTTI_MedicationKnowledge_MedicineClassification),
packaging: RTTI_MedicationKnowledge_Packaging,
drugCharacteristic: t.array(RTTI_MedicationKnowledge_DrugCharacteristic),
contraindication: t.array(RTTI_Reference),
regulatory: t.array(RTTI_MedicationKnowledge_Regulatory),
kinetics: t.array(RTTI_MedicationKnowledge_Kinetics)
        });
        

        export var RTTI_MedicationKnowledge:any = t.intersection([mandatory, partial]);
        

export type IMedicationKnowledge = t.TypeOf<typeof RTTI_MedicationKnowledge>;
        
        