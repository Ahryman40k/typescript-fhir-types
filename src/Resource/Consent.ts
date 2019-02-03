
        import { Attachment } from '../Resource/Attachment';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Consent_Policy } from '../Resource/Consent_Policy';
import { Consent_Provision } from '../Resource/Consent_Provision';
import { Consent_Verification } from '../Resource/Consent_Verification';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. 
         */
        export class Consent  {

            constructor() {
                this.Scope = new CodeableConcept();
this.Category = new Array<CodeableConcept>();
            }

            
                /**
                 * This is a Consent resource
                 */
                ResourceType: string = 'Consent;'
                

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
                 * Unique identifier for this copy of the Consent Statement.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * Indicates the current state of this consent.
                 */
                Status? : Code;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.
                 */
                Scope : CodeableConcept;
                

                /**
                 * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
                 */
                Category : Array<CodeableConcept>;
                

                /**
                 * The patient/healthcare consumer to whom this consent applies.
                 */
                Patient? : Reference;
                

                /**
                 * When this  Consent was issued / created / indexed.
                 */
                DateTime? : DateTime;
                

                /**
                 * Extensions for dateTime
                 */
                _dateTime? : Element;
                

                /**
                 * Either the Grantor, which is the entity responsible for granting the rights listed in a Consent Directive or the Grantee, which is the entity responsible for complying with the Consent Directive, including any obligations or limitations on authorizations and enforcement of prohibitions.
                 */
                Performer? : Array<Reference>;
                

                /**
                 * The organization that manages the consent, and the framework within which it is executed.
                 */
                Organization? : Array<Reference>;
                

                /**
                 * The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.
                 */
                SourceAttachment? : Attachment;
                

                /**
                 * The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.
                 */
                SourceIdentifier? : Identifier;
                

                /**
                 * The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.
                 */
                SourceReference? : Reference;
                

                /**
                 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
                 */
                Policy? : Array<Consent_Policy>;
                

                /**
                 * A reference to the specific base computable regulation or policy.
                 */
                PolicyRule? : CodeableConcept;
                

                /**
                 * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
                 */
                Verification? : Array<Consent_Verification>;
                

                /**
                 * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
                 */
                Provision? : Consent_Provision;
                
        }
        