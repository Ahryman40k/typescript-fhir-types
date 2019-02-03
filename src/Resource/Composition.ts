
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Composition_Attester } from '../Resource/Composition_Attester';
import { Composition_Event } from '../Resource/Composition_Event';
import { Composition_RelatesTo } from '../Resource/Composition_RelatesTo';
import { Composition_Section } from '../Resource/Composition_Section';
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

        export enum CompositionStatusKind {
                preliminary,
final,
amended,
enteredInError
            }

        /**
         * A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.). 
         */
        export class Composition  {

            constructor() {
                this.Type = new CodeableConcept();
this.Author = new Array<Reference>();
            }

            
                /**
                 * This is a Composition resource
                 */
                ResourceType: string = 'Composition;'
                

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
                 * A version-independent identifier for the Composition. This identifier stays constant as the composition is changed over time.
                 */
                Identifier? : Identifier;
                

                /**
                 * The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document.
                 */
                Status? : CompositionStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Specifies the particular kind of composition (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the composition.
                 */
                Type : CodeableConcept;
                

                /**
                 * A categorization for the type of the composition - helps for indexing and searching. This may be implied by or derived from the code specified in the Composition Type.
                 */
                Category? : Array<CodeableConcept>;
                

                /**
                 * Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure).
                 */
                Subject? : Reference;
                

                /**
                 * Describes the clinical encounter or type of care this documentation is associated with.
                 */
                Encounter? : Reference;
                

                /**
                 * The composition editing time, when the composition was last logically changed by the author.
                 */
                Date? : DateTime;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
                 */
                Author : Array<Reference>;
                

                /**
                 * Official human-readable label for the composition.
                 */
                Title? : String;
                

                /**
                 * Extensions for title
                 */
                _title? : Element;
                

                /**
                 * The code specifying the level of confidentiality of the Composition.
                 */
                Confidentiality? : Code;
                

                /**
                 * Extensions for confidentiality
                 */
                _confidentiality? : Element;
                

                /**
                 * A participant who has attested to the accuracy of the composition/document.
                 */
                Attester? : Array<Composition_Attester>;
                

                /**
                 * Identifies the organization or group who is responsible for ongoing maintenance of and access to the composition/document information.
                 */
                Custodian? : Reference;
                

                /**
                 * Relationships that this composition has with other compositions or documents that already exist.
                 */
                RelatesTo? : Array<Composition_RelatesTo>;
                

                /**
                 * The clinical service, such as a colonoscopy or an appendectomy, being documented.
                 */
                Event? : Array<Composition_Event>;
                

                /**
                 * The root of the sections that make up the composition.
                 */
                Section? : Array<Composition_Section>;
                
        }
        