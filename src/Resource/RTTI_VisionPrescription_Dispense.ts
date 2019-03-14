
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_VisionPrescription_Prism} from './RTTI_VisionPrescription_Prism';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Annotation} from './RTTI_Annotation';

export enum VisionPrescription_DispenseEyeKind {
                right = 'right',
left = 'left'
            }
const VisionPrescription_DispenseEyeKindKeys = t.keyof({
                [VisionPrescription_DispenseEyeKind.right]: null,
[VisionPrescription_DispenseEyeKind.left]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
product: RTTI_CodeableConcept,
eye: VisionPrescription_DispenseEyeKindKeys,
_eye: RTTI_Element,
sphere: t.number,
_sphere: RTTI_Element,
cylinder: t.number,
_cylinder: RTTI_Element,
axis: t.number,
_axis: RTTI_Element,
prism: t.array(RTTI_VisionPrescription_Prism),
add: t.number,
_add: RTTI_Element,
power: t.number,
_power: RTTI_Element,
backCurve: t.number,
_backCurve: RTTI_Element,
diameter: t.number,
_diameter: RTTI_Element,
duration: RTTI_Quantity,
color: t.string,
_color: RTTI_Element,
brand: t.string,
_brand: RTTI_Element,
note: t.array(RTTI_Annotation)
        });
        

        export var RTTI_VisionPrescription_Dispense:any = t.intersection([mandatory, partial]);
        

export type IVisionPrescription_Dispense = t.TypeOf<typeof RTTI_VisionPrescription_Dispense>;
        
        