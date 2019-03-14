
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_ProductShelfLife} from './RTTI_ProductShelfLife';
import {RTTI_ProdCharacteristic} from './RTTI_ProdCharacteristic';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_MedicinalProductDeviceSpec_Material} from './RTTI_MedicinalProductDeviceSpec_Material';




        const mandatory = t.type({
           resourceType: t.string,
type: RTTI_CodeableConcept
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
tradeName: t.string,
_tradeName: RTTI_Element,
quantity: RTTI_Quantity,
listingNumber: t.string,
_listingNumber: RTTI_Element,
modelNumber: t.string,
_modelNumber: RTTI_Element,
sterilityIndicator: RTTI_CodeableConcept,
sterilisationRequirement: RTTI_CodeableConcept,
usage: RTTI_CodeableConcept,
nomenclature: t.array(RTTI_CodeableConcept),
shelfLifeStorage: t.array(RTTI_ProductShelfLife),
physicalCharacteristics: RTTI_ProdCharacteristic,
otherCharacteristics: t.array(RTTI_CodeableConcept),
batchIdentifier: t.array(RTTI_Identifier),
manufacturer: t.array(RTTI_Reference),
material: t.array(RTTI_MedicinalProductDeviceSpec_Material)
        });
        

        export var RTTI_MedicinalProductDeviceSpec:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductDeviceSpec = t.TypeOf<typeof RTTI_MedicinalProductDeviceSpec>;
        
        