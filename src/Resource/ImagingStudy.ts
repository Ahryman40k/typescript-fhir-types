
        import { Annotation } from '../Resource/Annotation';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Coding } from '../Resource/Coding';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { ImagingStudy_Series } from '../Resource/ImagingStudy_Series';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { UnsignedInt } from '../Scalar/UnsignedInt';
import { Uri } from '../Scalar/Uri';

        export enum ImagingStudyStatusKind {
                registered,
available,
cancelled,
enteredInError,
unknown
            }

        /**
         * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities. 
         */
        export class ImagingStudy  {

            constructor() {
                this.subject = new Reference();
            }

            
                /**
                 * This is a ImagingStudy resource
                 */
                resourceType: string = 'ImagingStudy;'
                

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
                 * DICOM Study Instance UID, and Accession Number.
                 */
                identifier? : Identifier[];
                

                /**
                 * The current state of the ImagingStudy.
                 */
                status? : ImagingStudyStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * A list of all the series.modality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
                 */
                modality? : Coding[];
                

                /**
                 * The subject, typically a patient, of the imaging study.
                 */
                subject : Reference;
                

                /**
                 * The encounter or episode at which the request is initiated.
                 */
                context? : Reference;
                

                /**
                 * Date and time the study started.
                 */
                started? : DateTime;
                

                /**
                 * Extensions for started
                 */
                _started? : Element;
                

                /**
                 * A list of the diagnostic requests that resulted in this imaging study being performed.
                 */
                basedOn? : Reference[];
                

                /**
                 * The requesting/referring physician.
                 */
                referrer? : Reference;
                

                /**
                 * Who read the study and interpreted the images or other content.
                 */
                interpreter? : Reference[];
                

                /**
                 * The network service providing access (e.g., query, view, or retrieval) for the study. See implementation notes for information about using DICOM endpoints. A study-level endpoint applies to each series in the study, unless overridden by a series-level endpoint with the same Endpoint.connectionType.
                 */
                endpoint? : Reference[];
                

                /**
                 * Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
                 */
                numberOfSeries? : UnsignedInt;
                

                /**
                 * Extensions for numberOfSeries
                 */
                _numberOfSeries? : Element;
                

                /**
                 * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
                 */
                numberOfInstances? : UnsignedInt;
                

                /**
                 * Extensions for numberOfInstances
                 */
                _numberOfInstances? : Element;
                

                /**
                 * A reference to the performed Procedure.
                 */
                procedureReference? : Reference;
                

                /**
                 * The code for the performed procedure type.
                 */
                procedureCode? : CodeableConcept[];
                

                /**
                 * The principal physical location where the ImagingStudy was performed.
                 */
                location? : Reference;
                

                /**
                 * Description of clinical condition indicating why the ImagingStudy was requested.
                 */
                reasonCode? : CodeableConcept[];
                

                /**
                 * Indicates another resource whose existence justifies this Study.
                 */
                reasonReference? : Reference[];
                

                /**
                 * Per the recommended DICOM mapping, this element is derived from the Study Description attribute (0008,1030). Observations or findings about the imaging study should be recorded in another resource, e.g. Observation, and not in this element.
                 */
                note? : Annotation[];
                

                /**
                 * The Imaging Manager description of the study. Institution-generated description or classification of the Study (component) performed.
                 */
                description? : string;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * Each study has one or more series of images or other content.
                 */
                series? : ImagingStudy_Series[];
                
        }
        