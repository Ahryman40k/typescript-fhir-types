
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Timing, ITiming} from './RTTI_Timing';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';
import { createEnumType } from '../../EnumType'

export enum DeviceUseStatementStatusKind {
                active = 'active',
completed = 'completed',
enteredInError = 'entered-in-error',
intended = 'intended',
stopped = 'stopped',
onHold = 'on-hold'
            }


            export interface IDeviceUseStatement {
                
                    /**
                     * This is a DeviceUseStatement resource
                     */
                    resourceType: 'DeviceUseStatement'
                    

                    /**
                     * The patient who used the device.
                     */
                    subject : IReference;
                    

                    /**
                     * The details of the device used.
                     */
                    device : IReference;
                    
                
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
                     * An external identifier for this statement such as an IRI.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * A plan, proposal or order that is fulfilled in whole or in part by this DeviceUseStatement.
                     */
                    basedOn? : IReference[];
                    

                    /**
                     * A code representing the patient or other source's judgment about the state of the device used that this statement is about.  Generally this will be active or completed.
                     */
                    status? : DeviceUseStatementStatusKind;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    

                    /**
                     * Allows linking the DeviceUseStatement to the underlying Request, or to other information that supports or is used to derive the DeviceUseStatement.
                     */
                    derivedFrom? : IReference[];
                    

                    /**
                     * How often the device was used.
                     */
                    timingTiming? : ITiming;
                    

                    /**
                     * How often the device was used.
                     */
                    timingPeriod? : IPeriod;
                    

                    /**
                     * How often the device was used.
                     */
                    timingDateTime? : string;
                    

                    /**
                     * Extensions for timingDateTime
                     */
                    _timingDateTime? : IElement;
                    

                    /**
                     * The time at which the statement was made/recorded.
                     */
                    recordedOn? : string;
                    

                    /**
                     * Extensions for recordedOn
                     */
                    _recordedOn? : IElement;
                    

                    /**
                     * Who reported the device was being used by the patient.
                     */
                    source? : IReference;
                    

                    /**
                     * Reason or justification for the use of the device.
                     */
                    reasonCode? : ICodeableConcept[];
                    

                    /**
                     * Indicates another resource whose existence justifies this DeviceUseStatement.
                     */
                    reasonReference? : IReference[];
                    

                    /**
                     * Indicates the anotomic location on the subject's body where the device was used ( i.e. the target).
                     */
                    bodySite? : ICodeableConcept;
                    

                    /**
                     * Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
                     */
                    note? : IAnnotation[];
                    
            }
        


        export const RTTI_DeviceUseStatement: t.Type<IDeviceUseStatement> = t.recursion( 'IDeviceUseStatement', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('DeviceUseStatement'),
subject: RTTI_Reference,
device: RTTI_Reference
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
basedOn: t.array(RTTI_Reference),
status: createEnumType<DeviceUseStatementStatusKind>(DeviceUseStatementStatusKind, 'DeviceUseStatementStatusKind'),
_status: RTTI_Element,
derivedFrom: t.array(RTTI_Reference),
timingTiming: RTTI_Timing,
timingPeriod: RTTI_Period,
timingDateTime: t.string,
_timingDateTime: RTTI_Element,
recordedOn: t.string,
_recordedOn: RTTI_Element,
source: RTTI_Reference,
reasonCode: t.array(RTTI_CodeableConcept),
reasonReference: t.array(RTTI_Reference),
bodySite: RTTI_CodeableConcept,
note: t.array(RTTI_Annotation)
        })
        
            ])
        );
        

        
