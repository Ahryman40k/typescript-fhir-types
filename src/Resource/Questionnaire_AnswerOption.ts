
        import { Coding } from '../Resource/Coding';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Reference } from '../Resource/Reference';

        

        /**
         * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. 
         */
        export class Questionnaire_AnswerOption  {

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
                 * A potential answer that's allowed as the answer to this question.
                 */
                ValueInteger? : Number;
                

                /**
                 * Extensions for valueInteger
                 */
                _valueInteger? : Element;
                

                /**
                 * A potential answer that's allowed as the answer to this question.
                 */
                ValueDate? : String;
                

                /**
                 * Extensions for valueDate
                 */
                _valueDate? : Element;
                

                /**
                 * A potential answer that's allowed as the answer to this question.
                 */
                ValueTime? : String;
                

                /**
                 * Extensions for valueTime
                 */
                _valueTime? : Element;
                

                /**
                 * A potential answer that's allowed as the answer to this question.
                 */
                ValueString? : String;
                

                /**
                 * Extensions for valueString
                 */
                _valueString? : Element;
                

                /**
                 * A potential answer that's allowed as the answer to this question.
                 */
                ValueCoding? : Coding;
                

                /**
                 * A potential answer that's allowed as the answer to this question.
                 */
                ValueReference? : Reference;
                

                /**
                 * Indicates whether the answer value is selected when the list of possible answers is initially shown.
                 */
                InitialSelected? : Boolean;
                

                /**
                 * Extensions for initialSelected
                 */
                _initialSelected? : Element;
                
        }
        