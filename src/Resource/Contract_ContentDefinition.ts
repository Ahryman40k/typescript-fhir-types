
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Markdown } from '../Scalar/Markdown';
import { Reference } from '../Resource/Reference';

        

        /**
         * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. 
         */
        export class Contract_ContentDefinition  {

            constructor() {
                this.type = new CodeableConcept();
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
                 * Precusory content structure and use, i.e., a boilerplate, template, application for a contract such as an insurance policy or benefits under a program, e.g., workers compensation.
                 */
                type : CodeableConcept;
                

                /**
                 * Detailed Precusory content type.
                 */
                subType? : CodeableConcept;
                

                /**
                 * The  individual or organization that published the Contract precursor content.
                 */
                publisher? : Reference;
                

                /**
                 * The date (and optionally time) when the contract was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the contract changes.
                 */
                publicationDate? : DateTime;
                

                /**
                 * Extensions for publicationDate
                 */
                _publicationDate? : Element;
                

                /**
                 * draft | active | retired | unknown.
                 */
                publicationStatus? : Code;
                

                /**
                 * Extensions for publicationStatus
                 */
                _publicationStatus? : Element;
                

                /**
                 * A copyright statement relating to Contract precursor content. Copyright statements are generally legal restrictions on the use and publishing of the Contract precursor content.
                 */
                copyright? : Markdown;
                

                /**
                 * Extensions for copyright
                 */
                _copyright? : Element;
                
        }
        