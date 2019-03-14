
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum Device_UdiCarrierEntryTypeKind {
                barcode = 'barcode',
rfid = 'rfid',
manual = 'manual',
card = 'card',
selfReported = 'selfReported',
unknown = 'unknown'
            }
const Device_UdiCarrierEntryTypeKindKeys = t.keyof({
                [Device_UdiCarrierEntryTypeKind.barcode]: null,
[Device_UdiCarrierEntryTypeKind.rfid]: null,
[Device_UdiCarrierEntryTypeKind.manual]: null,
[Device_UdiCarrierEntryTypeKind.card]: null,
[Device_UdiCarrierEntryTypeKind.selfReported]: null,
[Device_UdiCarrierEntryTypeKind.unknown]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
deviceIdentifier: t.string,
_deviceIdentifier: RTTI_Element,
issuer: t.string,
_issuer: RTTI_Element,
jurisdiction: t.string,
_jurisdiction: RTTI_Element,
carrierAIDC: t.string,
_carrierAIDC: RTTI_Element,
carrierHRF: t.string,
_carrierHRF: RTTI_Element,
entryType: Device_UdiCarrierEntryTypeKindKeys,
_entryType: RTTI_Element
        });
        

        export var RTTI_Device_UdiCarrier:any = t.intersection([mandatory, partial]);
        

export type IDevice_UdiCarrier = t.TypeOf<typeof RTTI_Device_UdiCarrier>;
        
        