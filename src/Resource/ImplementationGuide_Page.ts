
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Reference } from '../Resource/Reference';

        export enum ImplementationGuidePageGenerationKind {
                html,
markdown,
xml,
generated
            }

        /**
         * A set of rules of how FHIR is used to solve a particular problem. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. 
         */
        export class ImplementationGuide_Page  {

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
                 * The source address for the page.
                 */
                nameUrl? : string;
                

                /**
                 * Extensions for nameUrl
                 */
                _nameUrl? : Element;
                

                /**
                 * The source address for the page.
                 */
                nameReference? : Reference;
                

                /**
                 * A short title used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
                 */
                title? : string;
                

                /**
                 * Extensions for title
                 */
                _title? : Element;
                

                /**
                 * A code that indicates how the page is generated.
                 */
                generation? : ImplementationGuidePageGenerationKind;
                

                /**
                 * Extensions for generation
                 */
                _generation? : Element;
                

                /**
                 * Nested Pages/Sections under this page.
                 */
                page? : ImplementationGuide_Page[];
                
        }
        