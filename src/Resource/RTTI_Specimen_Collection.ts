
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Duration} from './RTTI_Duration';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
collector: RTTI_Reference,
collectedDateTime: t.string,
_collectedDateTime: RTTI_Element,
collectedPeriod: RTTI_Period,
duration: RTTI_Duration,
quantity: RTTI_Quantity,
method: RTTI_CodeableConcept,
bodySite: RTTI_CodeableConcept,
fastingStatusCodeableConcept: RTTI_CodeableConcept,
fastingStatusDuration: RTTI_Duration
        });
        

        export var RTTI_Specimen_Collection:any = t.intersection([mandatory, partial]);
        

export type ISpecimen_Collection = t.TypeOf<typeof RTTI_Specimen_Collection>;
        
        