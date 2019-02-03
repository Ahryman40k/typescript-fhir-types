
        import { Annotation } from '../Resource/Annotation';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { ContactDetail } from '../Resource/ContactDetail';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Markdown } from '../Scalar/Markdown';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Reference } from '../Resource/Reference';
import { RelatedArtifact } from '../Resource/RelatedArtifact';
import { ResearchStudy_Arm } from '../Resource/ResearchStudy_Arm';
import { ResearchStudy_Objective } from '../Resource/ResearchStudy_Objective';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum ResearchStudyStatusKind {
                active,
administrativelyCompleted,
approved,
closedToAccrual,
closedToAccrualAndIntervention,
completed,
disapproved,
inReview,
temporarilyClosedToAccrual,
temporarilyClosedToAccrualAndIntervention,
withdrawn
            }

        /**
         * A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects. 
         */
        export class ResearchStudy  {

            constructor() {
                
            }

            
                /**
                 * This is a ResearchStudy resource
                 */
                ResourceType: string = 'ResearchStudy;'
                

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
                 * Identifiers assigned to this research study by the sponsor or other systems.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * A short, descriptive user-friendly label for the study.
                 */
                Title? : String;
                

                /**
                 * Extensions for title
                 */
                _title? : Element;
                

                /**
                 * The set of steps expected to be performed as part of the execution of the study.
                 */
                Protocol? : Array<Reference>;
                

                /**
                 * A larger research study of which this particular study is a component or step.
                 */
                PartOf? : Array<Reference>;
                

                /**
                 * The current state of the study.
                 */
                Status? : ResearchStudyStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * The type of study based upon the intent of the study's activities. A classification of the intent of the study.
                 */
                PrimaryPurposeType? : CodeableConcept;
                

                /**
                 * The stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
                 */
                Phase? : CodeableConcept;
                

                /**
                 * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
                 */
                Category? : Array<CodeableConcept>;
                

                /**
                 * The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
                 */
                Focus? : Array<CodeableConcept>;
                

                /**
                 * The condition that is the focus of the study.  For example, In a study to examine risk factors for Lupus, might have as an inclusion criterion "healthy volunteer", but the target condition code would be a Lupus SNOMED code.
                 */
                Condition? : Array<CodeableConcept>;
                

                /**
                 * Contact details to assist a user in learning more about or engaging with the study.
                 */
                Contact? : Array<ContactDetail>;
                

                /**
                 * Citations, references and other related documents.
                 */
                RelatedArtifact? : Array<RelatedArtifact>;
                

                /**
                 * Key terms to aid in searching for or filtering the study.
                 */
                Keyword? : Array<CodeableConcept>;
                

                /**
                 * Indicates a country, state or other region where the study is taking place.
                 */
                Location? : Array<CodeableConcept>;
                

                /**
                 * A full description of how the study is being conducted.
                 */
                Description? : Markdown;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * Reference to a Group that defines the criteria for and quantity of subjects participating in the study.  E.g. " 200 female Europeans between the ages of 20 and 45 with early onset diabetes".
                 */
                Enrollment? : Array<Reference>;
                

                /**
                 * Identifies the start date and the expected (or actual, depending on status) end date for the study.
                 */
                Period? : Period;
                

                /**
                 * An organization that initiates the investigation and is legally responsible for the study.
                 */
                Sponsor? : Reference;
                

                /**
                 * A researcher in a study who oversees multiple aspects of the study, such as concept development, protocol writing, protocol submission for IRB approval, participant recruitment, informed consent, data collection, analysis, interpretation and presentation.
                 */
                PrincipalInvestigator? : Reference;
                

                /**
                 * A facility in which study activities are conducted.
                 */
                Site? : Array<Reference>;
                

                /**
                 * A description and/or code explaining the premature termination of the study.
                 */
                ReasonStopped? : CodeableConcept;
                

                /**
                 * Comments made about the study by the performer, subject or other participants.
                 */
                Note? : Array<Annotation>;
                

                /**
                 * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
                 */
                Arm? : Array<ResearchStudy_Arm>;
                

                /**
                 * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
                 */
                Objective? : Array<ResearchStudy_Objective>;
                
        }
        