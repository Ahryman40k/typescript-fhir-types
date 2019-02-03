
        import { Attachment } from '../Resource/Attachment';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Quantity } from '../Resource/Quantity';

        

        /**
         * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. 
         */
        export class ProdCharacteristic  {

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
                 * Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
                 */
                Height? : Quantity;
                

                /**
                 * Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
                 */
                Width? : Quantity;
                

                /**
                 * Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
                 */
                Depth? : Quantity;
                

                /**
                 * Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
                 */
                Weight? : Quantity;
                

                /**
                 * Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
                 */
                NominalVolume? : Quantity;
                

                /**
                 * Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
                 */
                ExternalDiameter? : Quantity;
                

                /**
                 * Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
                 */
                Shape? : String;
                

                /**
                 * Extensions for shape
                 */
                _shape? : Element;
                

                /**
                 * Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
                 */
                Color? : Array<String>;
                

                /**
                 * Extensions for color
                 */
                _color? : Array<Element>;
                

                /**
                 * Where applicable, the imprint can be specified as text.
                 */
                Imprint? : Array<String>;
                

                /**
                 * Extensions for imprint
                 */
                _imprint? : Array<Element>;
                

                /**
                 * Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations.
                 */
                Image? : Array<Attachment>;
                

                /**
                 * Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
                 */
                Scoring? : CodeableConcept;
                
        }
        