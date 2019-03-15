
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_ProcessRequest_Item, IProcessRequest_Item} from './RTTI_ProcessRequest_Item';

import {RTTI_Period, IPeriod} from './RTTI_Period';

export enum ProcessRequestActionKind {
                cancel = 'cancel',
poll = 'poll',
reprocess = 'reprocess',
status = 'status'
            }
const ProcessRequestActionKindKeys = t.keyof({
                [ProcessRequestActionKind.cancel]: null,
[ProcessRequestActionKind.poll]: null,
[ProcessRequestActionKind.reprocess]: null,
[ProcessRequestActionKind.status]: null
            });


            export interface IProcessRequest {
                
                    /**
                     * This is a ProcessRequest resource
                     */
                    resourceType: 'ProcessRequest';
                    
                
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
                     * The ProcessRequest business identifier.
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
                     * The type of processing action being requested, for example Reversal, Readjudication, StatusRequest, PendedRequest.
                     */
                    action? : ProcessRequestActionKind;
                    

                    /**
                     * Extensions for action
                     */
                    _action? : IElement;
                    

                    /**
                     * The organization which is the target of the request.
                     */
                    target? : IReference;
                    

                    /**
                     * The date when this resource was created.
                     */
                    created? : string;
                    

                    /**
                     * Extensions for created
                     */
                    _created? : IElement;
                    

                    /**
                     * The practitioner who is responsible for the action specified in this request.
                     */
                    provider? : IReference;
                    

                    /**
                     * Reference of resource which is the target or subject of this action.
                     */
                    request? : IReference;
                    

                    /**
                     * Reference of a prior response to resource which is the target or subject of this action.
                     */
                    response? : IReference;
                    

                    /**
                     * If true remove all history excluding audit.
                     */
                    nullify? : boolean;
                    

                    /**
                     * Extensions for nullify
                     */
                    _nullify? : IElement;
                    

                    /**
                     * A reference to supply which authenticates the process.
                     */
                    reference? : string;
                    

                    /**
                     * Extensions for reference
                     */
                    _reference? : IElement;
                    

                    /**
                     * List of top level items to be re-adjudicated, if none specified then the entire submission is re-adjudicated.
                     */
                    item? : IProcessRequest_Item[];
                    

                    /**
                     * Names of resource types to include.
                     */
                    include? : string[];
                    

                    /**
                     * Extensions for include
                     */
                    _include? : IElement[];
                    

                    /**
                     * Names of resource types to exclude.
                     */
                    exclude? : string[];
                    

                    /**
                     * Extensions for exclude
                     */
                    _exclude? : IElement[];
                    

                    /**
                     * A period of time during which the fulfilling resources would have been created.
                     */
                    period? : IPeriod;
                    
            }
        


        export const RTTI_ProcessRequest: t.Type<IProcessRequest> = t.recursion( 'IProcessRequest', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('ProcessRequest')
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
action: ProcessRequestActionKindKeys,
_action: RTTI_Element,
target: RTTI_Reference,
created: t.string,
_created: RTTI_Element,
provider: RTTI_Reference,
request: RTTI_Reference,
response: RTTI_Reference,
nullify: t.boolean,
_nullify: RTTI_Element,
reference: t.string,
_reference: RTTI_Element,
item: t.array(RTTI_ProcessRequest_Item),
include: t.array(t.string),
_include: t.array(RTTI_Element),
exclude: t.array(t.string),
_exclude: t.array(RTTI_Element),
period: RTTI_Period
        })
        
            ])
        );
        

        