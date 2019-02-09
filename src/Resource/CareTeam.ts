
        import { Annotation } from '../Resource/Annotation';
import { CareTeam_Participant } from '../Resource/CareTeam_Participant';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { ContactPoint } from '../Resource/ContactPoint';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum CareTeamStatusKind {
                proposed,
active,
suspended,
inactive,
enteredInError
            }

        /**
         * The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. 
         */
        export class CareTeam  {

            constructor() {
                
            }

            
                /**
                 * This is a CareTeam resource
                 */
                resourceType: string = 'CareTeam;'
                

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
                 * Business identifiers assigned to this care team by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
                 */
                identifier? : Identifier[];
                

                /**
                 * Indicates the current state of the care team.
                 */
                status? : CareTeamStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Identifies what kind of team.  This is to support differentiation between multiple co-existing teams, such as care plan team, episode of care team, longitudinal care team.
                 */
                category? : CodeableConcept[];
                

                /**
                 * A label for human use intended to distinguish like teams.  E.g. the "red" vs. "green" trauma teams.
                 */
                name? : string;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * Identifies the patient or group whose intended care is handled by the team.
                 */
                subject? : Reference;
                

                /**
                 * The encounter or episode of care that establishes the context for this care team.
                 */
                context? : Reference;
                

                /**
                 * Indicates when the team did (or is intended to) come into effect and end.
                 */
                period? : Period;
                

                /**
                 * Identifies all people and organizations who are expected to be involved in the care team.
                 */
                participant? : CareTeam_Participant[];
                

                /**
                 * Describes why the care team exists.
                 */
                reasonCode? : CodeableConcept[];
                

                /**
                 * Condition(s) that this care team addresses.
                 */
                reasonReference? : Reference[];
                

                /**
                 * The organization responsible for the care team.
                 */
                managingOrganization? : Reference[];
                

                /**
                 * A central contact detail for the care team (that applies to all members).
                 */
                telecom? : ContactPoint[];
                

                /**
                 * Comments made about the CareTeam.
                 */
                note? : Annotation[];
                
        }
        