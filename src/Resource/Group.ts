
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Group_Characteristic } from '../Resource/Group_Characteristic';
import { Group_Member } from '../Resource/Group_Member';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { ResourceList } from '../Union/ResourceList';
import { UnsignedInt } from '../Scalar/UnsignedInt';
import { Uri } from '../Scalar/Uri';

        export enum GroupTypeKind {
                person,
animal,
practitioner,
device,
medication,
substance
            }

        /**
         * Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. 
         */
        export class Group  {

            constructor() {
                
            }

            
                /**
                 * This is a Group resource
                 */
                ResourceType: string = 'Group;'
                

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
                 * A unique business identifier for this group.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * Indicates whether the record for the group is available for use or is merely being retained for historical purposes.
                 */
                Active? : Boolean;
                

                /**
                 * Extensions for active
                 */
                _active? : Element;
                

                /**
                 * Identifies the broad classification of the kind of resources the group includes.
                 */
                Type? : GroupTypeKind;
                

                /**
                 * Extensions for type
                 */
                _type? : Element;
                

                /**
                 * If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.
                 */
                Actual? : Boolean;
                

                /**
                 * Extensions for actual
                 */
                _actual? : Element;
                

                /**
                 * Provides a specific type of resource the group includes; e.g. "cow", "syringe", etc.
                 */
                Code? : CodeableConcept;
                

                /**
                 * A label assigned to the group for human identification and communication.
                 */
                Name? : String;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * A count of the number of resource instances that are part of the group.
                 */
                Quantity? : UnsignedInt;
                

                /**
                 * Extensions for quantity
                 */
                _quantity? : Element;
                

                /**
                 * Identifies traits whose presence r absence is shared by members of the group.
                 */
                Characteristic? : Array<Group_Characteristic>;
                

                /**
                 * Identifies the resource instances that are members of the group.
                 */
                Member? : Array<Group_Member>;
                
        }
        