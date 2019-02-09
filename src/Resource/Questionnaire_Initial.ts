
        import { Attachment } from '../Resource/Attachment';
import { Coding } from '../Resource/Coding';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Quantity } from '../Resource/Quantity';
import { Reference } from '../Resource/Reference';

        

        /**
         * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. 
         */
        export class Questionnaire_Initial  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                id? : string;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * The actual value to for an initial answer.
                 */
                valueBoolean? : boolean;
                

                /**
                 * Extensions for valueBoolean
                 */
                _valueBoolean? : Element;
                

                /**
                 * The actual value to for an initial answer.
                 */
                valueDecimal? : number;
                

                /**
                 * Extensions for valueDecimal
                 */
                _valueDecimal? : Element;
                

                /**
                 * The actual value to for an initial answer.
                 */
                valueInteger? : number;
                

                /**
                 * Extensions for valueInteger
                 */
                _valueInteger? : Element;
                

                /**
                 * The actual value to for an initial answer.
                 */
                valueDate? : string;
                

                /**
                 * Extensions for valueDate
                 */
                _valueDate? : Element;
                

                /**
                 * The actual value to for an initial answer.
                 */
                valueDateTime? : string;
                

                /**
                 * Extensions for valueDateTime
                 */
                _valueDateTime? : Element;
                

                /**
                 * The actual value to for an initial answer.
                 */
                valueTime? : string;
                

                /**
                 * Extensions for valueTime
                 */
                _valueTime? : Element;
                

                /**
                 * The actual value to for an initial answer.
                 */
                valueString? : string;
                

                /**
                 * Extensions for valueString
                 */
                _valueString? : Element;
                

                /**
                 * The actual value to for an initial answer.
                 */
                valueUri? : string;
                

                /**
                 * Extensions for valueUri
                 */
                _valueUri? : Element;
                

                /**
                 * The actual value to for an initial answer.
                 */
                valueAttachment? : Attachment;
                

                /**
                 * The actual value to for an initial answer.
                 */
                valueCoding? : Coding;
                

                /**
                 * The actual value to for an initial answer.
                 */
                valueQuantity? : Quantity;
                

                /**
                 * The actual value to for an initial answer.
                 */
                valueReference? : Reference;
                
        }
        