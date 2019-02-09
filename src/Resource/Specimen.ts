
        import { Annotation } from '../Resource/Annotation';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Specimen_Collection } from '../Resource/Specimen_Collection';
import { Specimen_Container } from '../Resource/Specimen_Container';
import { Specimen_Processing } from '../Resource/Specimen_Processing';
import { Uri } from '../Scalar/Uri';

        export enum SpecimenStatusKind {
                available,
unavailable,
unsatisfactory,
enteredInError
            }

        /**
         * A sample to be used for analysis. 
         */
        export class Specimen  {

            constructor() {
                
            }

            
                /**
                 * This is a Specimen resource
                 */
                resourceType: string = 'Specimen;'
                

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
                 * Id for specimen.
                 */
                identifier? : Identifier[];
                

                /**
                 * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
                 */
                accessionIdentifier? : Identifier;
                

                /**
                 * The availability of the specimen.
                 */
                status? : SpecimenStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * The kind of material that forms the specimen.
                 */
                type? : CodeableConcept;
                

                /**
                 * Where the specimen came from. This may be from patient(s),from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.
                 */
                subject? : Reference;
                

                /**
                 * Time when specimen was received for processing or testing.
                 */
                receivedTime? : DateTime;
                

                /**
                 * Extensions for receivedTime
                 */
                _receivedTime? : Element;
                

                /**
                 * Reference to the parent (source) specimen which is used when the specimen was either derived from or a component of another specimen.
                 */
                parent? : Reference[];
                

                /**
                 * Details concerning a service request that required a specimen to be collected.
                 */
                request? : Reference[];
                

                /**
                 * Details concerning the specimen collection.
                 */
                collection? : Specimen_Collection;
                

                /**
                 * Details concerning processing and processing steps for the specimen.
                 */
                processing? : Specimen_Processing[];
                

                /**
                 * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
                 */
                container? : Specimen_Container[];
                

                /**
                 * A mode or state of being that describes the nature of the specimen.
                 */
                condition? : CodeableConcept[];
                

                /**
                 * To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
                 */
                note? : Annotation[];
                
        }
        