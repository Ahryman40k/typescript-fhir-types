
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_Coding, ICoding} from './RTTI_Coding';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';
import {RTTI_ImagingStudy_Series, IImagingStudy_Series} from './RTTI_ImagingStudy_Series';

export enum ImagingStudyStatusKind {
                registered = 'registered',
available = 'available',
cancelled = 'cancelled',
enteredInError = 'enteredInError',
unknown = 'unknown'
            }
const ImagingStudyStatusKindKeys = t.keyof({
                [ImagingStudyStatusKind.registered]: null,
[ImagingStudyStatusKind.available]: null,
[ImagingStudyStatusKind.cancelled]: null,
[ImagingStudyStatusKind.enteredInError]: null,
[ImagingStudyStatusKind.unknown]: null
            });


            export interface IImagingStudy {
                
                    /**
                     * This is a ImagingStudy resource
                     */
                    resourceType: 'ImagingStudy';
                    

                    /**
                     * The subject, typically a patient, of the imaging study.
                     */
                    subject : IReference;
                    
                
                    /**
                     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                     */
                    id? : string;
                    

                    /**
                     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                     */
                    meta? : IMeta;
                    

                    /**
                     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                     */
                    implicitRules? : string;
                    

                    /**
                     * Extensions for implicitRules
                     */
                    _implicitRules? : IElement;
                    

                    /**
                     * The base language in which the resource is written.
                     */
                    language? : string;
                    

                    /**
                     * Extensions for language
                     */
                    _language? : IElement;
                    

                    /**
                     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                     */
                    text? : INarrative;
                    

                    /**
                     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                     */
                    contained? : IResourceList[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * DICOM Study Instance UID, and Accession Number.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * The current state of the ImagingStudy.
                     */
                    status? : ImagingStudyStatusKind;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    

                    /**
                     * A list of all the series.modality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
                     */
                    modality? : ICoding[];
                    

                    /**
                     * The encounter or episode at which the request is initiated.
                     */
                    context? : IReference;
                    

                    /**
                     * Date and time the study started.
                     */
                    started? : string;
                    

                    /**
                     * Extensions for started
                     */
                    _started? : IElement;
                    

                    /**
                     * A list of the diagnostic requests that resulted in this imaging study being performed.
                     */
                    basedOn? : IReference[];
                    

                    /**
                     * The requesting/referring physician.
                     */
                    referrer? : IReference;
                    

                    /**
                     * Who read the study and interpreted the images or other content.
                     */
                    interpreter? : IReference[];
                    

                    /**
                     * The network service providing access (e.g., query, view, or retrieval) for the study. See implementation notes for information about using DICOM endpoints. A study-level endpoint applies to each series in the study, unless overridden by a series-level endpoint with the same Endpoint.connectionType.
                     */
                    endpoint? : IReference[];
                    

                    /**
                     * Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
                     */
                    numberOfSeries? : number;
                    

                    /**
                     * Extensions for numberOfSeries
                     */
                    _numberOfSeries? : IElement;
                    

                    /**
                     * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
                     */
                    numberOfInstances? : number;
                    

                    /**
                     * Extensions for numberOfInstances
                     */
                    _numberOfInstances? : IElement;
                    

                    /**
                     * A reference to the performed Procedure.
                     */
                    procedureReference? : IReference;
                    

                    /**
                     * The code for the performed procedure type.
                     */
                    procedureCode? : ICodeableConcept[];
                    

                    /**
                     * The principal physical location where the ImagingStudy was performed.
                     */
                    location? : IReference;
                    

                    /**
                     * Description of clinical condition indicating why the ImagingStudy was requested.
                     */
                    reasonCode? : ICodeableConcept[];
                    

                    /**
                     * Indicates another resource whose existence justifies this Study.
                     */
                    reasonReference? : IReference[];
                    

                    /**
                     * Per the recommended DICOM mapping, this element is derived from the Study Description attribute (0008,1030). Observations or findings about the imaging study should be recorded in another resource, e.g. Observation, and not in this element.
                     */
                    note? : IAnnotation[];
                    

                    /**
                     * The Imaging Manager description of the study. Institution-generated description or classification of the Study (component) performed.
                     */
                    description? : string;
                    

                    /**
                     * Extensions for description
                     */
                    _description? : IElement;
                    

                    /**
                     * Each study has one or more series of images or other content.
                     */
                    series? : IImagingStudy_Series[];
                    
            }
        


        export const RTTI_ImagingStudy: t.Type<IImagingStudy> = t.recursion( 'IImagingStudy', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('ImagingStudy'),
subject: RTTI_Reference
        })
        ,
                
        t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(RTTI_ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
status: ImagingStudyStatusKindKeys,
_status: RTTI_Element,
modality: t.array(RTTI_Coding),
context: RTTI_Reference,
started: t.string,
_started: RTTI_Element,
basedOn: t.array(RTTI_Reference),
referrer: RTTI_Reference,
interpreter: t.array(RTTI_Reference),
endpoint: t.array(RTTI_Reference),
numberOfSeries: t.number,
_numberOfSeries: RTTI_Element,
numberOfInstances: t.number,
_numberOfInstances: RTTI_Element,
procedureReference: RTTI_Reference,
procedureCode: t.array(RTTI_CodeableConcept),
location: RTTI_Reference,
reasonCode: t.array(RTTI_CodeableConcept),
reasonReference: t.array(RTTI_Reference),
note: t.array(RTTI_Annotation),
description: t.string,
_description: RTTI_Element,
series: t.array(RTTI_ImagingStudy_Series)
        })
        
            ])
        );
        

        