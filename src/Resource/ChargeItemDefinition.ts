
        import { Canonical } from '../Scalar/Canonical';
import { ChargeItemDefinition_Applicability } from '../Resource/ChargeItemDefinition_Applicability';
import { ChargeItemDefinition_PropertyGroup } from '../Resource/ChargeItemDefinition_PropertyGroup';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { ContactDetail } from '../Resource/ContactDetail';
import { Date } from '../Scalar/Date';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Markdown } from '../Scalar/Markdown';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';
import { UsageContext } from '../Resource/UsageContext';

        export enum ChargeItemDefinitionStatusKind {
                draft,
active,
retired,
unknown
            }

        /**
         * The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. 
         */
        export class ChargeItemDefinition  {

            constructor() {
                
            }

            
                /**
                 * This is a ChargeItemDefinition resource
                 */
                resourceType: string = 'ChargeItemDefinition;'
                

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
                 * An absolute URI that is used to identify this charge item definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this charge item definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the charge item definition is stored on different servers.
                 */
                url? : Uri;
                

                /**
                 * Extensions for url
                 */
                _url? : Element;
                

                /**
                 * A formal identifier that is used to identify this charge item definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
                 */
                identifier? : Identifier[];
                

                /**
                 * The identifier that is used to identify this version of the charge item definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the charge item definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active assets.
                 */
                version? : string;
                

                /**
                 * Extensions for version
                 */
                _version? : Element;
                

                /**
                 * A short, descriptive, user-friendly title for the charge item definition.
                 */
                title? : string;
                

                /**
                 * Extensions for title
                 */
                _title? : Element;
                

                /**
                 * The URL pointing to an externally-defined charge item definition that is adhered to in whole or in part by this definition.
                 */
                derivedFromUri? : Uri[];
                

                /**
                 * Extensions for derivedFromUri
                 */
                _derivedFromUri? : Element[];
                

                /**
                 * A larger definition of which this particular definition is a component or step.
                 */
                partOf? : Canonical[];
                

                /**
                 * As new versions of a protocol or guideline are defined, allows identification of what versions are replaced by a new instance.
                 */
                replaces? : Canonical[];
                

                /**
                 * The current state of the ChargeItemDefinition.
                 */
                status? : ChargeItemDefinitionStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * A Boolean value to indicate that this charge item definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
                 */
                experimental? : boolean;
                

                /**
                 * Extensions for experimental
                 */
                _experimental? : Element;
                

                /**
                 * The date  (and optionally time) when the charge item definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the charge item definition changes.
                 */
                date? : DateTime;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * The name of the organization or individual that published the charge item definition.
                 */
                publisher? : string;
                

                /**
                 * Extensions for publisher
                 */
                _publisher? : Element;
                

                /**
                 * Contact details to assist a user in finding and communicating with the publisher.
                 */
                contact? : ContactDetail[];
                

                /**
                 * A free text natural language description of the charge item definition from a consumer's perspective.
                 */
                description? : Markdown;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate charge item definition instances.
                 */
                useContext? : UsageContext[];
                

                /**
                 * A legal or geographic region in which the charge item definition is intended to be used.
                 */
                jurisdiction? : CodeableConcept[];
                

                /**
                 * A copyright statement relating to the charge item definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the charge item definition.
                 */
                copyright? : Markdown;
                

                /**
                 * Extensions for copyright
                 */
                _copyright? : Element;
                

                /**
                 * The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
                 */
                approvalDate? : Date;
                

                /**
                 * Extensions for approvalDate
                 */
                _approvalDate? : Element;
                

                /**
                 * The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.
                 */
                lastReviewDate? : Date;
                

                /**
                 * Extensions for lastReviewDate
                 */
                _lastReviewDate? : Element;
                

                /**
                 * The period during which the charge item definition content was or is planned to be in active use.
                 */
                effectivePeriod? : Period;
                

                /**
                 * The defined billing details in this resource pertain to the given billing code.
                 */
                code? : CodeableConcept;
                

                /**
                 * The defined billing details in this resource pertain to the given product instance(s).
                 */
                instance? : Reference[];
                

                /**
                 * Expressions that describe applicability criteria for the billing code.
                 */
                applicability? : ChargeItemDefinition_Applicability[];
                

                /**
                 * Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply.
                 */
                propertyGroup? : ChargeItemDefinition_PropertyGroup[];
                
        }
        