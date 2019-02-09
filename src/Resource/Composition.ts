
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
                this.type = new CodeableConcept();
this.author = new Array<Reference>();
            }

            
                /**
                 * This is a Composition resource
                 */
                resourceType: string = 'Composition;'
                

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
                 * A version-independent identifier for the Composition. This identifier stays constant as the composition is changed over time.
                 */
                identifier? : Identifier;
                

                /**
                 * The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document.
                 */
                status? : CompositionStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Specifies the particular kind of composition (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the composition.
                 */
                type : CodeableConcept;
                

                /**
                 * A categorization for the type of the composition - helps for indexing and searching. This may be implied by or derived from the code specified in the Composition Type.
                 */
                category? : CodeableConcept[];
                

                /**
                 * Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure).
                 */
                subject? : Reference;
                

                /**
                 * Describes the clinical encounter or type of care this documentation is associated with.
                 */
                encounter? : Reference;
                

                /**
                 * The composition editing time, when the composition was last logically changed by the author.
                 */
                date? : DateTime;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
                 */
                author : Reference[];
                

                /**
                 * Official human-readable label for the composition.
                 */
                title? : string;
                

                /**
                 * Extensions for title
                 */
                _title? : Element;
                

                /**
                 * The code specifying the level of confidentiality of the Composition.
                 */
                confidentiality? : Code;
                

                /**
                 * Extensions for confidentiality
                 */
                _confidentiality? : Element;
                

                /**
                 * A participant who has attested to the accuracy of the composition/document.
                 */
                attester? : Composition_Attester[];
                

                /**
                 * Identifies the organization or group who is responsible for ongoing maintenance of and access to the composition/document information.
                 */
                custodian? : Reference;
                

                /**
                 * Relationships that this composition has with other compositions or documents that already exist.
                 */
                relatesTo? : Composition_RelatesTo[];
                

                /**
                 * The clinical service, such as a colonoscopy or an appendectomy, being documented.
                 */
                event? : Composition_Event[];
                

                /**
                 * The root of the sections that make up the composition.
                 */
                section? : Composition_Section[];
                
        }
        