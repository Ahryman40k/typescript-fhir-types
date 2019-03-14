
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_DeviceDefinition_UdiDeviceIdentifier} from './RTTI_DeviceDefinition_UdiDeviceIdentifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_DeviceDefinition_DeviceName} from './RTTI_DeviceDefinition_DeviceName';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_DeviceDefinition_Specialization} from './RTTI_DeviceDefinition_Specialization';

import {RTTI_ProductShelfLife} from './RTTI_ProductShelfLife';
import {RTTI_ProdCharacteristic} from './RTTI_ProdCharacteristic';
import {RTTI_DeviceDefinition_Capability} from './RTTI_DeviceDefinition_Capability';
import {RTTI_DeviceDefinition_Property} from './RTTI_DeviceDefinition_Property';
import {RTTI_ContactPoint} from './RTTI_ContactPoint';
import {RTTI_Annotation} from './RTTI_Annotation';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_DeviceDefinition_Material} from './RTTI_DeviceDefinition_Material';




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
udiDeviceIdentifier: t.array(RTTI_DeviceDefinition_UdiDeviceIdentifier),
manufacturerString: t.string,
_manufacturerString: RTTI_Element,
manufacturerReference: RTTI_Reference,
deviceName: t.array(RTTI_DeviceDefinition_DeviceName),
modelNumber: t.string,
_modelNumber: RTTI_Element,
type: RTTI_CodeableConcept,
specialization: t.array(RTTI_DeviceDefinition_Specialization),
version: t.array(t.string),
_version: t.array(RTTI_Element),
safety: t.array(RTTI_CodeableConcept),
shelfLifeStorage: t.array(RTTI_ProductShelfLife),
physicalCharacteristics: RTTI_ProdCharacteristic,
languageCode: t.array(RTTI_CodeableConcept),
capability: t.array(RTTI_DeviceDefinition_Capability),
property: t.array(RTTI_DeviceDefinition_Property),
owner: RTTI_Reference,
contact: t.array(RTTI_ContactPoint),
url: t.string,
_url: RTTI_Element,
onlineInformation: t.string,
_onlineInformation: RTTI_Element,
note: t.array(RTTI_Annotation),
quantity: RTTI_Quantity,
parentDevice: RTTI_Reference,
material: t.array(RTTI_DeviceDefinition_Material)
        });
        

        export var RTTI_DeviceDefinition:any = t.intersection([mandatory, partial]);
        

export type IDeviceDefinition = t.TypeOf<typeof RTTI_DeviceDefinition>;
        
        