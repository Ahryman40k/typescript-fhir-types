
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DocumentReference_Agent } from '../Resource/DocumentReference_Agent';
import { DocumentReference_Content } from '../Resource/DocumentReference_Content';
import { DocumentReference_Context } from '../Resource/DocumentReference_Context';
import { DocumentReference_RelatesTo } from '../Resource/DocumentReference_RelatesTo';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Instant } from '../Scalar/Instant';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum DocumentReferenceStatusKind {
                current,
superseded,
enteredInError
            }

        /**
         * A reference to a document. 
         */
        export class DocumentReference  {

            constructor() {
                this.Content = new Array<DocumentReference_Content>();
            }

            
                /**
                 * This is a DocumentReference resource
                 */
                ResourceType: string = 'DocumentReference;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                Id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                Meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                ImplicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                Language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                Text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                Contained? : Array<ResourceList>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Document identifier as assigned by the source of the document. This identifier is specific to this version of the document. This unique identifier may be used elsewhere to identify this version of the document.
                 */
                MasterIdentifier? : Identifier;
                

                /**
                 * Other identifiers associated with the document, including version independent identifiers.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * The status of this document reference.
                 */
                Status? : DocumentReferenceStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * The status of the underlying document.
                 */
                DocStatus? : Code;
                

                /**
                 * Extensions for docStatus
                 */
                _docStatus? : Element;
                

                /**
                 * Specifies the particular kind of document referenced  (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the document referenced.
                 */
                Type? : CodeableConcept;
                

                /**
                 * A categorization for the type of document referenced - helps for indexing and searching. This may be implied by or derived from the code specified in the DocumentReference.type.
                 */
                Category? : Array<CodeableConcept>;
                

                /**
                 * Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).
                 */
                Subject? : Reference;
                

                /**
                 * When the document reference was created.
                 */
                Date? : Instant;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * An actor taking an active role in the document.
                 */
                Agent? : Array<DocumentReference_Agent>;
                

                /**
                 * Which person or organization authenticates that this document is valid.
                 */
                Authenticator? : Reference;
                

                /**
                 * Identifies the organization or group who is responsible for ongoing maintenance of and access to the document.
                 */
                Custodian? : Reference;
                

                /**
                 * Relationships that this document has with other document references that already exist.
                 */
                RelatesTo? : Array<DocumentReference_RelatesTo>;
                

                /**
                 * Human-readable description of the source document.
                 */
                Description? : String;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * A set of Security-Tag codes specifying the level of privacy/security of the Document. Note that DocumentReference.meta.security contains the security labels of the "reference" to the document, while DocumentReference.securityLabel contains a snapshot of the security labels on the document the reference refers to.
                 */
                SecurityLabel? : Array<CodeableConcept>;
                

                /**
                 * The document and format referenced. There may be multiple content element repetitions, each with a different format.
                 */
                Content : Array<DocumentReference_Content>;
                

                /**
                 * The clinical context in which the document was prepared.
                 */
                Context? : DocumentReference_Context;
                
        }
        