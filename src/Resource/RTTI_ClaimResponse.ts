
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_ClaimResponse_Item, IClaimResponse_Item} from './RTTI_ClaimResponse_Item';
import {RTTI_ClaimResponse_AddItem, IClaimResponse_AddItem} from './RTTI_ClaimResponse_AddItem';
import {RTTI_ClaimResponse_Error, IClaimResponse_Error} from './RTTI_ClaimResponse_Error';
import {RTTI_ClaimResponse_Total, IClaimResponse_Total} from './RTTI_ClaimResponse_Total';
import {RTTI_ClaimResponse_Payment, IClaimResponse_Payment} from './RTTI_ClaimResponse_Payment';
import {RTTI_Coding, ICoding} from './RTTI_Coding';
import {RTTI_ClaimResponse_ProcessNote, IClaimResponse_ProcessNote} from './RTTI_ClaimResponse_ProcessNote';
import {RTTI_ClaimResponse_Insurance, IClaimResponse_Insurance} from './RTTI_ClaimResponse_Insurance';




            export interface IClaimResponse {
                
                    /**
                     * This is a ClaimResponse resource
                     */
                    resourceType: 'ClaimResponse'
                    
                
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
                     * The response business identifier.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * The status of the resource instance.
                     */
                    status? : string;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    

                    /**
                     * The category of claim, e.g, oral, pharmacy, vision, institutional, professional.
                     */
                    type? : ICodeableConcept;
                    

                    /**
                     * A finer grained suite of claim subtype codes which may convey Inpatient vs Outpatient and/or a specialty service. In the US the CMS Bill Type.
                     */
                    subType? : ICodeableConcept;
                    

                    /**
                     * A claim, a list of completed goods and services; a preauthorization, a list or proposed goods and services; or a predetermination, a set of goods and services being considered, for which insurer adjudication is sought.
                     */
                    use? : string;
                    

                    /**
                     * Extensions for use
                     */
                    _use? : IElement;
                    

                    /**
                     * Patient Resource.
                     */
                    patient? : IReference;
                    

                    /**
                     * The date when this resource was created.
                     */
                    created? : string;
                    

                    /**
                     * Extensions for created
                     */
                    _created? : IElement;
                    

                    /**
                     * The Insurer who produced this adjudicated response.
                     */
                    insurer? : IReference;
                    

                    /**
                     * The practitioner who is responsible for the services rendered to the patient.
                     */
                    requestProvider? : IReference;
                    

                    /**
                     * Original request resource reference.
                     */
                    request? : IReference;
                    

                    /**
                     * Transaction: error, complete, partial processing.
                     */
                    outcome? : string;
                    

                    /**
                     * Extensions for outcome
                     */
                    _outcome? : IElement;
                    

                    /**
                     * A description of the status of the adjudication.
                     */
                    disposition? : string;
                    

                    /**
                     * Extensions for disposition
                     */
                    _disposition? : IElement;
                    

                    /**
                     * A list of references from the Insurer to which these services pertain.
                     */
                    preAuthRef? : string;
                    

                    /**
                     * Extensions for preAuthRef
                     */
                    _preAuthRef? : IElement;
                    

                    /**
                     * Party to be reimbursed: Subscriber, provider, other.
                     */
                    payeeType? : ICodeableConcept;
                    

                    /**
                     * The first-tier service adjudications for submitted services.
                     */
                    item? : IClaimResponse_Item[];
                    

                    /**
                     * The first-tier service adjudications for payor added services.
                     */
                    addItem? : IClaimResponse_AddItem[];
                    

                    /**
                     * Mutually exclusive with Services Provided (Item).
                     */
                    error? : IClaimResponse_Error[];
                    

                    /**
                     * Totals for amounts submitted, co-pays, benefits payable etc.
                     */
                    total? : IClaimResponse_Total[];
                    

                    /**
                     * Payment details for the claim if the claim has been paid.
                     */
                    payment? : IClaimResponse_Payment;
                    

                    /**
                     * Status of funds reservation (For provider, for Patient, None).
                     */
                    reserved? : ICoding;
                    

                    /**
                     * The form to be used for printing the content.
                     */
                    form? : ICodeableConcept;
                    

                    /**
                     * Note text.
                     */
                    processNote? : IClaimResponse_ProcessNote[];
                    

                    /**
                     * Request for additional supporting or authorizing information, such as: documents, images or resources.
                     */
                    communicationRequest? : IReference[];
                    

                    /**
                     * Financial instrument by which payment information for health care.
                     */
                    insurance? : IClaimResponse_Insurance[];
                    
            }
        


        export const RTTI_ClaimResponse: t.Type<IClaimResponse> = t.recursion( 'IClaimResponse', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('ClaimResponse')
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
status: t.string,
_status: RTTI_Element,
type: RTTI_CodeableConcept,
subType: RTTI_CodeableConcept,
use: t.string,
_use: RTTI_Element,
patient: RTTI_Reference,
created: t.string,
_created: RTTI_Element,
insurer: RTTI_Reference,
requestProvider: RTTI_Reference,
request: RTTI_Reference,
outcome: t.string,
_outcome: RTTI_Element,
disposition: t.string,
_disposition: RTTI_Element,
preAuthRef: t.string,
_preAuthRef: RTTI_Element,
payeeType: RTTI_CodeableConcept,
item: t.array(RTTI_ClaimResponse_Item),
addItem: t.array(RTTI_ClaimResponse_AddItem),
error: t.array(RTTI_ClaimResponse_Error),
total: t.array(RTTI_ClaimResponse_Total),
payment: RTTI_ClaimResponse_Payment,
reserved: RTTI_Coding,
form: RTTI_CodeableConcept,
processNote: t.array(RTTI_ClaimResponse_ProcessNote),
communicationRequest: t.array(RTTI_Reference),
insurance: t.array(RTTI_ClaimResponse_Insurance)
        })
        
            ])
        );
        

        