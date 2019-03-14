
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_ProdCharacteristic} from './RTTI_ProdCharacteristic';




        const mandatory = t.type({
           resourceType: t.string,
manufacturedDoseForm: RTTI_CodeableConcept,
quantity: RTTI_Quantity
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
unitOfPresentation: RTTI_CodeableConcept,
manufacturer: t.array(RTTI_Reference),
ingredient: t.array(RTTI_Reference),
physicalCharacteristics: RTTI_ProdCharacteristic,
otherCharacteristics: t.array(RTTI_CodeableConcept)
        });
        

        export var RTTI_MedicinalProductManufactured:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductManufactured = t.TypeOf<typeof RTTI_MedicinalProductManufactured>;
        
        