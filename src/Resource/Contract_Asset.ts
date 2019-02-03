
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Coding } from '../Resource/Coding';
import { Contract_Answer } from '../Resource/Contract_Answer';
import { Contract_Context } from '../Resource/Contract_Context';
import { Contract_ValuedItem } from '../Resource/Contract_ValuedItem';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Period } from '../Resource/Period';
import { Reference } from '../Resource/Reference';
import { UnsignedInt } from '../Scalar/UnsignedInt';

        

        /**
         * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. 
         */
        export class Contract_Asset  {

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
                 * Differentiates the kind of the asset .
                 */
                Scope? : CodeableConcept;
                

                /**
                 * Target entity type about which the term may be concerned.
                 */
                Type? : Array<CodeableConcept>;
                

                /**
                 * Associated entities.
                 */
                TypeReference? : Array<Reference>;
                

                /**
                 * May be a subtype or part of an offered asset.
                 */
                Subtype? : Array<CodeableConcept>;
                

                /**
                 * Specifies the applicability of the term to an asset resource instance, and instances it refers to orinstances that refer to it, and/or are owned by the offeree.
                 */
                Relationship? : Coding;
                

                /**
                 * Circumstance of the asset.
                 */
                Context? : Array<Contract_Context>;
                

                /**
                 * Description of the quality and completeness of the asset that imay be a factor in its valuation.
                 */
                Condition? : String;
                

                /**
                 * Extensions for condition
                 */
                _condition? : Element;
                

                /**
                 * Type of Asset availability for use or ownership.
                 */
                PeriodType? : Array<CodeableConcept>;
                

                /**
                 * Asset relevant contractual time period.
                 */
                Period? : Array<Period>;
                

                /**
                 * Time period of asset use.
                 */
                UsePeriod? : Array<Period>;
                

                /**
                 * Clause or question text (Prose Object) concerning the asset in a linked form, such as a QuestionnaireResponse used in the formation of the contract.
                 */
                Text? : String;
                

                /**
                 * Extensions for text
                 */
                _text? : Element;
                

                /**
                 * Id [identifier??] of the clause or question text about the asset in the referenced form or QuestionnaireResponse.
                 */
                LinkId? : Array<String>;
                

                /**
                 * Extensions for linkId
                 */
                _linkId? : Array<Element>;
                

                /**
                 * Response to assets.
                 */
                Answer? : Array<Contract_Answer>;
                

                /**
                 * Security labels that protects the asset.
                 */
                SecurityLabelNumber? : Array<UnsignedInt>;
                

                /**
                 * Extensions for securityLabelNumber
                 */
                _securityLabelNumber? : Array<Element>;
                

                /**
                 * Contract Valued Item List.
                 */
                ValuedItem? : Array<Contract_ValuedItem>;
                
        }
        