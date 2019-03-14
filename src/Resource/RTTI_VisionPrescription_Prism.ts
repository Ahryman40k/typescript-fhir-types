
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum VisionPrescription_PrismBaseKind {
                up = 'up',
down = 'down',
in = 'in',
out = 'out'
            }
const VisionPrescription_PrismBaseKindKeys = t.keyof({
                [VisionPrescription_PrismBaseKind.up]: null,
[VisionPrescription_PrismBaseKind.down]: null,
[VisionPrescription_PrismBaseKind.in]: null,
[VisionPrescription_PrismBaseKind.out]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
amount: t.number,
_amount: RTTI_Element,
base: VisionPrescription_PrismBaseKindKeys,
_base: RTTI_Element
        });
        

        export var RTTI_VisionPrescription_Prism:any = t.intersection([mandatory, partial]);
        

export type IVisionPrescription_Prism = t.TypeOf<typeof RTTI_VisionPrescription_Prism>;
        
        