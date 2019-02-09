
        import { Annotation } from '../Resource/Annotation';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { List_Entry } from '../Resource/List_Entry';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum ListStatusKind {
                current,
retired,
enteredInError
            }
export enum ListModeKind {
                working,
snapshot,
changes
            }

        /**
         * A set of information summarized from a list of other resources. 
         */
        export class List  {

            constructor() {
                
            }

            
                /**
                 * This is a List resource
                 */
                resourceType: string = 'List;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                implicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                contained? : ResourceList[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * Identifier for the List assigned for business purposes outside the context of FHIR.
                 */
                identifier? : Identifier[];
                

                /**
                 * Indicates the current state of this list.
                 */
                status? : ListStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * How this list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.
                 */
                mode? : ListModeKind;
                

                /**
                 * Extensions for mode
                 */
                _mode? : Element;
                

                /**
                 * A label for the list assigned by the author.
                 */
                title? : string;
                

                /**
                 * Extensions for title
                 */
                _title? : Element;
                

                /**
                 * This code defines the purpose of the list - why it was created.
                 */
                code? : CodeableConcept;
                

                /**
                 * The common subject (or patient) of the resources that are in the list if there is one.
                 */
                subject? : Reference;
                

                /**
                 * The encounter that is the context in which this list was created.
                 */
                encounter? : Reference;
                

                /**
                 * The date that the list was prepared.
                 */
                date? : DateTime;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * The entity responsible for deciding what the contents of the list were. Where the list was created by a human, this is the same as the author of the list.
                 */
                source? : Reference;
                

                /**
                 * What order applies to the items in the list.
                 */
                orderedBy? : CodeableConcept;
                

                /**
                 * Comments that apply to the overall list.
                 */
                note? : Annotation[];
                

                /**
                 * Entries in this list.
                 */
                entry? : List_Entry[];
                

                /**
                 * If the list is empty, why the list is empty.
                 */
                emptyReason? : CodeableConcept;
                
        }
        