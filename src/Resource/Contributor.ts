
        import { ContactDetail } from '../Resource/ContactDetail';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';

        export enum ContributorTypeKind {
                author,
editor,
reviewer,
endorser
            }

        /**
         * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. 
         */
        export class Contributor  {

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
                 * The type of contributor.
                 */
                type? : ContributorTypeKind;
                

                /**
                 * Extensions for type
                 */
                _type? : Element;
                

                /**
                 * The name of the individual or organization responsible for the contribution.
                 */
                name? : string;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * Contact details to assist a user in finding and communicating with the contributor.
                 */
                contact? : ContactDetail[];
                
        }
        