
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Specimen_Collection, ISpecimen_Collection} from './RTTI_Specimen_Collection';
import {RTTI_Specimen_Processing, ISpecimen_Processing} from './RTTI_Specimen_Processing';
import {RTTI_Specimen_Container, ISpecimen_Container} from './RTTI_Specimen_Container';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';

export enum SpecimenStatusKind {
                available = 'available',
unavailable = 'unavailable',
unsatisfactory = 'unsatisfactory',
enteredInError = 'enteredInError'
            }
const SpecimenStatusKindKeys = t.keyof({
                [SpecimenStatusKind.available]: null,
[SpecimenStatusKind.unavailable]: null,
[SpecimenStatusKind.unsatisfactory]: null,
[SpecimenStatusKind.enteredInError]: null
            });


            export interface ISpecimen {
                
                    /**
                     * This is a Specimen resource
                     */
                    resourceType: 'Specimen';
                    
                
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
                     * Id for specimen.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
                     */
                    accessionIdentifier? : IIdentifier;
                    

                    /**
                     * The availability of the specimen.
                     */
                    status? : SpecimenStatusKind;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    

                    /**
                     * The kind of material that forms the specimen.
                     */
                    type? : ICodeableConcept;
                    

                    /**
                     * Where the specimen came from. This may be from patient(s),from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.
                     */
                    subject? : IReference;
                    

                    /**
                     * Time when specimen was received for processing or testing.
                     */
                    receivedTime? : string;
                    

                    /**
                     * Extensions for receivedTime
                     */
                    _receivedTime? : IElement;
                    

                    /**
                     * Reference to the parent (source) specimen which is used when the specimen was either derived from or a component of another specimen.
                     */
                    parent? : IReference[];
                    

                    /**
                     * Details concerning a service request that required a specimen to be collected.
                     */
                    request? : IReference[];
                    

                    /**
                     * Details concerning the specimen collection.
                     */
                    collection? : ISpecimen_Collection;
                    

                    /**
                     * Details concerning processing and processing steps for the specimen.
                     */
                    processing? : ISpecimen_Processing[];
                    

                    /**
                     * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
                     */
                    container? : ISpecimen_Container[];
                    

                    /**
                     * A mode or state of being that describes the nature of the specimen.
                     */
                    condition? : ICodeableConcept[];
                    

                    /**
                     * To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
                     */
                    note? : IAnnotation[];
                    
            }
        


        export const RTTI_Specimen: t.Type<ISpecimen> = t.recursion( 'ISpecimen', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('Specimen')
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
accessionIdentifier: RTTI_Identifier,
status: SpecimenStatusKindKeys,
_status: RTTI_Element,
type: RTTI_CodeableConcept,
subject: RTTI_Reference,
receivedTime: t.string,
_receivedTime: RTTI_Element,
parent: t.array(RTTI_Reference),
request: t.array(RTTI_Reference),
collection: RTTI_Specimen_Collection,
processing: t.array(RTTI_Specimen_Processing),
container: t.array(RTTI_Specimen_Container),
condition: t.array(RTTI_CodeableConcept),
note: t.array(RTTI_Annotation)
        })
        
            ])
        );
        

        