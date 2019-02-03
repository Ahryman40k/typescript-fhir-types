
        import { Coding } from '../Resource/Coding';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Quantity } from '../Resource/Quantity';
import { Reference } from '../Resource/Reference';

        export enum Questionnaire_EnableWhenOperatorKind {
                exists,
equal,
notEqual,
greater,
lower,
greaterOrEqual,
lowerOrEqual
            }

        /**
         * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. 
         */
        export class Questionnaire_EnableWhen  {

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
                 * The linkId for the question whose answer (or lack of answer) governs whether this item is enabled.
                 */
                Question? : String;
                

                /**
                 * Extensions for question
                 */
                _question? : Element;
                

                /**
                 * Specifies the criteria by which the question is enabled.
                 */
                Operator? : Questionnaire_EnableWhenOperatorKind;
                

                /**
                 * Extensions for operator
                 */
                _operator? : Element;
                

                /**
                 * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
                 */
                AnswerBoolean? : Boolean;
                

                /**
                 * Extensions for answerBoolean
                 */
                _answerBoolean? : Element;
                

                /**
                 * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
                 */
                AnswerDecimal? : Number;
                

                /**
                 * Extensions for answerDecimal
                 */
                _answerDecimal? : Element;
                

                /**
                 * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
                 */
                AnswerInteger? : Number;
                

                /**
                 * Extensions for answerInteger
                 */
                _answerInteger? : Element;
                

                /**
                 * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
                 */
                AnswerDate? : String;
                

                /**
                 * Extensions for answerDate
                 */
                _answerDate? : Element;
                

                /**
                 * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
                 */
                AnswerDateTime? : String;
                

                /**
                 * Extensions for answerDateTime
                 */
                _answerDateTime? : Element;
                

                /**
                 * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
                 */
                AnswerTime? : String;
                

                /**
                 * Extensions for answerTime
                 */
                _answerTime? : Element;
                

                /**
                 * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
                 */
                AnswerString? : String;
                

                /**
                 * Extensions for answerString
                 */
                _answerString? : Element;
                

                /**
                 * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
                 */
                AnswerCoding? : Coding;
                

                /**
                 * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
                 */
                AnswerQuantity? : Quantity;
                

                /**
                 * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
                 */
                AnswerReference? : Reference;
                
        }
        