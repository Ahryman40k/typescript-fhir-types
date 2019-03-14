
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';




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
count: t.number,
_count: RTTI_Element,
location: RTTI_Reference,
subject: RTTI_Reference,
manufactureDate: t.string,
_manufactureDate: RTTI_Element,
expiryDate: t.string,
_expiryDate: RTTI_Element,
currentSWVersion: t.string,
_currentSWVersion: RTTI_Element,
lotNumber: t.string,
_lotNumber: RTTI_Element,
serialNumber: t.string,
_serialNumber: RTTI_Element,
carrierAIDC: t.string,
_carrierAIDC: RTTI_Element,
carrierHRF: t.string,
_carrierHRF: RTTI_Element
        });
        

        export var RTTI_ItemInstance:any = t.intersection([mandatory, partial]);
        

export type IItemInstance = t.TypeOf<typeof RTTI_ItemInstance>;
        
        