
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_ProdCharacteristic} from './RTTI_ProdCharacteristic';
import {RTTI_ProductShelfLife} from './RTTI_ProductShelfLife';




        const mandatory = t.type({
           type: RTTI_CodeableConcept,
quantity: RTTI_Quantity
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
material: t.array(RTTI_CodeableConcept),
alternateMaterial: t.array(RTTI_CodeableConcept),
device: t.array(RTTI_Reference),
manufacturedItem: t.array(RTTI_Reference),
packageItem: t.array(RTTI_MedicinalProductPackaged_PackageItem),
physicalCharacteristics: RTTI_ProdCharacteristic,
otherCharacteristics: t.array(RTTI_CodeableConcept),
shelfLifeStorage: t.array(RTTI_ProductShelfLife),
manufacturer: t.array(RTTI_Reference)
        });
        

        export var RTTI_MedicinalProductPackaged_PackageItem:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductPackaged_PackageItem = t.TypeOf<typeof RTTI_MedicinalProductPackaged_PackageItem>;
        
        