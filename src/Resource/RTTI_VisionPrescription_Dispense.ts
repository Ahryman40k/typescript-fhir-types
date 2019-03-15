
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_VisionPrescription_Prism, IVisionPrescription_Prism} from './RTTI_VisionPrescription_Prism';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';

export enum VisionPrescription_DispenseEyeKind {
                right = 'right',
left = 'left'
            }
const VisionPrescription_DispenseEyeKindKeys = t.keyof({
                [VisionPrescription_DispenseEyeKind.right]: null,
[VisionPrescription_DispenseEyeKind.left]: null
            });


            export interface IVisionPrescription_Dispense {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * Identifies the type of vision correction product which is required for the patient.
                     */
                    product? : ICodeableConcept;
                    

                    /**
                     * The eye for which the lens applies.
                     */
                    eye? : VisionPrescription_DispenseEyeKind;
                    

                    /**
                     * Extensions for eye
                     */
                    _eye? : IElement;
                    

                    /**
                     * Lens power measured in dioptres (0.25 units).
                     */
                    sphere? : number;
                    

                    /**
                     * Extensions for sphere
                     */
                    _sphere? : IElement;
                    

                    /**
                     * Power adjustment for astigmatism measured in dioptres (0.25 units).
                     */
                    cylinder? : number;
                    

                    /**
                     * Extensions for cylinder
                     */
                    _cylinder? : IElement;
                    

                    /**
                     * Adjustment for astigmatism measured in integer degrees.
                     */
                    axis? : number;
                    

                    /**
                     * Extensions for axis
                     */
                    _axis? : IElement;
                    

                    /**
                     * Allows for adjustment on two axis.
                     */
                    prism? : IVisionPrescription_Prism[];
                    

                    /**
                     * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
                     */
                    add? : number;
                    

                    /**
                     * Extensions for add
                     */
                    _add? : IElement;
                    

                    /**
                     * Contact lens power measured in dioptres (0.25 units).
                     */
                    power? : number;
                    

                    /**
                     * Extensions for power
                     */
                    _power? : IElement;
                    

                    /**
                     * Back curvature measured in millimetres.
                     */
                    backCurve? : number;
                    

                    /**
                     * Extensions for backCurve
                     */
                    _backCurve? : IElement;
                    

                    /**
                     * Contact lens diameter measured in millimetres.
                     */
                    diameter? : number;
                    

                    /**
                     * Extensions for diameter
                     */
                    _diameter? : IElement;
                    

                    /**
                     * The recommended maximum wear period for the lens.
                     */
                    duration? : IQuantity;
                    

                    /**
                     * Special color or pattern.
                     */
                    color? : string;
                    

                    /**
                     * Extensions for color
                     */
                    _color? : IElement;
                    

                    /**
                     * Brand recommendations or restrictions.
                     */
                    brand? : string;
                    

                    /**
                     * Extensions for brand
                     */
                    _brand? : IElement;
                    

                    /**
                     * Notes for special requirements such as coatings and lens materials.
                     */
                    note? : IAnnotation[];
                    
            }
        


        export const RTTI_VisionPrescription_Dispense: t.Type<IVisionPrescription_Dispense> = t.recursion( 'IVisionPrescription_Dispense', () =>
                
        t.partial({
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
        })
        
        );
        

        