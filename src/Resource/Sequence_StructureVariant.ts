
        import { Decimal } from '../Scalar/Decimal';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Integer } from '../Scalar/Integer';
import { Sequence_Inner } from '../Resource/Sequence_Inner';
import { Sequence_Outer } from '../Resource/Sequence_Outer';

        

        /**
         * Raw data describing a biological sequence. 
         */
        export class Sequence_StructureVariant  {

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
                 * Identify the exact boundaries of variant sequences. Each type of structure variant requires the DNA duplex to be broken and rejoined, and this creates a new sequence of bases at the rejoined sites, known as breakpoints or boundaries.
                 */
                Precision? : String;
                

                /**
                 * Extensions for precision
                 */
                _precision? : Element;
                

                /**
                 * Structural Variant reported aCGH ratio.
                 */
                ReportedaCGHRatio? : Decimal;
                

                /**
                 * Extensions for reportedaCGHRatio
                 */
                _reportedaCGHRatio? : Element;
                

                /**
                 * Length of the variant choromosome.
                 */
                Length? : Integer;
                

                /**
                 * Extensions for length
                 */
                _length? : Element;
                

                /**
                 * Structural variant outer.
                 */
                Outer? : Sequence_Outer;
                

                /**
                 * Structural variant inner.
                 */
                Inner? : Sequence_Inner;
                
        }
        