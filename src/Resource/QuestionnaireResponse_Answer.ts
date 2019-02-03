
        import { Attachment } from '../Resource/Attachment';
import { Coding } from '../Resource/Coding';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Quantity } from '../Resource/Quantity';
import { QuestionnaireResponse_Item } from '../Resource/QuestionnaireResponse_Item';
import { Reference } from '../Resource/Reference';

        

        /**
         * A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. 
         */
        export class QuestionnaireResponse_Answer  {

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
                 * The answer (or one of the answers) provided by the respondent to the question.
                 */
                ValueBoolean? : Boolean;
                

                /**
                 * Extensions for valueBoolean
                 */
                _valueBoolean? : Element;
                

                /**
                 * The answer (or one of the answers) provided by the respondent to the question.
                 */
                ValueDecimal? : Number;
                

                /**
                 * Extensions for valueDecimal
                 */
                _valueDecimal? : Element;
                

                /**
                 * The answer (or one of the answers) provided by the respondent to the question.
                 */
                ValueInteger? : Number;
                

                /**
                 * Extensions for valueInteger
                 */
                _valueInteger? : Element;
                

                /**
                 * The answer (or one of the answers) provided by the respondent to the question.
                 */
                ValueDate? : String;
                

                /**
                 * Extensions for valueDate
                 */
                _valueDate? : Element;
                

                /**
                 * The answer (or one of the answers) provided by the respondent to the question.
                 */
                ValueDateTime? : String;
                

                /**
                 * Extensions for valueDateTime
                 */
                _valueDateTime? : Element;
                

                /**
                 * The answer (or one of the answers) provided by the respondent to the question.
                 */
                ValueTime? : String;
                

                /**
                 * Extensions for valueTime
                 */
                _valueTime? : Element;
                

                /**
                 * The answer (or one of the answers) provided by the respondent to the question.
                 */
                ValueString? : String;
                

                /**
                 * Extensions for valueString
                 */
                _valueString? : Element;
                

                /**
                 * The answer (or one of the answers) provided by the respondent to the question.
                 */
                ValueUri? : String;
                

                /**
                 * Extensions for valueUri
                 */
                _valueUri? : Element;
                

                /**
                 * The answer (or one of the answers) provided by the respondent to the question.
                 */
                ValueAttachment? : Attachment;
                

                /**
                 * The answer (or one of the answers) provided by the respondent to the question.
                 */
                ValueCoding? : Coding;
                

                /**
                 * The answer (or one of the answers) provided by the respondent to the question.
                 */
                ValueQuantity? : Quantity;
                

                /**
                 * The answer (or one of the answers) provided by the respondent to the question.
                 */
                ValueReference? : Reference;
                

                /**
                 * Nested groups and/or questions found within this particular answer.
                 */
                Item? : Array<QuestionnaireResponse_Item>;
                
        }
        