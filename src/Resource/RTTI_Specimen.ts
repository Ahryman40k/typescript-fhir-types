
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Specimen_Collection} from './RTTI_Specimen_Collection';
import {RTTI_Specimen_Processing} from './RTTI_Specimen_Processing';
import {RTTI_Specimen_Container} from './RTTI_Specimen_Container';
import {RTTI_Annotation} from './RTTI_Annotation';

export enum SpecimenStatusKind {
                available = 'available',
unavailable = 'unavailable',
unsatisfactory = 'unsatisfactory',
enteredInError = 'enteredInError'
            }
const SpecimenStatusKindKeys = t.keyof({
                [SpecimenStatusKind.available]: null,
[SpecimenStatusKind.unavailable]: null,
[SpecimenStatusKind.unsatisfactory]: null,
[SpecimenStatusKind.enteredInError]: null
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
identifier: t.array(RTTI_Identifier),
accessionIdentifier: RTTI_Identifier,
status: SpecimenStatusKindKeys,
_status: RTTI_Element,
type: RTTI_CodeableConcept,
subject: RTTI_Reference,
receivedTime: t.string,
_receivedTime: RTTI_Element,
parent: t.array(RTTI_Reference),
request: t.array(RTTI_Reference),
collection: RTTI_Specimen_Collection,
processing: t.array(RTTI_Specimen_Processing),
container: t.array(RTTI_Specimen_Container),
condition: t.array(RTTI_CodeableConcept),
note: t.array(RTTI_Annotation)
        });
        

        export var RTTI_Specimen:any = t.intersection([mandatory, partial]);
        

export type ISpecimen = t.TypeOf<typeof RTTI_Specimen>;
        
        