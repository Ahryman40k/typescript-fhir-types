
        import { Annotation } from '../Resource/Annotation';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Decimal } from '../Scalar/Decimal';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Integer } from '../Scalar/Integer';
import { Quantity } from '../Resource/Quantity';
import { VisionPrescription_Prism } from '../Resource/VisionPrescription_Prism';

        export enum VisionPrescription_DispenseEyeKind {
                right,
left
            }

        /**
         * An authorization for the supply of glasses and/or contact lenses to a patient. 
         */
        export class VisionPrescription_Dispense  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                Id? : String;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Identifies the type of vision correction product which is required for the patient.
                 */
                Product? : CodeableConcept;
                

                /**
                 * The eye for which the lens applies.
                 */
                Eye? : VisionPrescription_DispenseEyeKind;
                

                /**
                 * Extensions for eye
                 */
                _eye? : Element;
                

                /**
                 * Lens power measured in dioptres (0.25 units).
                 */
                Sphere? : Decimal;
                

                /**
                 * Extensions for sphere
                 */
                _sphere? : Element;
                

                /**
                 * Power adjustment for astigmatism measured in dioptres (0.25 units).
                 */
                Cylinder? : Decimal;
                

                /**
                 * Extensions for cylinder
                 */
                _cylinder? : Element;
                

                /**
                 * Adjustment for astigmatism measured in integer degrees.
                 */
                Axis? : Integer;
                

                /**
                 * Extensions for axis
                 */
                _axis? : Element;
                

                /**
                 * Allows for adjustment on two axis.
                 */
                Prism? : Array<VisionPrescription_Prism>;
                

                /**
                 * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
                 */
                Add? : Decimal;
                

                /**
                 * Extensions for add
                 */
                _add? : Element;
                

                /**
                 * Contact lens power measured in dioptres (0.25 units).
                 */
                Power? : Decimal;
                

                /**
                 * Extensions for power
                 */
                _power? : Element;
                

                /**
                 * Back curvature measured in millimetres.
                 */
                BackCurve? : Decimal;
                

                /**
                 * Extensions for backCurve
                 */
                _backCurve? : Element;
                

                /**
                 * Contact lens diameter measured in millimetres.
                 */
                Diameter? : Decimal;
                

                /**
                 * Extensions for diameter
                 */
                _diameter? : Element;
                

                /**
                 * The recommended maximum wear period for the lens.
                 */
                Duration? : Quantity;
                

                /**
                 * Special color or pattern.
                 */
                Color? : String;
                

                /**
                 * Extensions for color
                 */
                _color? : Element;
                

                /**
                 * Brand recommendations or restrictions.
                 */
                Brand? : String;
                

                /**
                 * Extensions for brand
                 */
                _brand? : Element;
                

                /**
                 * Notes for special requirements such as coatings and lens materials.
                 */
                Note? : Array<Annotation>;
                
        }
        