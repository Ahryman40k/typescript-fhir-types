
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Medication_Ingredient} from './RTTI_Medication_Ingredient';
import {RTTI_Medication_Batch} from './RTTI_Medication_Batch';

export enum MedicationStatusKind {
                active = 'active',
inactive = 'inactive',
enteredInError = 'enteredInError'
            }
const MedicationStatusKindKeys = t.keyof({
                [MedicationStatusKind.active]: null,
[MedicationStatusKind.inactive]: null,
[MedicationStatusKind.enteredInError]: null
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
status: MedicationStatusKindKeys,
_status: RTTI_Element,
manufacturer: RTTI_Reference,
form: RTTI_CodeableConcept,
amount: RTTI_Quantity,
ingredient: t.array(RTTI_Medication_Ingredient),
batch: RTTI_Medication_Batch
        });
        

        export var RTTI_Medication:any = t.intersection([mandatory, partial]);
        

export type IMedication = t.TypeOf<typeof RTTI_Medication>;
        
        