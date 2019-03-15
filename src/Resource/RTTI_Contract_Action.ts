
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Contract_Subject, IContract_Subject} from './RTTI_Contract_Subject';

import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_Timing, ITiming} from './RTTI_Timing';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';





            export interface IContract_Action {
                
                    /**
                     * Activity or service obligation to be done or not done, performed or not performed, effectuated or not by this Contract term.
                     */
                    type : ICodeableConcept;
                    

                    /**
                     * Reason or purpose for the action stipulated by this Contract Provision.
                     */
                    intent : ICodeableConcept;
                    

                    /**
                     * Current state of the term action.
                     */
                    status : ICodeableConcept;
                    
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * True if the term prohibits the  action.
                     */
                    doNotPerform? : boolean;
                    

                    /**
                     * Extensions for doNotPerform
                     */
                    _doNotPerform? : IElement;
                    

                    /**
                     * Entity of the action.
                     */
                    subject? : IContract_Subject[];
                    

                    /**
                     * Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse.
                     */
                    linkId? : string[];
                    

                    /**
                     * Extensions for linkId
                     */
                    _linkId? : IElement[];
                    

                    /**
                     * Encounter or Episode with primary association to specified term activity.
                     */
                    context? : IReference;
                    

                    /**
                     * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
                     */
                    contextLinkId? : string[];
                    

                    /**
                     * Extensions for contextLinkId
                     */
                    _contextLinkId? : IElement[];
                    

                    /**
                     * When action happens.
                     */
                    occurrenceDateTime? : string;
                    

                    /**
                     * Extensions for occurrenceDateTime
                     */
                    _occurrenceDateTime? : IElement;
                    

                    /**
                     * When action happens.
                     */
                    occurrencePeriod? : IPeriod;
                    

                    /**
                     * When action happens.
                     */
                    occurrenceTiming? : ITiming;
                    

                    /**
                     * Who or what initiated the action and has responsibility for its activation.
                     */
                    requester? : IReference[];
                    

                    /**
                     * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
                     */
                    requesterLinkId? : string[];
                    

                    /**
                     * Extensions for requesterLinkId
                     */
                    _requesterLinkId? : IElement[];
                    

                    /**
                     * The type of individual that is desired or required to perform or not perform the action.
                     */
                    performerType? : ICodeableConcept[];
                    

                    /**
                     * The type of role or competency of an individual desired or required to perform or not perform the action.
                     */
                    performerRole? : ICodeableConcept;
                    

                    /**
                     * Indicates who or what is being asked to perform (or not perform) the ction.
                     */
                    performer? : IReference;
                    

                    /**
                     * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
                     */
                    performerLinkId? : string[];
                    

                    /**
                     * Extensions for performerLinkId
                     */
                    _performerLinkId? : IElement[];
                    

                    /**
                     * Rationale for the action to be performed or not performed. Describes why the action is permitted or prohibited.
                     */
                    reasonCode? : ICodeableConcept[];
                    

                    /**
                     * Indicates another resource whose existence justifies permitting or not permitting this action.
                     */
                    reasonReference? : IReference[];
                    

                    /**
                     * Describes why the action is to be performed or not performed in textual form.
                     */
                    reason? : string[];
                    

                    /**
                     * Extensions for reason
                     */
                    _reason? : IElement[];
                    

                    /**
                     * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
                     */
                    reasonLinkId? : string[];
                    

                    /**
                     * Extensions for reasonLinkId
                     */
                    _reasonLinkId? : IElement[];
                    

                    /**
                     * Comments made about the term action made by the requester, performer, subject or other participants.
                     */
                    note? : IAnnotation[];
                    

                    /**
                     * Security labels that protects the action.
                     */
                    securityLabelNumber? : number[];
                    

                    /**
                     * Extensions for securityLabelNumber
                     */
                    _securityLabelNumber? : IElement[];
                    
            }
        


        export const RTTI_Contract_Action: t.Type<IContract_Action> = t.recursion( 'IContract_Action', () =>
            t.intersection([
                
        t.type({
           type: RTTI_CodeableConcept,
intent: RTTI_CodeableConcept,
status: RTTI_CodeableConcept
        })
        ,
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
doNotPerform: t.boolean,
_doNotPerform: RTTI_Element,
subject: t.array(RTTI_Contract_Subject),
linkId: t.array(t.string),
_linkId: t.array(RTTI_Element),
context: RTTI_Reference,
contextLinkId: t.array(t.string),
_contextLinkId: t.array(RTTI_Element),
occurrenceDateTime: t.string,
_occurrenceDateTime: RTTI_Element,
occurrencePeriod: RTTI_Period,
occurrenceTiming: RTTI_Timing,
requester: t.array(RTTI_Reference),
requesterLinkId: t.array(t.string),
_requesterLinkId: t.array(RTTI_Element),
performerType: t.array(RTTI_CodeableConcept),
performerRole: RTTI_CodeableConcept,
performer: RTTI_Reference,
performerLinkId: t.array(t.string),
_performerLinkId: t.array(RTTI_Element),
reasonCode: t.array(RTTI_CodeableConcept),
reasonReference: t.array(RTTI_Reference),
reason: t.array(t.string),
_reason: t.array(RTTI_Element),
reasonLinkId: t.array(t.string),
_reasonLinkId: t.array(RTTI_Element),
note: t.array(RTTI_Annotation),
securityLabelNumber: t.array(t.number),
_securityLabelNumber: t.array(RTTI_Element)
        })
        
            ])
        );
        

        