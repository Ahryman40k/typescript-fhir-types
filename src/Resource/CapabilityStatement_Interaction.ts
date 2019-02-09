
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Markdown } from '../Scalar/Markdown';

        export enum CapabilityStatementInteractionCodeKind {
                read,
vread,
update,
patch,
delete,
historyInstance,
historyType,
create,
searchType
            }

        /**
         * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. 
         */
        export class CapabilityStatement_Interaction  {

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
                 * Coded identifier of the operation, supported by the system resource.
                 */
                code? : CapabilityStatementInteractionCodeKind;
                

                /**
                 * Extensions for code
                 */
                _code? : Element;
                

                /**
                 * Guidance specific to the implementation of this operation, such as 'delete is a logical delete' or 'updates are only allowed with version id' or 'creates permitted from pre-authorized certificates only'.
                 */
                documentation? : Markdown;
                

                /**
                 * Extensions for documentation
                 */
                _documentation? : Element;
                
        }
        